import { NextResponse } from "next/server";
import { auth } from "@/app/lib/auth";

export async function POST(request) {
  try {
    const { rider, password } = await request.json();

    if (!rider || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Rider information and password are required.",
        },
        {
          status: 400,
        }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 8 characters.",
        },
        {
          status: 400,
        }
      );
    }

    if (rider.status !== "pending") {
      return NextResponse.json(
        {
          success: false,
          message: "Only pending riders can be approved.",
        },
        {
          status: 400,
        }
      );
    }

    const result = await auth.api.signUpEmail({
      body: {
        name: rider.name,
        email: rider.email,
        password,
        role: "rider",
        phone: rider.phone,
        nid: rider.nid,
        location: rider.area,
        status: "active",
      },
    });

    if (!result?.user?.id) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to create Better Auth account.",
        },
        {
          status: 500,
        }
      );
    }

    const updateResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/riders/${rider._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "active",
          userId: result.user.id,
        }),
      }
    );

    const updateText = await updateResponse.text();

    console.log("PATCH STATUS:", updateResponse.status);
    console.log("PATCH RESPONSE:", updateText);

    let updateData;

    try {
      updateData = JSON.parse(updateText);
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Express returned a non-JSON response.",
          response: updateText,
        },
        {
          status: 500,
        }
      );
    }

    if (!updateResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message:
            updateData.message ||
            "Better Auth account created but rider update failed.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Rider approved and account created successfully.",
      userId: result.user.id,
      rider: updateData.rider,
    });
  } catch (error) {
    console.error("Approve rider error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to approve rider.",
      },
      {
        status: 500,
      }
    );
  }
}
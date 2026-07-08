import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Note from "@/lib/models/notes";
import mongoose from "mongoose";

// GET NOTES
export async function GET() {
  try {
    await connectDB();

    const notes = await Note.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      notes,
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      {
        status: 500,
      }
    );
  }
}

// CREATE NOTE
export async function POST(req) {
  try {
    await connectDB();

    const { className, subject, status, pdfURL } = await req.json();

    if (!className || !subject || !status) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    await Note.create({
      className,
      subject,
      status,
      pdfURL
    });

    return NextResponse.json({
      success: true,
      message: "Note Uploaded",
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      {
        status: 500,
      },
    );
  }
}


// DELETE NOTE
export async function DELETE(req) {
  try {
    await connectDB();

    const { className, subject } = await req.json();

    const note = await Note.findOne({
      className,
      subject,
    });

    if (!note) {
      return NextResponse.json({
        success: false,
        message: "Note not found",
      });
    }

    await Note.findByIdAndDelete(note._id);

    return NextResponse.json({
      success: true,
      message: "Deleted Successfully",
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      {
        status: 500,
      }
    );
  }
}

// UPDATE NOTE
export async function PUT(req) {
  try {
    await connectDB();

    const formData = await req.formData();

    const className = formData.get("className");
    const subject = formData.get("subject");
    const status = formData.get("status");
    const pdfURL = formData.get("pdfURL");

    const note = await Note.findOne({
      className,
      subject,
    });

    if (!note) {
      return NextResponse.json(
        {
          success: false,
          message: "Note not found",
        },
        {
          status: 404,
        }
      );
    }


    // Update status
    note.status = status;
    note.pdfURL = pdfURL;
    await note.save();

    return NextResponse.json({
      success: true,
      message: "Note updated successfully",
      note,
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      {
        status: 500,
      }
    );
  }
}

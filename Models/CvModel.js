import { Schema } from "mongoose";
import mongoose from "mongoose";
const cvSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other", "select"],
      default: "select",
    },
    maritalStatus: {
      type: String,
      required: true,
      enum: ["single", "married", "divorce", "widowed", "select"],
      default: "select",
    },
    profession: {
      type: String,
      required: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
    },
    stateProvince: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
      enum: ["Pakistan", "India", "Australia", "Ireland", "Canada", "select"],
      default: "select",
    },
    passportNumber: {
      type: Number,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
    },
    employer: {
      type: String,
    },
    previousWorkLocation: {
      type: String,
    },
    previousWorkState: {
      type: String,
    },
    jobStartDate: {
      type: String,
    },
    jobEndData: {
      type: String,
    },
    schoolName: {
      type: String,
    },
    schoolLocation: {
      type: String,
    },
    schoolState: {
      type: String,
    },
    degree: {
      type: String,
      required: true,
      enum: ["Matric", "intermediate", "secondary", "MBA", "BA", "select"],
      default: "select",
    },
    fieldOfStudy: {
      type: String,
    },
    graduationStartDate: {
      type: String,
    },
    graduationEndDate: {
      type: String,
    },
    skills: {
      type: [
        {
          skill: {
            type: String,
          },
          level: {
            type: String,
            enum: [
              "Novice",
              "Beginners",
              "Intermediate",
              "Proficient",
              "Expert",
              "Select",
            ],
            default: "Select",
          },
        },
      ],
    },
    summary: {
      type: String,
    },
    Hobbies: {
      type: [
        {
          HobbiesInterest: {
            type: String,
          },
        },
      ],
    },
    photoAndSocial: {
      type: {
        image: {
          type: String,
        },
        fbUserName: {
          type: String,
        },
        twitterUserName: {
          type: String,
        },
        linkedinUserName: {
          type: String,
        },
        websiteURL: {
          type: String,
        },
      },
    },

    refereesName: {
      type: String,
    },
    refereesLastName: {
      type: String,
    },
    position: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    companyNameOrganization: {
      type: String,
    },
    relationShip: {
      type: String,
    },

    software: {
      type: [
        {
          software: {
            type: String,
          },
          level: {
            type: String,
            enum: [
              "Novice",
              "Beginners",
              "Intermediate",
              "Proficient",
              "Expert",
              "Select",
            ],
            default: "Select",
          },
        },
      ],
    },

    language: {
      type: [
        {
          language: {
            type: String,
          },
          level: {
            type: String,
            enum: [
              "Novice",
              "Beginners",
              "Intermediate",
              "Proficient",
              "Expert",
              "Select",
            ],
            default: "Select",
          },
        },
      ],
    },

    certification: {
      type: [
        {
          certificate: {
            type: String,
          },
          year: {
            type: String,
          },
        },
      ],
    },
    awards: {
      type: String,
    },
    publication: {
      type: String,
    },
    affiliations: {
      type: String,
    },
    accomplishments: {
      type: String,
    },
    additionalInfo: {
      type: String,
    },

    others: {
      type: {
        title: {
          type: String,
        },
        otherInfo: {
          type: String,
        },
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cv", cvSchema);

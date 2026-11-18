import { r as h } from "./index-CiCrIMMp.js?v=stealth-v14";

export function initNeerajPlanReact() {}

export const DEFAULT_PROFILE_ID = "11111111-1111-4111-a111-111111111111";

/**
 * Checks whether the current active profile is "NEERAJ".
 * Scoped strictly so custom PPL routines are ONLY visible and accessible under NEERAJ.
 */
export function isNeerajProfile(profileId, profiles = []) {
  if (!profileId || profileId === DEFAULT_PROFILE_ID) return true;
  const prof = profiles.find((p) => p.id === profileId);
  if (prof && prof.name && prof.name.trim().toUpperCase() === "NEERAJ") return true;
  return false;
}

/**
 * Master Seed Routines for "Beginner 6-Day PPL (Asymmetry & Posture Corrected)"
 * Scoped to userId: "NEERAJ" and user_id: DEFAULT_PROFILE_ID.
 */
export const NEERAJ_PPL_ROUTINES = [
  {
    "id": "neeraj-ppl-push-a",
    "name": "Push A (Upper Chest & Lateral Delts) \u2014 Neeraj PPL",
    "day": 1,
    "focus": "Upper Chest (Clavicular Head) & Lateral Delts",
    "exercises": [
      {
        "exerciseId": "neeraj-incline-db-bench-30",
        "exerciseName": "Incline Dumbbell Bench Press (30\u00b0)",
        "muscle": "Chest",
        "equipment": "Dumbbell",
        "category": "Push",
        "group": "Main",
        "target": "Upper Chest (Clavicular Head)",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 10,
        "targetRepsMin": 10,
        "targetRepsMax": 12,
        "defaultRepRange": "10-12",
        "targetWeightKg": 0,
        "formTips": "Bench at 30\u00b0. Lock shoulder blades down into back pockets before pressing. Control down for 3 seconds; touch DBs to upper chest level without letting the right shoulder hike up.",
        "asymmetryCues": "Unilateral dumbbell freedom prevents left arm from dominating; keep right shoulder depressed.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Incline Barbell Press"
          },
          {
            "category": "Machine",
            "name": "Tunturi Multi-Press (Incline setting)"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Incline Push-Ups (Feet elevated on bench)"
          }
        ]
      },
      {
        "exerciseId": "neeraj-pec-deck-fly-machine",
        "exerciseName": "Pec Deck Fly Machine",
        "muscle": "Chest",
        "equipment": "Machine",
        "category": "Isolation",
        "group": "Main",
        "target": "Mid Chest & Stretch",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 10,
        "targetRepsMin": 10,
        "targetRepsMax": 12,
        "defaultRepRange": "10-12",
        "targetWeightKg": 0,
        "formTips": "Handles aligned with mid-chest. Slight elbow bend, drive elbows together, hold peak squeeze for 1 second.",
        "asymmetryCues": "Ensure symmetrical chest stretch; keep shoulders back against pad without shrugging right side.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Flat Dumbbell Flyes"
          },
          {
            "category": "Machine",
            "name": "Standing Mid-Pulley Cable Fly"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Floor Dumbbell Flyes"
          }
        ]
      },
      {
        "exerciseId": "neeraj-seated-db-shoulder-press",
        "exerciseName": "Seated Dumbbell Shoulder Press",
        "muscle": "Shoulders",
        "equipment": "Dumbbell",
        "category": "Push",
        "group": "Main",
        "target": "Anterior & Lateral Delts",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 10,
        "targetRepsMin": 10,
        "targetRepsMax": 12,
        "defaultRepRange": "10-12",
        "targetWeightKg": 0,
        "formTips": "Elbows angled 30\u00b0 in front of torso (scapular plane). Stop just short of full lockout to keep tension off neck traps.",
        "asymmetryCues": "Scapular plane pressing protects right rotator cuff; depress right shoulder blade before pressing.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Standing Dumbbell Press"
          },
          {
            "category": "Machine",
            "name": "Tunturi Multi-Press (Shoulder setting)"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Pike Push-Ups on floor"
          }
        ]
      },
      {
        "exerciseId": "neeraj-standing-db-lateral-raise",
        "exerciseName": "Standing Dumbbell Lateral Raises",
        "muscle": "Shoulders",
        "equipment": "Dumbbell",
        "category": "Isolation",
        "group": "Main",
        "target": "Lateral Delts (Width)",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 12,
        "targetRepsMin": 12,
        "targetRepsMax": 15,
        "defaultRepRange": "12-15",
        "targetWeightKg": 0,
        "formTips": "Push dumbbells OUT toward side walls, never straight up. Stop lifting at shoulder level so right trap cannot take over.",
        "asymmetryCues": "Strictly prevent right upper trap hiking; lead with elbows and keep shoulders depressed.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Seated Incline Dumbbell Lateral Raises"
          },
          {
            "category": "Machine",
            "name": "Low-Pulley Cable Lateral Raise (behind back)"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Resistance Band Side Raises"
          }
        ]
      },
      {
        "exerciseId": "neeraj-overhead-cable-rope-triceps-ext",
        "exerciseName": "Overhead Cable Rope Triceps Extension",
        "muscle": "Triceps",
        "equipment": "Cable",
        "category": "Push",
        "group": "Main",
        "target": "Triceps (Long Head)",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 10,
        "targetRepsMin": 10,
        "targetRepsMax": 12,
        "defaultRepRange": "10-12",
        "targetWeightKg": 0,
        "formTips": "Flare rope apart at top extension. Allow deep stretch behind head while keeping elbows tucked forward.",
        "asymmetryCues": "Maintain equal elbow tuck; do not let right shoulder elevate into neck.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Seated Two-Hand Overhead DB Extension"
          },
          {
            "category": "Machine",
            "name": "Incline EZ-Bar Skull Crushers"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Bodyweight Bench Dips (legs extended)"
          }
        ]
      }
    ],
    "user_id": "11111111-1111-4111-a111-111111111111",
    "userId": "NEERAJ",
    "profileName": "NEERAJ",
    "planName": "Beginner 6-Day PPL (Asymmetry & Posture Corrected)",
    "notes": "\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nPUSH A (UPPER CHEST & LATERAL DELTS) \u2014 NEERAJ PPL \u2014 NEERAJ PPL (ASYMMETRY CORRECTED)\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nTarget Focus: Upper Chest (Clavicular Head) & Lateral Delts\n\n### \ud83d\udee1\ufe0f SCAPULAR / ASYMMETRY FOCUS\nRight shoulder elevation correction: strict unilateral dumbbell focus and scapular depression cues (pull shoulder blades down into back pockets; prevent right trap hiking).\n\n### \u23f1\ufe0f PRE-WORKOUT WARM-UP (8\u201310 Mins)\n1. 3 mins cardio (Stairmaster or Elliptical)\n2. Right Upper Trap Release: 30s gentle neck stretch to the left (reach right fingertips to floor)\n3. Prone Incline Y-Raises: 10 unweighted reps (focus on lower trapezius pulling right shoulder blade down)\n4. Dynamic Arm Swings & Leg Swings (15 reps each)\n5. 1 warmup feeder set at 50% working weight before first compound movement\n\n### \u26a1 CORE & ABS FINISHER (Optional 2x / Week)\nFormat: 35s work / 25s rest (2 rounds)\n1. Slow-Tempo Mountain Climbers (Zero torso twist, rigid plank)\n2. Floor Crunches with 2-Second Hold (Ribs to hips squeeze)\n3. Forearm Plank Hold (Depress shoulders, tight glutes)\n\n### \ud83e\uddd8 POST-WORKOUT COOL-DOWN (5 Mins)\n1. Pull-up bar Dead Hang: 2 x 30s (Spinal decompression)\n2. Doorway Chest & Front Shoulder Stretch: 45s per side\n3. Kneeling Hip Flexor Stretch: 45s per side\n4. Child's Pose into Cobra Stretch: 60s deep breathing\n",
    "updatedAt": "2026-11-16T12:00:00.000Z"
  },
  {
    "id": "neeraj-ppl-pull-a",
    "name": "Pull A (Lat Width & Lower Lats) \u2014 Neeraj PPL",
    "day": 2,
    "focus": "Lower Lats & Lat Width Focus",
    "exercises": [
      {
        "exerciseId": "neeraj-lat-pulldown-vbar",
        "exerciseName": "Lat Pulldown (Neutral Close-Grip / V-Bar)",
        "muscle": "Back",
        "equipment": "Cable",
        "category": "Pull",
        "group": "Main",
        "target": "Lower Lats & Width",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 10,
        "targetRepsMin": 10,
        "targetRepsMax": 12,
        "defaultRepRange": "10-12",
        "targetWeightKg": 0,
        "formTips": "Initiate pull by actively drawing right shoulder blade DOWN first, then pull elbows into ribs.",
        "asymmetryCues": "Neutral V-bar reduces internal shoulder rotation; ensure right lat initiates before right bicep/trap.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Single-Arm Lat Pulldown with D-Handle"
          },
          {
            "category": "Machine",
            "name": "Assisted Pull-Up Machine (Neutral grip)"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Strict Bodyweight Pull-Ups (with assistance band)"
          }
        ]
      },
      {
        "exerciseId": "neeraj-single-arm-db-row",
        "exerciseName": "Single-Arm Dumbbell Row",
        "muscle": "Back",
        "equipment": "Dumbbell",
        "category": "Pull",
        "group": "Main",
        "target": "Lower Lat Isolation",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 10,
        "targetRepsMin": 10,
        "targetRepsMax": 12,
        "defaultRepRange": "10-12",
        "targetWeightKg": 0,
        "formTips": "Row dumbbell toward hip crease. Elbow stays brushed tight against ribs.",
        "asymmetryCues": "Start with right side to calibrate strict form; keep right shoulder depressed and away from ear.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Incline Chest-Supported Dumbbell Row"
          },
          {
            "category": "Machine",
            "name": "Tunturi Low Cable Row (Single-Arm D-Handle)"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Inverted Bodyweight Rows (Underhand)"
          }
        ]
      },
      {
        "exerciseId": "neeraj-straight-arm-cable-pulldown",
        "exerciseName": "Straight-Arm Cable Lat Pushdown",
        "muscle": "Back",
        "equipment": "Cable",
        "category": "Isolation",
        "group": "Main",
        "target": "Lat Mind-Muscle Isolation",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 12,
        "targetRepsMin": 12,
        "targetRepsMax": 15,
        "defaultRepRange": "12-15",
        "targetWeightKg": 0,
        "formTips": "Arms slightly soft at elbow. Sweep hands down to thighs in an arc while keeping chest tall.",
        "asymmetryCues": "Depress both scapulae simultaneously at the bottom squeeze.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Dumbbell Pullover on Flat Bench"
          },
          {
            "category": "Machine",
            "name": "Dual Cable Kneeling Pullovers"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Resistance Band Lat Pull-Down"
          }
        ]
      },
      {
        "exerciseId": "neeraj-standing-db-bicep-curl",
        "exerciseName": "Standing Dumbbell Bicep Curls",
        "muscle": "Biceps",
        "equipment": "Dumbbell",
        "category": "Pull",
        "group": "Main",
        "target": "Biceps (Long Head / Peak)",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 10,
        "targetRepsMin": 10,
        "targetRepsMax": 12,
        "defaultRepRange": "10-12",
        "targetWeightKg": 0,
        "formTips": "Start neutral, rotate palms up as you curl. Keep elbows stationary at sides.",
        "asymmetryCues": "Prevent right shoulder from swaying forward or hiking during peak contraction.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Incline Dumbbell Curls (Full stretch)"
          },
          {
            "category": "Machine",
            "name": "Tunturi Preacher Curl Machine"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Standing Cable Straight-Bar Curls"
          }
        ]
      }
    ],
    "user_id": "11111111-1111-4111-a111-111111111111",
    "userId": "NEERAJ",
    "profileName": "NEERAJ",
    "planName": "Beginner 6-Day PPL (Asymmetry & Posture Corrected)",
    "notes": "\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nPULL A (LAT WIDTH & LOWER LATS) \u2014 NEERAJ PPL \u2014 NEERAJ PPL (ASYMMETRY CORRECTED)\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nTarget Focus: Lower Lats & Lat Width Focus\n\n### \ud83d\udee1\ufe0f SCAPULAR / ASYMMETRY FOCUS\nRight shoulder elevation correction: strict unilateral dumbbell focus and scapular depression cues (pull shoulder blades down into back pockets; prevent right trap hiking).\n\n### \u23f1\ufe0f PRE-WORKOUT WARM-UP (8\u201310 Mins)\n1. 3 mins cardio (Stairmaster or Elliptical)\n2. Right Upper Trap Release: 30s gentle neck stretch to the left (reach right fingertips to floor)\n3. Prone Incline Y-Raises: 10 unweighted reps (focus on lower trapezius pulling right shoulder blade down)\n4. Dynamic Arm Swings & Leg Swings (15 reps each)\n5. 1 warmup feeder set at 50% working weight before first compound movement\n\n### \u26a1 CORE & ABS FINISHER (Optional 2x / Week)\nFormat: 35s work / 25s rest (2 rounds)\n1. Slow-Tempo Mountain Climbers (Zero torso twist, rigid plank)\n2. Floor Crunches with 2-Second Hold (Ribs to hips squeeze)\n3. Forearm Plank Hold (Depress shoulders, tight glutes)\n\n### \ud83e\uddd8 POST-WORKOUT COOL-DOWN (5 Mins)\n1. Pull-up bar Dead Hang: 2 x 30s (Spinal decompression)\n2. Doorway Chest & Front Shoulder Stretch: 45s per side\n3. Kneeling Hip Flexor Stretch: 45s per side\n4. Child's Pose into Cobra Stretch: 60s deep breathing\n",
    "updatedAt": "2026-11-16T12:00:00.000Z"
  },
  {
    "id": "neeraj-ppl-legs-a",
    "name": "Legs A (Quad Dominance & Calves) \u2014 Neeraj PPL",
    "day": 3,
    "focus": "Quad Dominance & Calves Focus",
    "exercises": [
      {
        "exerciseId": "neeraj-tunturi-45-leg-press",
        "exerciseName": "Tunturi 45\u00b0 Leg Press",
        "muscle": "Legs",
        "equipment": "Machine",
        "category": "Squat",
        "group": "Main",
        "target": "Quads (Mid-foot placement)",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 10,
        "targetRepsMin": 10,
        "targetRepsMax": 12,
        "defaultRepRange": "10-12",
        "targetWeightKg": 0,
        "formTips": "Feet shoulder-width in middle of plate. 3-second descent. Never hyperextend/lock knees at top.",
        "asymmetryCues": "Maintain even bilateral pressure through both feet; keep pelvis square against backrest.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Dumbbell Goblet Squat (Heels elevated)"
          },
          {
            "category": "Machine",
            "name": "Plate-Loaded Hack Squat Machine"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Deep Bodyweight Air Squats"
          }
        ]
      },
      {
        "exerciseId": "neeraj-pin-loaded-leg-extension",
        "exerciseName": "Pin-Loaded Leg Extension Machine",
        "muscle": "Quadriceps",
        "equipment": "Machine",
        "category": "Isolation",
        "group": "Main",
        "target": "Quad Isolation (Rectus Femoris)",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 12,
        "targetRepsMin": 12,
        "targetRepsMax": 15,
        "defaultRepRange": "12-15",
        "targetWeightKg": 0,
        "formTips": "3-second negative descent. Hold top contraction for 1 full second.",
        "asymmetryCues": "Align knee joints with pivot point; grip side handles to keep torso firmly down.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Dumbbell Sissy Squats"
          },
          {
            "category": "Machine",
            "name": "Single-Leg Machine Extension"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Reverse Nordic Curls (Floor)"
          }
        ]
      },
      {
        "exerciseId": "neeraj-standing-calf-raises",
        "exerciseName": "Standing Calf Raises (Step / Edge of plate)",
        "muscle": "Calves",
        "equipment": "Machine",
        "category": "Isolation",
        "group": "Main",
        "target": "Calves (Gastrocnemius)",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 15,
        "targetRepsMin": 15,
        "targetRepsMax": 15,
        "defaultRepRange": "15",
        "targetWeightKg": 0,
        "formTips": "2-second deep heel stretch at bottom, explode up onto big toes, hold peak for 1 second.",
        "asymmetryCues": "Distribute force equally through first and second metatarsals.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Single-Leg Dumbbell Calf Raise"
          },
          {
            "category": "Machine",
            "name": "Leg Press Toe Press / Hack Squat Calf Press"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Bodyweight Donkey Calf Raises"
          }
        ]
      },
      {
        "exerciseId": "neeraj-machine-ab-crunch",
        "exerciseName": "Machine Ab Crunch",
        "muscle": "Core",
        "equipment": "Machine",
        "category": "Flexion",
        "group": "Ab & Core Exercise",
        "target": "Rectus Abdominis",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 15,
        "targetRepsMin": 15,
        "targetRepsMax": 15,
        "defaultRepRange": "15",
        "targetWeightKg": 0,
        "formTips": "Exhale fully while flexing spine; avoid pulling with arms.",
        "asymmetryCues": "Maintain neutral neck; initiate movement from sternum curling toward pelvis.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Floor Crunches with legs elevated at 90\u00b0"
          },
          {
            "category": "Machine",
            "name": "Cable Kneeling Rope Crunch"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Hanging Knee Raises (Pull-up tower)"
          }
        ]
      }
    ],
    "user_id": "11111111-1111-4111-a111-111111111111",
    "userId": "NEERAJ",
    "profileName": "NEERAJ",
    "planName": "Beginner 6-Day PPL (Asymmetry & Posture Corrected)",
    "notes": "\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nLEGS A (QUAD DOMINANCE & CALVES) \u2014 NEERAJ PPL \u2014 NEERAJ PPL (ASYMMETRY CORRECTED)\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nTarget Focus: Quad Dominance & Calves Focus\n\n### \ud83d\udee1\ufe0f SCAPULAR / ASYMMETRY FOCUS\nRight shoulder elevation correction: strict unilateral dumbbell focus and scapular depression cues (pull shoulder blades down into back pockets; prevent right trap hiking).\n\n### \u23f1\ufe0f PRE-WORKOUT WARM-UP (8\u201310 Mins)\n1. 3 mins cardio (Stairmaster or Elliptical)\n2. Right Upper Trap Release: 30s gentle neck stretch to the left (reach right fingertips to floor)\n3. Prone Incline Y-Raises: 10 unweighted reps (focus on lower trapezius pulling right shoulder blade down)\n4. Dynamic Arm Swings & Leg Swings (15 reps each)\n5. 1 warmup feeder set at 50% working weight before first compound movement\n\n### \u26a1 CORE & ABS FINISHER (Optional 2x / Week)\nFormat: 35s work / 25s rest (2 rounds)\n1. Slow-Tempo Mountain Climbers (Zero torso twist, rigid plank)\n2. Floor Crunches with 2-Second Hold (Ribs to hips squeeze)\n3. Forearm Plank Hold (Depress shoulders, tight glutes)\n\n### \ud83e\uddd8 POST-WORKOUT COOL-DOWN (5 Mins)\n1. Pull-up bar Dead Hang: 2 x 30s (Spinal decompression)\n2. Doorway Chest & Front Shoulder Stretch: 45s per side\n3. Kneeling Hip Flexor Stretch: 45s per side\n4. Child's Pose into Cobra Stretch: 60s deep breathing\n",
    "updatedAt": "2026-11-16T12:00:00.000Z"
  },
  {
    "id": "neeraj-ppl-push-b",
    "name": "Push B (Mid/Lower Chest, Dips & Triceps) \u2014 Neeraj PPL",
    "day": 4,
    "focus": "Mid/Lower Chest, Dips & Triceps Focus",
    "exercises": [
      {
        "exerciseId": "neeraj-flat-db-bench-press",
        "exerciseName": "Flat Dumbbell Bench Press",
        "muscle": "Chest",
        "equipment": "Dumbbell",
        "category": "Push",
        "group": "Main",
        "target": "Mid/Lower Sternal Chest",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 10,
        "targetRepsMin": 10,
        "targetRepsMax": 12,
        "defaultRepRange": "10-12",
        "targetWeightKg": 0,
        "formTips": "Pin shoulder blades flat into pad. Lower dumbbells with elbows at 45\u00b0. Press up smoothly without shrugging right side.",
        "asymmetryCues": "Check mirror/feel: right shoulder blade must stay retracted and depressed throughout the press.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Flat Barbell Bench Press"
          },
          {
            "category": "Machine",
            "name": "Tunturi Multi-Press (Flat setting)"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Standard Floor Push-Ups (or on knees)"
          }
        ]
      },
      {
        "exerciseId": "neeraj-assisted-dip-machine",
        "exerciseName": "Assisted Dip Machine (Chest Bias)",
        "muscle": "Chest",
        "equipment": "Machine",
        "category": "Push",
        "group": "Main",
        "target": "Lower Pecs & Triceps",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 8,
        "targetRepsMin": 8,
        "targetRepsMax": 10,
        "defaultRepRange": "8-10",
        "targetWeightKg": 0,
        "formTips": "Lean torso forward 30\u00b0. Keep elbows tucked at 45\u00b0. Do not allow right shoulder to elevate at bottom.",
        "asymmetryCues": "Avoid excessive bottom depth if right anterior shoulder pinches; keep chest proud.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Decline Dumbbell Bench Press"
          },
          {
            "category": "Machine",
            "name": "Cable High-to-Low Crossover Fly"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Deficit Push-Ups (Hands on yoga blocks/plates)"
          }
        ]
      },
      {
        "exerciseId": "neeraj-cable-lateral-raise-low-pulley",
        "exerciseName": "Cable Lateral Raises (Low Pulley)",
        "muscle": "Shoulders",
        "equipment": "Cable",
        "category": "Isolation",
        "group": "Main",
        "target": "Lateral Delts",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 12,
        "targetRepsMin": 12,
        "targetRepsMax": 15,
        "defaultRepRange": "12-15",
        "targetWeightKg": 0,
        "formTips": "Cable runs behind back. Lift out smoothly to shoulder height with continuous tension.",
        "asymmetryCues": "Unilateral cable provides constant tension; strictly prevent right trap compensation.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Standing Dumbbell Lateral Raises"
          },
          {
            "category": "Machine",
            "name": "Seated Dumbbell Lateral Raises"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Resistance Band Side Raises"
          }
        ]
      },
      {
        "exerciseId": "neeraj-cable-rope-triceps-pushdown",
        "exerciseName": "Cable Rope Triceps Pushdown",
        "muscle": "Triceps",
        "equipment": "Cable",
        "category": "Push",
        "group": "Main",
        "target": "Triceps (Lateral & Medial Heads)",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 10,
        "targetRepsMin": 10,
        "targetRepsMax": 12,
        "defaultRepRange": "10-12",
        "targetWeightKg": 0,
        "formTips": "Upper arms pinned to ribcage. Push straight down and flare rope outward at the bottom.",
        "asymmetryCues": "Keep both shoulders pulled down; avoid rolling right shoulder forward on the lockout.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Dumbbell Kickbacks (Chest on bench)"
          },
          {
            "category": "Machine",
            "name": "Close-Grip Dumbbell Press"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Diamond Push-Ups (on knees)"
          }
        ]
      }
    ],
    "user_id": "11111111-1111-4111-a111-111111111111",
    "userId": "NEERAJ",
    "profileName": "NEERAJ",
    "planName": "Beginner 6-Day PPL (Asymmetry & Posture Corrected)",
    "notes": "\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nPUSH B (MID/LOWER CHEST, DIPS & TRICEPS) \u2014 NEERAJ PPL \u2014 NEERAJ PPL (ASYMMETRY CORRECTED)\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nTarget Focus: Mid/Lower Chest, Dips & Triceps Focus\n\n### \ud83d\udee1\ufe0f SCAPULAR / ASYMMETRY FOCUS\nRight shoulder elevation correction: strict unilateral dumbbell focus and scapular depression cues (pull shoulder blades down into back pockets; prevent right trap hiking).\n\n### \u23f1\ufe0f PRE-WORKOUT WARM-UP (8\u201310 Mins)\n1. 3 mins cardio (Stairmaster or Elliptical)\n2. Right Upper Trap Release: 30s gentle neck stretch to the left (reach right fingertips to floor)\n3. Prone Incline Y-Raises: 10 unweighted reps (focus on lower trapezius pulling right shoulder blade down)\n4. Dynamic Arm Swings & Leg Swings (15 reps each)\n5. 1 warmup feeder set at 50% working weight before first compound movement\n\n### \u26a1 CORE & ABS FINISHER (Optional 2x / Week)\nFormat: 35s work / 25s rest (2 rounds)\n1. Slow-Tempo Mountain Climbers (Zero torso twist, rigid plank)\n2. Floor Crunches with 2-Second Hold (Ribs to hips squeeze)\n3. Forearm Plank Hold (Depress shoulders, tight glutes)\n\n### \ud83e\uddd8 POST-WORKOUT COOL-DOWN (5 Mins)\n1. Pull-up bar Dead Hang: 2 x 30s (Spinal decompression)\n2. Doorway Chest & Front Shoulder Stretch: 45s per side\n3. Kneeling Hip Flexor Stretch: 45s per side\n4. Child's Pose into Cobra Stretch: 60s deep breathing\n",
    "updatedAt": "2026-11-16T12:00:00.000Z"
  },
  {
    "id": "neeraj-ppl-pull-b",
    "name": "Pull B (Upper Back Thickness, Traps & Rear Delts) \u2014 Neeraj PPL",
    "day": 5,
    "focus": "Upper Back Thickness, Traps & Rear Delts Focus",
    "exercises": [
      {
        "exerciseId": "neeraj-chest-supported-tbar-row",
        "exerciseName": "Chest-Supported T-Bar / Iso-Row Machine (Wide Grip)",
        "muscle": "Back",
        "equipment": "Machine",
        "category": "Pull",
        "group": "Main",
        "target": "Upper Back, Rhomboids & Mid-Traps",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 10,
        "targetRepsMin": 10,
        "targetRepsMax": 12,
        "defaultRepRange": "10-12",
        "targetWeightKg": 0,
        "formTips": "Wide overhand grip, elbows flared ~60\u00b0. Squeeze shoulder blades together at peak. Chest stays on support pad.",
        "asymmetryCues": "Chest support removes lower back strain and allows strict focus on equal mid-trap retraction.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Chest-Supported Dumbbell Row (Wide elbow path)"
          },
          {
            "category": "Machine",
            "name": "Seated Cable Wide Row (Lat bar to chest)"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Inverted Bodyweight Rows (Wide overhand)"
          }
        ]
      },
      {
        "exerciseId": "neeraj-seated-cable-low-row",
        "exerciseName": "Seated Cable Low Row",
        "muscle": "Back",
        "equipment": "Cable",
        "category": "Pull",
        "group": "Main",
        "target": "Mid-Back Thickness & Lats",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 10,
        "targetRepsMin": 10,
        "targetRepsMax": 12,
        "defaultRepRange": "10-12",
        "targetWeightKg": 0,
        "formTips": "Pull handle into navel. Drive elbows back while keeping shoulder blades pulled down.",
        "asymmetryCues": "Focus on driving right elbow back without shrugging right shoulder upward.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Single-Arm Dumbbell Row"
          },
          {
            "category": "Machine",
            "name": "Tunturi Iso-Lateral Row (Neutral lower handles)"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Resistance Band Seated Rows"
          }
        ]
      },
      {
        "exerciseId": "neeraj-reverse-pec-deck-fly",
        "exerciseName": "Reverse Pec Deck Fly Machine",
        "muscle": "Shoulders",
        "equipment": "Machine",
        "category": "Isolation",
        "group": "Main",
        "target": "Rear Delts & Posture",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 12,
        "targetRepsMin": 12,
        "targetRepsMax": 15,
        "defaultRepRange": "12-15",
        "targetWeightKg": 0,
        "formTips": "Arms slightly soft at elbow. Drive hands wide in an arc; prevent neck traps from shrugging.",
        "asymmetryCues": "Lower trapezius and rear delt activation directly strengthens posture and counteracts shoulder elevation.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Prone Incline Dumbbell Rear Delt Flyes"
          },
          {
            "category": "Machine",
            "name": "Cable Face Pulls (High pulley to forehead)"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Prone Y-to-W Floor Raises"
          }
        ]
      },
      {
        "exerciseId": "neeraj-db-hammer-curls",
        "exerciseName": "Dumbbell Hammer Curls",
        "muscle": "Biceps",
        "equipment": "Dumbbell",
        "category": "Pull",
        "group": "Main",
        "target": "Brachialis & Forearms",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 10,
        "targetRepsMin": 10,
        "targetRepsMax": 12,
        "defaultRepRange": "10-12",
        "targetWeightKg": 0,
        "formTips": "Palms face each other throughout. Eliminates wrist strain and builds arm thickness.",
        "asymmetryCues": "Keep shoulders locked down; curl dumbbells smoothly without swinging.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Cross-Body Dumbbell Hammer Curls"
          },
          {
            "category": "Machine",
            "name": "Cable Rope Hammer Curls"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Reverse-Grip Barbell Curls (Overhand)"
          }
        ]
      },
      {
        "exerciseId": "neeraj-db-shrugs-pause",
        "exerciseName": "Dumbbell Shrugs (2-Second Peak Hold)",
        "muscle": "Traps",
        "equipment": "Dumbbell",
        "category": "Isolation",
        "group": "Main",
        "target": "Upper Traps Balance",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 12,
        "targetRepsMin": 12,
        "targetRepsMax": 12,
        "defaultRepRange": "12",
        "targetWeightKg": 0,
        "formTips": "Lift straight up, hold for 2 full seconds, lower under control. Check mirror to ensure both shoulders rise and lower evenly.",
        "asymmetryCues": "Crucial: Calibrate right and left traps to rise to the EXACT same height without tilting neck.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Barbell Shrugs"
          },
          {
            "category": "Machine",
            "name": "Cable Low-Pulley Shrugs"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Farmer's Walk with heavy dumbbells"
          }
        ]
      }
    ],
    "user_id": "11111111-1111-4111-a111-111111111111",
    "userId": "NEERAJ",
    "profileName": "NEERAJ",
    "planName": "Beginner 6-Day PPL (Asymmetry & Posture Corrected)",
    "notes": "\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nPULL B (UPPER BACK THICKNESS, TRAPS & REAR DELTS) \u2014 NEERAJ PPL \u2014 NEERAJ PPL (ASYMMETRY CORRECTED)\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nTarget Focus: Upper Back Thickness, Traps & Rear Delts Focus\n\n### \ud83d\udee1\ufe0f SCAPULAR / ASYMMETRY FOCUS\nRight shoulder elevation correction: strict unilateral dumbbell focus and scapular depression cues (pull shoulder blades down into back pockets; prevent right trap hiking).\n\n### \u23f1\ufe0f PRE-WORKOUT WARM-UP (8\u201310 Mins)\n1. 3 mins cardio (Stairmaster or Elliptical)\n2. Right Upper Trap Release: 30s gentle neck stretch to the left (reach right fingertips to floor)\n3. Prone Incline Y-Raises: 10 unweighted reps (focus on lower trapezius pulling right shoulder blade down)\n4. Dynamic Arm Swings & Leg Swings (15 reps each)\n5. 1 warmup feeder set at 50% working weight before first compound movement\n\n### \u26a1 CORE & ABS FINISHER (Optional 2x / Week)\nFormat: 35s work / 25s rest (2 rounds)\n1. Slow-Tempo Mountain Climbers (Zero torso twist, rigid plank)\n2. Floor Crunches with 2-Second Hold (Ribs to hips squeeze)\n3. Forearm Plank Hold (Depress shoulders, tight glutes)\n\n### \ud83e\uddd8 POST-WORKOUT COOL-DOWN (5 Mins)\n1. Pull-up bar Dead Hang: 2 x 30s (Spinal decompression)\n2. Doorway Chest & Front Shoulder Stretch: 45s per side\n3. Kneeling Hip Flexor Stretch: 45s per side\n4. Child's Pose into Cobra Stretch: 60s deep breathing\n",
    "updatedAt": "2026-11-16T12:00:00.000Z"
  },
  {
    "id": "neeraj-ppl-legs-b",
    "name": "Legs B (Hamstrings, Glutes & Adductors) \u2014 Neeraj PPL",
    "day": 6,
    "focus": "Hamstrings, Glutes & Adductors Focus",
    "exercises": [
      {
        "exerciseId": "neeraj-db-romanian-deadlifts",
        "exerciseName": "Dumbbell Romanian Deadlifts (RDLs)",
        "muscle": "Hamstrings",
        "equipment": "Dumbbell",
        "category": "Hinge",
        "group": "Main",
        "target": "Hamstrings & Glutes (Hip Hinge)",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 10,
        "targetRepsMin": 10,
        "targetRepsMax": 10,
        "defaultRepRange": "10",
        "targetWeightKg": 0,
        "formTips": "Soft knees. Push hips back like closing a door behind you. Lower dumbbells down shins until hamstrings are taut, then drive hips forward.",
        "asymmetryCues": "Keep spine neutral and lats engaged so right shoulder does not round forward in the hinge.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Barbell Romanian Deadlifts"
          },
          {
            "category": "Machine",
            "name": "45\u00b0 Roman Chair Hyperextension (Glute bias)"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Single-Leg Dumbbell RDLs"
          }
        ]
      },
      {
        "exerciseId": "neeraj-pin-loaded-seated-leg-curls",
        "exerciseName": "Pin-Loaded Seated Leg Curls",
        "muscle": "Hamstrings",
        "equipment": "Machine",
        "category": "Isolation",
        "group": "Main",
        "target": "Hamstrings (Knee Flexion)",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 10,
        "targetRepsMin": 10,
        "targetRepsMax": 12,
        "defaultRepRange": "10-12",
        "targetWeightKg": 0,
        "formTips": "Keep feet flexed. Curl down with control; take 3 seconds returning to the top stretch position.",
        "asymmetryCues": "Ensure lap pad is locked tight to isolate knee flexion and avoid pelvic tilting.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Lying Dumbbell Leg Curl (DB held between feet)"
          },
          {
            "category": "Machine",
            "name": "Lying Leg Curl Machine"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Floor Towel / Slider Leg Curls"
          }
        ]
      },
      {
        "exerciseId": "neeraj-bulgarian-split-squats",
        "exerciseName": "Bulgarian Split Squats (Dumbbell - Forward Torso Lean)",
        "muscle": "Glutes",
        "equipment": "Dumbbell",
        "category": "Lunge",
        "group": "Main",
        "target": "Glutes & Posterior Chain",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 10,
        "targetRepsMin": 10,
        "targetRepsMax": 10,
        "defaultRepRange": "10 per leg",
        "targetWeightKg": 0,
        "formTips": "Angle torso forward ~45 degrees over front thigh to target glute stretch rather than quads. Drive through the front heel.",
        "asymmetryCues": "Unilateral leg work balances hip symmetry and corrects pelvic imbalances.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Dumbbell Walking Lunges (Long stride)"
          },
          {
            "category": "Machine",
            "name": "Tunturi 45\u00b0 Leg Press (Feet high and wide)"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Bodyweight Glute Bridges / Hip Thrusts"
          }
        ]
      },
      {
        "exerciseId": "neeraj-hip-abductor-adductor-machine",
        "exerciseName": "Hip Abductor / Adductor Machine",
        "muscle": "Glutes",
        "equipment": "Machine",
        "category": "Isolation",
        "group": "Main",
        "target": "Inner & Outer Hips",
        "sets": 2,
        "defaultSets": 2,
        "targetReps": 15,
        "targetRepsMin": 15,
        "targetRepsMax": 15,
        "defaultRepRange": "15 each way",
        "targetWeightKg": 0,
        "formTips": "Control both outward and inward strokes without letting weight stack slam.",
        "asymmetryCues": "Stabilizes pelvis and strengthens glute medius for bilateral hip balance.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Lateral Band Monster Walks"
          },
          {
            "category": "Machine",
            "name": "Cable Standing Hip Abduction (Ankle strap)"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Cossack Squats (Bodyweight)"
          }
        ]
      }
    ],
    "user_id": "11111111-1111-4111-a111-111111111111",
    "userId": "NEERAJ",
    "profileName": "NEERAJ",
    "planName": "Beginner 6-Day PPL (Asymmetry & Posture Corrected)",
    "notes": "\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nLEGS B (HAMSTRINGS, GLUTES & ADDUCTORS) \u2014 NEERAJ PPL \u2014 NEERAJ PPL (ASYMMETRY CORRECTED)\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nTarget Focus: Hamstrings, Glutes & Adductors Focus\n\n### \ud83d\udee1\ufe0f SCAPULAR / ASYMMETRY FOCUS\nRight shoulder elevation correction: strict unilateral dumbbell focus and scapular depression cues (pull shoulder blades down into back pockets; prevent right trap hiking).\n\n### \u23f1\ufe0f PRE-WORKOUT WARM-UP (8\u201310 Mins)\n1. 3 mins cardio (Stairmaster or Elliptical)\n2. Right Upper Trap Release: 30s gentle neck stretch to the left (reach right fingertips to floor)\n3. Prone Incline Y-Raises: 10 unweighted reps (focus on lower trapezius pulling right shoulder blade down)\n4. Dynamic Arm Swings & Leg Swings (15 reps each)\n5. 1 warmup feeder set at 50% working weight before first compound movement\n\n### \u26a1 CORE & ABS FINISHER (Optional 2x / Week)\nFormat: 35s work / 25s rest (2 rounds)\n1. Slow-Tempo Mountain Climbers (Zero torso twist, rigid plank)\n2. Floor Crunches with 2-Second Hold (Ribs to hips squeeze)\n3. Forearm Plank Hold (Depress shoulders, tight glutes)\n\n### \ud83e\uddd8 POST-WORKOUT COOL-DOWN (5 Mins)\n1. Pull-up bar Dead Hang: 2 x 30s (Spinal decompression)\n2. Doorway Chest & Front Shoulder Stretch: 45s per side\n3. Kneeling Hip Flexor Stretch: 45s per side\n4. Child's Pose into Cobra Stretch: 60s deep breathing\n",
    "updatedAt": "2026-11-16T12:00:00.000Z"
  },
  {
    "id": "neeraj-ppl-rest-recovery",
    "name": "Day 7 \u2014 Rest & Recovery \u2014 Neeraj PPL",
    "day": 7,
    "focus": "Active Recovery, Mobility & Neuromuscular Rest",
    "exercises": [
      {
        "exerciseId": "outdoor-leisure-walk",
        "exerciseName": "Outdoor Leisure Walk / Nature Stroll (20\u201330 mins)",
        "muscle": "Cardio",
        "equipment": "Outdoor",
        "category": "LISS",
        "group": "Cardio",
        "target": "Parasympathetic Recovery",
        "sets": 1,
        "defaultSets": 1,
        "targetReps": 30,
        "targetRepsMin": 20,
        "targetRepsMax": 30,
        "defaultRepRange": "20-30 mins",
        "targetWeightKg": 0,
        "formTips": "20\u201330 mins light outdoor walk, static stretching, and hydration.",
        "asymmetryCues": "Promotes lymphatic flow, parasympathetic reset, and tissue hydration.",
        "alternatives": [
          {
            "category": "Dumbbell/Free Weight",
            "name": "Full-Body Static Stretching (Hamstrings, Quads, Pecs)"
          },
          {
            "category": "Machine",
            "name": "Stationary Bike Light Spin (Low resistance)"
          },
          {
            "category": "Cable/Bodyweight",
            "name": "Gentle Sun Salutations & Legs-Up-The-Wall Pose"
          }
        ]
      }
    ],
    "user_id": "11111111-1111-4111-a111-111111111111",
    "userId": "NEERAJ",
    "profileName": "NEERAJ",
    "planName": "Beginner 6-Day PPL (Asymmetry & Posture Corrected)",
    "notes": "\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nDAY 7 \u2014 REST & RECOVERY \u2014 NEERAJ PPL \u2014 NEERAJ PPL (ASYMMETRY CORRECTED)\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nTarget Focus: Active Recovery, Mobility & Neuromuscular Rest\n\n### \ud83d\udee1\ufe0f SCAPULAR / ASYMMETRY FOCUS\nRight shoulder elevation correction: strict unilateral dumbbell focus and scapular depression cues (pull shoulder blades down into back pockets; prevent right trap hiking).\n\n### \u23f1\ufe0f PRE-WORKOUT WARM-UP (8\u201310 Mins)\n1. 3 mins cardio (Stairmaster or Elliptical)\n2. Right Upper Trap Release: 30s gentle neck stretch to the left (reach right fingertips to floor)\n3. Prone Incline Y-Raises: 10 unweighted reps (focus on lower trapezius pulling right shoulder blade down)\n4. Dynamic Arm Swings & Leg Swings (15 reps each)\n5. 1 warmup feeder set at 50% working weight before first compound movement\n\n### \u26a1 CORE & ABS FINISHER (Optional 2x / Week)\nFormat: 35s work / 25s rest (2 rounds)\n1. Slow-Tempo Mountain Climbers (Zero torso twist, rigid plank)\n2. Floor Crunches with 2-Second Hold (Ribs to hips squeeze)\n3. Forearm Plank Hold (Depress shoulders, tight glutes)\n\n### \ud83e\uddd8 POST-WORKOUT COOL-DOWN (5 Mins)\n1. Pull-up bar Dead Hang: 2 x 30s (Spinal decompression)\n2. Doorway Chest & Front Shoulder Stretch: 45s per side\n3. Kneeling Hip Flexor Stretch: 45s per side\n4. Child's Pose into Cobra Stretch: 60s deep breathing\n",
    "updatedAt": "2026-11-16T12:00:00.000Z"
  }
];

/**
 * Master Seed Exercises for the custom catalog with form tips, targets, and 3 alternative categories.
 */
export const NEERAJ_EXERCISES_CATALOG = [
  {
    "id": "neeraj-incline-db-bench-30",
    "name": "Incline Dumbbell Bench Press (30\u00b0)",
    "muscle": "Chest",
    "equipment": "Dumbbell",
    "category": "Push",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Upper Chest (Clavicular Head)",
    "formTips": "Bench at 30\u00b0. Lock shoulder blades down into back pockets before pressing. Control down for 3 seconds; touch DBs to upper chest level without letting the right shoulder hike up.",
    "asymmetryCues": "Unilateral dumbbell freedom prevents left arm from dominating; keep right shoulder depressed.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Incline Barbell Press"
      },
      {
        "category": "Machine",
        "name": "Tunturi Multi-Press (Incline setting)"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Incline Push-Ups (Feet elevated on bench)"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "10-12",
    "targetRepsMin": 10,
    "targetRepsMax": 12
  },
  {
    "id": "neeraj-pec-deck-fly-machine",
    "name": "Pec Deck Fly Machine",
    "muscle": "Chest",
    "equipment": "Machine",
    "category": "Isolation",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Mid Chest & Stretch",
    "formTips": "Handles aligned with mid-chest. Slight elbow bend, drive elbows together, hold peak squeeze for 1 second.",
    "asymmetryCues": "Ensure symmetrical chest stretch; keep shoulders back against pad without shrugging right side.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Flat Dumbbell Flyes"
      },
      {
        "category": "Machine",
        "name": "Standing Mid-Pulley Cable Fly"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Floor Dumbbell Flyes"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "10-12",
    "targetRepsMin": 10,
    "targetRepsMax": 12
  },
  {
    "id": "neeraj-seated-db-shoulder-press",
    "name": "Seated Dumbbell Shoulder Press",
    "muscle": "Shoulders",
    "equipment": "Dumbbell",
    "category": "Push",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Anterior & Lateral Delts",
    "formTips": "Elbows angled 30\u00b0 in front of torso (scapular plane). Stop just short of full lockout to keep tension off neck traps.",
    "asymmetryCues": "Scapular plane pressing protects right rotator cuff; depress right shoulder blade before pressing.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Standing Dumbbell Press"
      },
      {
        "category": "Machine",
        "name": "Tunturi Multi-Press (Shoulder setting)"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Pike Push-Ups on floor"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "10-12",
    "targetRepsMin": 10,
    "targetRepsMax": 12
  },
  {
    "id": "neeraj-standing-db-lateral-raise",
    "name": "Standing Dumbbell Lateral Raises",
    "muscle": "Shoulders",
    "equipment": "Dumbbell",
    "category": "Isolation",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Lateral Delts (Width)",
    "formTips": "Push dumbbells OUT toward side walls, never straight up. Stop lifting at shoulder level so right trap cannot take over.",
    "asymmetryCues": "Strictly prevent right upper trap hiking; lead with elbows and keep shoulders depressed.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Seated Incline Dumbbell Lateral Raises"
      },
      {
        "category": "Machine",
        "name": "Low-Pulley Cable Lateral Raise (behind back)"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Resistance Band Side Raises"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "12-15",
    "targetRepsMin": 12,
    "targetRepsMax": 15
  },
  {
    "id": "neeraj-overhead-cable-rope-triceps-ext",
    "name": "Overhead Cable Rope Triceps Extension",
    "muscle": "Triceps",
    "equipment": "Cable",
    "category": "Push",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Triceps (Long Head)",
    "formTips": "Flare rope apart at top extension. Allow deep stretch behind head while keeping elbows tucked forward.",
    "asymmetryCues": "Maintain equal elbow tuck; do not let right shoulder elevate into neck.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Seated Two-Hand Overhead DB Extension"
      },
      {
        "category": "Machine",
        "name": "Incline EZ-Bar Skull Crushers"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Bodyweight Bench Dips (legs extended)"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "10-12",
    "targetRepsMin": 10,
    "targetRepsMax": 12
  },
  {
    "id": "neeraj-lat-pulldown-vbar",
    "name": "Lat Pulldown (Neutral Close-Grip / V-Bar)",
    "muscle": "Back",
    "equipment": "Cable",
    "category": "Pull",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Lower Lats & Width",
    "formTips": "Initiate pull by actively drawing right shoulder blade DOWN first, then pull elbows into ribs.",
    "asymmetryCues": "Neutral V-bar reduces internal shoulder rotation; ensure right lat initiates before right bicep/trap.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Single-Arm Lat Pulldown with D-Handle"
      },
      {
        "category": "Machine",
        "name": "Assisted Pull-Up Machine (Neutral grip)"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Strict Bodyweight Pull-Ups (with assistance band)"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "10-12",
    "targetRepsMin": 10,
    "targetRepsMax": 12
  },
  {
    "id": "neeraj-single-arm-db-row",
    "name": "Single-Arm Dumbbell Row",
    "muscle": "Back",
    "equipment": "Dumbbell",
    "category": "Pull",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Lower Lat Isolation",
    "formTips": "Row dumbbell toward hip crease. Elbow stays brushed tight against ribs.",
    "asymmetryCues": "Start with right side to calibrate strict form; keep right shoulder depressed and away from ear.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Incline Chest-Supported Dumbbell Row"
      },
      {
        "category": "Machine",
        "name": "Tunturi Low Cable Row (Single-Arm D-Handle)"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Inverted Bodyweight Rows (Underhand)"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "10-12",
    "targetRepsMin": 10,
    "targetRepsMax": 12
  },
  {
    "id": "neeraj-straight-arm-cable-pulldown",
    "name": "Straight-Arm Cable Lat Pushdown",
    "muscle": "Back",
    "equipment": "Cable",
    "category": "Isolation",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Lat Mind-Muscle Isolation",
    "formTips": "Arms slightly soft at elbow. Sweep hands down to thighs in an arc while keeping chest tall.",
    "asymmetryCues": "Depress both scapulae simultaneously at the bottom squeeze.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Dumbbell Pullover on Flat Bench"
      },
      {
        "category": "Machine",
        "name": "Dual Cable Kneeling Pullovers"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Resistance Band Lat Pull-Down"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "12-15",
    "targetRepsMin": 12,
    "targetRepsMax": 15
  },
  {
    "id": "neeraj-standing-db-bicep-curl",
    "name": "Standing Dumbbell Bicep Curls",
    "muscle": "Biceps",
    "equipment": "Dumbbell",
    "category": "Pull",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Biceps (Long Head / Peak)",
    "formTips": "Start neutral, rotate palms up as you curl. Keep elbows stationary at sides.",
    "asymmetryCues": "Prevent right shoulder from swaying forward or hiking during peak contraction.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Incline Dumbbell Curls (Full stretch)"
      },
      {
        "category": "Machine",
        "name": "Tunturi Preacher Curl Machine"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Standing Cable Straight-Bar Curls"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "10-12",
    "targetRepsMin": 10,
    "targetRepsMax": 12
  },
  {
    "id": "neeraj-tunturi-45-leg-press",
    "name": "Tunturi 45\u00b0 Leg Press",
    "muscle": "Legs",
    "equipment": "Machine",
    "category": "Squat",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Quads (Mid-foot placement)",
    "formTips": "Feet shoulder-width in middle of plate. 3-second descent. Never hyperextend/lock knees at top.",
    "asymmetryCues": "Maintain even bilateral pressure through both feet; keep pelvis square against backrest.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Dumbbell Goblet Squat (Heels elevated)"
      },
      {
        "category": "Machine",
        "name": "Plate-Loaded Hack Squat Machine"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Deep Bodyweight Air Squats"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "10-12",
    "targetRepsMin": 10,
    "targetRepsMax": 12
  },
  {
    "id": "neeraj-pin-loaded-leg-extension",
    "name": "Pin-Loaded Leg Extension Machine",
    "muscle": "Quadriceps",
    "equipment": "Machine",
    "category": "Isolation",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Quad Isolation (Rectus Femoris)",
    "formTips": "3-second negative descent. Hold top contraction for 1 full second.",
    "asymmetryCues": "Align knee joints with pivot point; grip side handles to keep torso firmly down.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Dumbbell Sissy Squats"
      },
      {
        "category": "Machine",
        "name": "Single-Leg Machine Extension"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Reverse Nordic Curls (Floor)"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "12-15",
    "targetRepsMin": 12,
    "targetRepsMax": 15
  },
  {
    "id": "neeraj-standing-calf-raises",
    "name": "Standing Calf Raises (Step / Edge of plate)",
    "muscle": "Calves",
    "equipment": "Machine",
    "category": "Isolation",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Calves (Gastrocnemius)",
    "formTips": "2-second deep heel stretch at bottom, explode up onto big toes, hold peak for 1 second.",
    "asymmetryCues": "Distribute force equally through first and second metatarsals.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Single-Leg Dumbbell Calf Raise"
      },
      {
        "category": "Machine",
        "name": "Leg Press Toe Press / Hack Squat Calf Press"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Bodyweight Donkey Calf Raises"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "15",
    "targetRepsMin": 15,
    "targetRepsMax": 15
  },
  {
    "id": "neeraj-machine-ab-crunch",
    "name": "Machine Ab Crunch",
    "muscle": "Core",
    "equipment": "Machine",
    "category": "Flexion",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Rectus Abdominis",
    "formTips": "Exhale fully while flexing spine; avoid pulling with arms.",
    "asymmetryCues": "Maintain neutral neck; initiate movement from sternum curling toward pelvis.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Floor Crunches with legs elevated at 90\u00b0"
      },
      {
        "category": "Machine",
        "name": "Cable Kneeling Rope Crunch"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Hanging Knee Raises (Pull-up tower)"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "15",
    "targetRepsMin": 15,
    "targetRepsMax": 15
  },
  {
    "id": "neeraj-flat-db-bench-press",
    "name": "Flat Dumbbell Bench Press",
    "muscle": "Chest",
    "equipment": "Dumbbell",
    "category": "Push",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Mid/Lower Sternal Chest",
    "formTips": "Pin shoulder blades flat into pad. Lower dumbbells with elbows at 45\u00b0. Press up smoothly without shrugging right side.",
    "asymmetryCues": "Check mirror/feel: right shoulder blade must stay retracted and depressed throughout the press.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Flat Barbell Bench Press"
      },
      {
        "category": "Machine",
        "name": "Tunturi Multi-Press (Flat setting)"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Standard Floor Push-Ups (or on knees)"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "10-12",
    "targetRepsMin": 10,
    "targetRepsMax": 12
  },
  {
    "id": "neeraj-assisted-dip-machine",
    "name": "Assisted Dip Machine (Chest Bias)",
    "muscle": "Chest",
    "equipment": "Machine",
    "category": "Push",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Lower Pecs & Triceps",
    "formTips": "Lean torso forward 30\u00b0. Keep elbows tucked at 45\u00b0. Do not allow right shoulder to elevate at bottom.",
    "asymmetryCues": "Avoid excessive bottom depth if right anterior shoulder pinches; keep chest proud.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Decline Dumbbell Bench Press"
      },
      {
        "category": "Machine",
        "name": "Cable High-to-Low Crossover Fly"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Deficit Push-Ups (Hands on yoga blocks/plates)"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "8-10",
    "targetRepsMin": 8,
    "targetRepsMax": 10
  },
  {
    "id": "neeraj-cable-lateral-raise-low-pulley",
    "name": "Cable Lateral Raises (Low Pulley)",
    "muscle": "Shoulders",
    "equipment": "Cable",
    "category": "Isolation",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Lateral Delts",
    "formTips": "Cable runs behind back. Lift out smoothly to shoulder height with continuous tension.",
    "asymmetryCues": "Unilateral cable provides constant tension; strictly prevent right trap compensation.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Standing Dumbbell Lateral Raises"
      },
      {
        "category": "Machine",
        "name": "Seated Dumbbell Lateral Raises"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Resistance Band Side Raises"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "12-15",
    "targetRepsMin": 12,
    "targetRepsMax": 15
  },
  {
    "id": "neeraj-cable-rope-triceps-pushdown",
    "name": "Cable Rope Triceps Pushdown",
    "muscle": "Triceps",
    "equipment": "Cable",
    "category": "Push",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Triceps (Lateral & Medial Heads)",
    "formTips": "Upper arms pinned to ribcage. Push straight down and flare rope outward at the bottom.",
    "asymmetryCues": "Keep both shoulders pulled down; avoid rolling right shoulder forward on the lockout.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Dumbbell Kickbacks (Chest on bench)"
      },
      {
        "category": "Machine",
        "name": "Close-Grip Dumbbell Press"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Diamond Push-Ups (on knees)"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "10-12",
    "targetRepsMin": 10,
    "targetRepsMax": 12
  },
  {
    "id": "neeraj-chest-supported-tbar-row",
    "name": "Chest-Supported T-Bar / Iso-Row Machine (Wide Grip)",
    "muscle": "Back",
    "equipment": "Machine",
    "category": "Pull",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Upper Back, Rhomboids & Mid-Traps",
    "formTips": "Wide overhand grip, elbows flared ~60\u00b0. Squeeze shoulder blades together at peak. Chest stays on support pad.",
    "asymmetryCues": "Chest support removes lower back strain and allows strict focus on equal mid-trap retraction.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Chest-Supported Dumbbell Row (Wide elbow path)"
      },
      {
        "category": "Machine",
        "name": "Seated Cable Wide Row (Lat bar to chest)"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Inverted Bodyweight Rows (Wide overhand)"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "10-12",
    "targetRepsMin": 10,
    "targetRepsMax": 12
  },
  {
    "id": "neeraj-seated-cable-low-row",
    "name": "Seated Cable Low Row",
    "muscle": "Back",
    "equipment": "Cable",
    "category": "Pull",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Mid-Back Thickness & Lats",
    "formTips": "Pull handle into navel. Drive elbows back while keeping shoulder blades pulled down.",
    "asymmetryCues": "Focus on driving right elbow back without shrugging right shoulder upward.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Single-Arm Dumbbell Row"
      },
      {
        "category": "Machine",
        "name": "Tunturi Iso-Lateral Row (Neutral lower handles)"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Resistance Band Seated Rows"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "10-12",
    "targetRepsMin": 10,
    "targetRepsMax": 12
  },
  {
    "id": "neeraj-reverse-pec-deck-fly",
    "name": "Reverse Pec Deck Fly Machine",
    "muscle": "Shoulders",
    "equipment": "Machine",
    "category": "Isolation",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Rear Delts & Posture",
    "formTips": "Arms slightly soft at elbow. Drive hands wide in an arc; prevent neck traps from shrugging.",
    "asymmetryCues": "Lower trapezius and rear delt activation directly strengthens posture and counteracts shoulder elevation.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Prone Incline Dumbbell Rear Delt Flyes"
      },
      {
        "category": "Machine",
        "name": "Cable Face Pulls (High pulley to forehead)"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Prone Y-to-W Floor Raises"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "12-15",
    "targetRepsMin": 12,
    "targetRepsMax": 15
  },
  {
    "id": "neeraj-db-hammer-curls",
    "name": "Dumbbell Hammer Curls",
    "muscle": "Biceps",
    "equipment": "Dumbbell",
    "category": "Pull",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Brachialis & Forearms",
    "formTips": "Palms face each other throughout. Eliminates wrist strain and builds arm thickness.",
    "asymmetryCues": "Keep shoulders locked down; curl dumbbells smoothly without swinging.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Cross-Body Dumbbell Hammer Curls"
      },
      {
        "category": "Machine",
        "name": "Cable Rope Hammer Curls"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Reverse-Grip Barbell Curls (Overhand)"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "10-12",
    "targetRepsMin": 10,
    "targetRepsMax": 12
  },
  {
    "id": "neeraj-db-shrugs-pause",
    "name": "Dumbbell Shrugs (2-Second Peak Hold)",
    "muscle": "Traps",
    "equipment": "Dumbbell",
    "category": "Isolation",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Upper Traps Balance",
    "formTips": "Lift straight up, hold for 2 full seconds, lower under control. Check mirror to ensure both shoulders rise and lower evenly.",
    "asymmetryCues": "Crucial: Calibrate right and left traps to rise to the EXACT same height without tilting neck.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Barbell Shrugs"
      },
      {
        "category": "Machine",
        "name": "Cable Low-Pulley Shrugs"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Farmer's Walk with heavy dumbbells"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "12",
    "targetRepsMin": 12,
    "targetRepsMax": 12
  },
  {
    "id": "neeraj-db-romanian-deadlifts",
    "name": "Dumbbell Romanian Deadlifts (RDLs)",
    "muscle": "Hamstrings",
    "equipment": "Dumbbell",
    "category": "Hinge",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Hamstrings & Glutes (Hip Hinge)",
    "formTips": "Soft knees. Push hips back like closing a door behind you. Lower dumbbells down shins until hamstrings are taut, then drive hips forward.",
    "asymmetryCues": "Keep spine neutral and lats engaged so right shoulder does not round forward in the hinge.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Barbell Romanian Deadlifts"
      },
      {
        "category": "Machine",
        "name": "45\u00b0 Roman Chair Hyperextension (Glute bias)"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Single-Leg Dumbbell RDLs"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "10",
    "targetRepsMin": 10,
    "targetRepsMax": 10
  },
  {
    "id": "neeraj-pin-loaded-seated-leg-curls",
    "name": "Pin-Loaded Seated Leg Curls",
    "muscle": "Hamstrings",
    "equipment": "Machine",
    "category": "Isolation",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Hamstrings (Knee Flexion)",
    "formTips": "Keep feet flexed. Curl down with control; take 3 seconds returning to the top stretch position.",
    "asymmetryCues": "Ensure lap pad is locked tight to isolate knee flexion and avoid pelvic tilting.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Lying Dumbbell Leg Curl (DB held between feet)"
      },
      {
        "category": "Machine",
        "name": "Lying Leg Curl Machine"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Floor Towel / Slider Leg Curls"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "10-12",
    "targetRepsMin": 10,
    "targetRepsMax": 12
  },
  {
    "id": "neeraj-bulgarian-split-squats",
    "name": "Bulgarian Split Squats (Dumbbell - Forward Torso Lean)",
    "muscle": "Glutes",
    "equipment": "Dumbbell",
    "category": "Lunge",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Glutes & Posterior Chain",
    "formTips": "Angle torso forward ~45 degrees over front thigh to target glute stretch rather than quads. Drive through the front heel.",
    "asymmetryCues": "Unilateral leg work balances hip symmetry and corrects pelvic imbalances.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Dumbbell Walking Lunges (Long stride)"
      },
      {
        "category": "Machine",
        "name": "Tunturi 45\u00b0 Leg Press (Feet high and wide)"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Bodyweight Glute Bridges / Hip Thrusts"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "10 per leg",
    "targetRepsMin": 10,
    "targetRepsMax": 10
  },
  {
    "id": "neeraj-hip-abductor-adductor-machine",
    "name": "Hip Abductor / Adductor Machine",
    "muscle": "Glutes",
    "equipment": "Machine",
    "category": "Isolation",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Inner & Outer Hips",
    "formTips": "Control both outward and inward strokes without letting weight stack slam.",
    "asymmetryCues": "Stabilizes pelvis and strengthens glute medius for bilateral hip balance.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Lateral Band Monster Walks"
      },
      {
        "category": "Machine",
        "name": "Cable Standing Hip Abduction (Ankle strap)"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Cossack Squats (Bodyweight)"
      }
    ],
    "defaultSets": 2,
    "defaultRepRange": "15 each way",
    "targetRepsMin": 15,
    "targetRepsMax": 15
  },
  {
    "id": "outdoor-leisure-walk",
    "name": "Outdoor Leisure Walk / Nature Stroll (20\u201330 mins)",
    "muscle": "Cardio",
    "equipment": "Outdoor",
    "category": "LISS",
    "builtIn": false,
    "isNeerajCatalog": true,
    "userId": "NEERAJ",
    "target": "Parasympathetic Recovery",
    "formTips": "20\u201330 mins light outdoor walk, static stretching, and hydration.",
    "asymmetryCues": "Promotes lymphatic flow, parasympathetic reset, and tissue hydration.",
    "alternatives": [
      {
        "category": "Dumbbell/Free Weight",
        "name": "Full-Body Static Stretching (Hamstrings, Quads, Pecs)"
      },
      {
        "category": "Machine",
        "name": "Stationary Bike Light Spin (Low resistance)"
      },
      {
        "category": "Cable/Bodyweight",
        "name": "Gentle Sun Salutations & Legs-Up-The-Wall Pose"
      }
    ],
    "defaultSets": 1,
    "defaultRepRange": "20-30 mins",
    "targetRepsMin": 20,
    "targetRepsMax": 30
  }
];

/**
 * Non-destructive seeder: adds/updates Neeraj's PPL routines and catalog in Dexie IndexedDB.
 */
export async function seedNeerajPplPlan(db) {
  try {
    if (!db || !db.routines) return;
    
    // 0. Remove all legacy standard templates (ppl-*)
    try {
      const oldRoutines = await db.routines.toArray();
      for (const r of oldRoutines) {
        if (r.id && r.id.startsWith("ppl-")) {
          await db.routines.delete(r.id);
        }
      }
    } catch (_) {}
    
    // 1. Seed custom catalog exercises with tips & alternatives
    if (db.exercises && NEERAJ_EXERCISES_CATALOG.length) {
      for (const ex of NEERAJ_EXERCISES_CATALOG) {
        const existing = await db.exercises.get(ex.id);
        if (!existing) {
          await db.exercises.put(ex);
        }
      }
    }

    // 2. Seed the 7 daily PPL routines
    for (const routine of NEERAJ_PPL_ROUTINES) {
      const existing = await db.routines.get(routine.id);
      if (!existing) {
        await db.routines.put(routine);
      } else {
        // Non-destructive update: preserve any custom user adjustments while ensuring protocols exist
        if (!existing.protocols || !existing.notes) {
          await db.routines.put({
            ...routine,
            ...existing,
            notes: existing.notes || routine.notes,
            protocols: existing.protocols || routine.protocols,
            updatedAt: existing.updatedAt || routine.updatedAt
          });
        }
      }
    }
  } catch (err) {
    console.warn("[FORGE] seedNeerajPplPlan warning:", err);
  }
}

/**
 * UI Component: Neeraj Plan Banner on Routines page
 */
/**
 * Day-Specific Protocol Definitions for Push, Pull, Legs & Rest Days
 * Tailored with Right Shoulder Elevation cues and Anterior Pelvic Tilt (APT) fixes.
 */
export const DAY_PROTOCOLS = {
  push: {
    key: "push",
    name: "Push Day Protocol (Chest, Shoulders & Triceps)",
    badge: "SCAPULAR DEPRESSION & RIGHT TRAP INHIBITION",
    accent: "#84cc16",
    warmup: [
      {
        id: "push-w1",
        title: "Cardio Warm-Up",
        time: "3 mins",
        text: "Stairmaster, Incline Treadmill or Elliptical to elevate core temperature and lubricate shoulder and elbow joints."
      },
      {
        id: "push-w2",
        title: "Right Upper Trap Release (Neck Side Stretch)",
        time: "30s per side",
        badge: "SHOULDER ASYMMETRY",
        text: "Gently tilt head to the left while actively reaching your right fingertips toward the floor. This depresses the right scapula and inhibits the overactive right upper trap before pressing."
      },
      {
        id: "push-w3",
        title: "Scapular Push-Ups / Prone Y-Raises",
        time: "10-12 reps",
        text: "On floor or 30° incline bench. Squeeze shoulder blades together, then push through hands to spread shoulder blades apart. Activates serratus anterior and lower trapezius to lock shoulders in back pockets."
      },
      {
        id: "push-w4",
        title: "Dynamic Arm Swings & Rotator Cuff Swings",
        time: "15 reps",
        text: "Horizontal hugs and forward/backward arm circles to mobilize anterior deltoids and pectoral tendons."
      },
      {
        id: "push-w5",
        title: "Feeder Set at 50% Working Weight",
        time: "1 set of 5 reps",
        text: "Perform on Incline DB Bench Press at half your working weight with a strict 3-second negative descent before starting working sets."
      }
    ],
    cooldown: [
      {
        id: "push-c1",
        title: "Pull-Up Bar Dead Hang (Spinal Decompression)",
        time: "2 x 30s",
        text: "Full bodyweight hang with relaxed breathing. Decompresses intervertebral discs compressed during overhead and incline presses."
      },
      {
        id: "push-c2",
        title: "Doorway Pectoral & Front Shoulder Stretch",
        time: "45s per side",
        text: "Place forearm against doorframe at 90°. Gently step through until feeling deep chest opening without hiking right shoulder."
      },
      {
        id: "push-c3",
        title: "Overhead Triceps & Lat Stretch",
        time: "30s per side",
        text: "Reach elbow behind head, pull gently with opposite hand. Keep torso upright and ribs tucked down."
      },
      {
        id: "push-c4",
        title: "Child's Pose into Cobra Stretch",
        time: "60s deep breathing",
        text: "Transition smoothly from child's pose to cobra, releasing spinal erectors and front abdominal wall."
      }
    ]
  },
  pull: {
    key: "pull",
    name: "Pull Day Protocol (Back, Lats, Traps & Biceps)",
    badge: "LAT ACTIVATION & SCAPULAR RETRACTION",
    accent: "#60a5fa",
    warmup: [
      {
        id: "pull-w1",
        title: "Cardio Warm-Up",
        time: "3 mins",
        text: "Rower or Elliptical to warm up back musculature, biceps, and posterior chain."
      },
      {
        id: "pull-w2",
        title: "Active Scapular Hangs / Lat Pre-Activation",
        time: "2 x 10s",
        badge: "SCAPULAR PULL",
        text: "Hang from pull-up bar with arms straight. Pull shoulder blades DOWN into your back pockets without bending elbows. Feel lower lats engage first."
      },
      {
        id: "pull-w3",
        title: "Band Pull-Aparts or Light Face Pulls",
        time: "15 reps",
        text: "Hold band at shoulder height. Pull apart horizontally, squeezing rhomboids and rear delts at peak contraction."
      },
      {
        id: "pull-w4",
        title: "Dynamic Arm Swings & Torso Twists",
        time: "15 reps",
        text: "Smooth controlled torso rotations and arm swings to mobilize thoracic spine."
      },
      {
        id: "pull-w5",
        title: "Feeder Set at 50% Working Weight",
        time: "1 set of 5 reps",
        text: "Perform on Lat Pulldown or Single-Arm Row at 50% weight with focus on pulling right elbow into ribs."
      }
    ],
    cooldown: [
      {
        id: "pull-c1",
        title: "Pull-Up Bar Dead Hang (Spinal Decompression)",
        time: "2 x 30s",
        text: "Full bodyweight hang with relaxed breathing to decompress spine and relieve lat tension."
      },
      {
        id: "pull-c2",
        title: "Single-Arm Lat Stretch on Upright Rack/Post",
        time: "45s per side",
        text: "Grab a post at hip height, sit hips back, let lat stretch from armpit down to hip."
      },
      {
        id: "pull-c3",
        title: "Kneeling Bicep & Forearm Stretch",
        time: "30s per side",
        text: "Palms on floor with fingers pointing back toward knees. Gently lean back to stretch biceps and wrist flexors."
      },
      {
        id: "pull-c4",
        title: "Child's Pose Walking Hands Left & Right",
        time: "60s",
        text: "In child's pose, walk hands to far left for 30s (deep right lat stretch), then far right for 30s."
      }
    ]
  },
  legs: {
    key: "legs",
    name: "Leg Day Protocol (Quads, Hamstrings & Calves)",
    badge: "ANTERIOR PELVIC TILT (APT) & GLUTE ACTIVATION",
    accent: "#f59e0b",
    warmup: [
      {
        id: "legs-w1",
        title: "Cardio Warm-Up",
        time: "3 mins",
        text: "Stationary Bike or Stairmaster to circulate synovial fluid in knees and hips."
      },
      {
        id: "legs-w2",
        title: "Half-Kneeling Hip Flexor Stretch (Posterior Pelvic Tilt)",
        time: "45s per side",
        badge: "APT FIX #1",
        text: "Kneel on right knee. Crucial: Actively tuck your tailbone under (posterior tilt, flattening lower back) and squeeze your right glute as hard as possible. Gently shift forward 1-2 inches. Do NOT arch lower back."
      },
      {
        id: "legs-w3",
        title: "Glute Bridges with Posterior Pelvic Tilt",
        time: "12 reps (2s hold)",
        badge: "APT FIX #2",
        text: "Lie on back, feet flat. Flatten lower back into floor. Drive through heels, squeeze glutes at the top for 2 seconds. Re-awakens dormant glutes that cause pelvic anterior tilting."
      },
      {
        id: "legs-w4",
        title: "Dead Bugs (Deep Core & Transverse Abdominis)",
        time: "10 reps per side",
        badge: "APT FIX #3",
        text: "Lie on back with arms straight up and knees at 90°. Press lumbar spine flat into floor with zero gap. Slowly extend opposite arm and leg while maintaining flat back brace."
      },
      {
        id: "legs-w5",
        title: "Dynamic Leg Swings (Front/Back & Side-to-Side)",
        time: "15 reps per leg",
        text: "Swing leg in full controlled range of motion to mobilize hip capsule and hamstrings."
      },
      {
        id: "legs-w6",
        title: "Feeder Set at 50% Working Weight",
        time: "1 set of 5 reps",
        text: "Perform on 45° Leg Press or Romanian Deadlift with slow 3-second negative descent."
      }
    ],
    cooldown: [
      {
        id: "legs-c1",
        title: "Pull-Up Bar Dead Hang (Spinal Decompression)",
        time: "2 x 30s",
        text: "Decompresses lumbar spine heavily loaded from Leg Press, RDLs, or Hack Squats."
      },
      {
        id: "legs-c2",
        title: "Deep Couch / Wall Hip Flexor Stretch",
        time: "45s per side",
        badge: "APT FIX #4",
        text: "Back knee against a wall or bench, front foot planted. Torso upright. Squeeze rear glute forward. Directly targets the shortened psoas and rectus femoris responsible for anterior pelvic tilt."
      },
      {
        id: "legs-c3",
        title: "Standing Calf & Hamstring Stretch against Wall",
        time: "45s per side",
        text: "Toes elevated on plate or wall edge, heel on floor. Hips pushed back gently."
      },
      {
        id: "legs-c4",
        title: "Prone Cobra / Sphinx Stretch (Abdominal Wall & Hip Opener)",
        time: "60s deep breathing",
        text: "Lie face down, press up onto forearms/palms while keeping hips glued to floor. Breathe deeply into abdomen."
      }
    ]
  },
  rest: {
    key: "rest",
    name: "Day 7 — Posture Restoration & APT Recovery",
    badge: "FULL POSTURE & PELVIC RESTORATION",
    accent: "#a855f7",
    warmup: [
      {
        id: "rest-w1",
        title: "Gentle Incline Walk or Bike",
        time: "5 mins",
        text: "Gentle low-intensity blood flow to aid recovery."
      },
      {
        id: "rest-w2",
        title: "Cat-Cow Pelvic Tilt Mobilization",
        time: "10 slow cycles",
        badge: "APT MOBILITY",
        text: "On all fours. Inhale, drop belly into anterior tilt (Cow). Exhale, round spine into maximum posterior pelvic tilt (Cat), tucking tailbone under."
      }
    ],
    cooldown: [
      {
        id: "rest-c1",
        title: "Spinal Decompression Dead Hang",
        time: "3 x 30s",
        text: "Decompresses spinal discs and opens shoulder girdle."
      },
      {
        id: "rest-c2",
        title: "Half-Kneeling Hip Flexor Stretch with Posterior Tilt",
        time: "3 x 45s per side",
        badge: "APT FIX",
        text: "Tuck pelvis under, squeeze rear glute tightly. Lengthens chronic hip flexor tightness from sitting."
      },
      {
        id: "rest-c3",
        title: "Glute Bridges with 3-Second Isometric Hold",
        time: "3 x 12 reps",
        badge: "APT FIX",
        text: "Strengthens gluteus maximus to restore neutral pelvis angle."
      },
      {
        id: "rest-c4",
        title: "Dead Bugs with Flat Lumbar Spine",
        time: "3 x 10 reps per side",
        badge: "APT FIX",
        text: "Deep abdominal bracing to prevent lower back hyperextension."
      },
      {
        id: "rest-c5",
        title: "Right Upper Trap Release & Scapular Wall Slides",
        time: "3 x 10 reps",
        badge: "SHOULDER FIX",
        text: "Stand against wall with arms at 90°. Slide arms up while keeping right trap relaxed and lower traps engaged."
      },
      {
        id: "rest-c6",
        title: "Deep Diaphragmatic Child's Pose",
        time: "2 mins",
        text: "Full relaxation of spinal erectors and parasympathetic nervous system recovery."
      }
    ]
  }
};

/**
 * Detailed Anterior Pelvic Tilt (APT) Scientific Protocol
 */
export const APT_CLINICAL_GUIDE = [
  {
    number: "01",
    name: "Half-Kneeling Hip Flexor Stretch (with Posterior Pelvic Tilt)",
    target: "Psoas Major & Rectus Femoris (Inhibit / Lengthen)",
    dose: "3 sets x 45 seconds per side",
    why: "Tight hip flexors pull the front of the pelvis down, creating excessive lumbar lordosis and an anterior tilt.",
    cues: [
      "Kneel on one knee with front foot at 90 degrees.",
      "Crucial Pelvic Cue: Imagine your pelvis is a bucket of water. Tuck your tailbone under like a dog tucking its tail, spilling water out the back.",
      "Glute Squeeze: Squeeze the glute on the kneeling leg at 100% effort.",
      "Shift forward only 1-2 inches. If you lose the glute squeeze or arch your lower back, you lose the stretch on the psoas."
    ]
  },
  {
    number: "02",
    name: "Glute Bridge with Posterior Pelvic Tilt & Hold",
    target: "Gluteus Maximus & Hip Extensors (Activate / Strengthen)",
    dose: "3 sets x 12 reps (2-second isometric peak hold)",
    why: "In APT, reciprocal inhibition leaves the glutes neurologically dormant, forcing the lower back and hamstrings to overwork.",
    cues: [
      "Lie on back, feet flat and shoulder-width apart.",
      "Before lifting, flatten your lower back completely into the floor (zero daylight).",
      "Drive through your heels, lifting hips until torso and thighs form a straight ramp.",
      "Squeeze glutes maximally for 2 full seconds at the top. Do not arch into lower back."
    ]
  },
  {
    number: "03",
    name: "Dead Bugs (Deep Lumbar & Pelvic Control)",
    target: "Transverse Abdominis & Deep Core (Stabilize)",
    dose: "3 sets x 10 reps per side (controlled tempo)",
    why: "Builds the anterior abdominal wall tension needed to keep the pelvis level during walking and standing.",
    cues: [
      "Lie on back with arms straight up and knees at 90 degrees.",
      "Exhale and press your lower back firmly into the floor. Lock it down.",
      "Slowly lower right arm overhead while extending left leg out. Keep lower back glued to floor.",
      "Return and alternate sides. If your lower back pops up even 1mm, reduce leg extension distance."
    ]
  },
  {
    number: "04",
    name: "Couch Stretch / Wall Hip Flexor Mobilization",
    target: "Deep Psoas, Iliacus & Quadriceps (Deep Decompression)",
    dose: "2 sets x 45-60 seconds per side",
    why: "The gold-standard mobility drill to reverse hours of seated hip flexion.",
    cues: [
      "Place back knee tight into the corner of a wall or couch, shin pointing up the wall.",
      "Step front foot forward into a lunge.",
      "Bring torso tall and upright while keeping rear glute clenched tight forward.",
      "Take slow, deep diaphragmatic breaths to downregulate hip flexor tightness."
    ]
  }
];

export function getProtocolForRoutine(routineId = "") {
  const rid = String(routineId).toLowerCase();
  if (rid.includes("push")) return DAY_PROTOCOLS.push;
  if (rid.includes("pull")) return DAY_PROTOCOLS.pull;
  if (rid.includes("legs")) return DAY_PROTOCOLS.legs;
  if (rid.includes("rest")) return DAY_PROTOCOLS.rest;
  return DAY_PROTOCOLS.push;
}

export function NeerajPlanBanner({ onOpenGuide }) {
  return h.createElement(
    "div",
    {
      className: "neeraj-plan-banner",
      style: {
        background: "linear-gradient(135deg, rgba(20,24,20,0.95), rgba(12,14,12,0.98))",
        border: "1px solid rgba(132, 204, 22, 0.35)",
        borderRadius: "14px",
        padding: "16px 20px",
        marginBottom: "20px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)"
      }
    },
    h.createElement(
      "div",
      { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" } },
      h.createElement(
        "div",
        null,
        h.createElement(
          "div",
          { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px", flexWrap: "wrap" } },
          h.createElement("span", {
            style: {
              background: "rgba(132, 204, 22, 0.15)",
              color: "#84cc16",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase"
            }
          }, "PROFILE: NEERAJ EXCLUSIVE"),
          h.createElement("span", {
            style: {
              background: "rgba(59, 130, 246, 0.15)",
              color: "#60a5fa",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase"
            }
          }, "ASYMMETRY CORRECTED"),
          h.createElement("span", {
            style: {
              background: "rgba(234, 179, 8, 0.15)",
              color: "#facc15",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase"
            }
          }, "APT CORRECTED")
        ),
        h.createElement("h3", {
          style: {
            margin: "4px 0",
            fontSize: "18px",
            fontWeight: 800,
            color: "#f3f4f6"
          }
        }, "Beginner 6-Day PPL (Asymmetry & Posture Corrected)"),
        h.createElement("p", {
          style: {
            margin: 0,
            fontSize: "12px",
            color: "#9ca3af",
            maxWidth: "600px",
            lineHeight: 1.4
          }
        }, "Scapular depression for right shoulder elevation, anterior pelvic tilt correction for hips, and dedicated Pre & Post workout protocols for each day.")
      ),
      h.createElement(
        "div",
        { style: { display: "flex", gap: "8px", flexWrap: "wrap" } },
        h.createElement(
          "button",
          {
            className: "outline-button",
            onClick: () => onOpenGuide && onOpenGuide({ tab: "warmup" }),
            style: {
              borderColor: "rgba(132,204,22,0.5)",
              color: "#84cc16",
              fontWeight: 700,
              fontSize: "12px",
              padding: "7px 12px",
              background: "rgba(132,204,22,0.08)"
            }
          },
          "🔥 Pre-Workout"
        ),
        h.createElement(
          "button",
          {
            className: "outline-button",
            onClick: () => onOpenGuide && onOpenGuide({ tab: "cooldown" }),
            style: {
              borderColor: "rgba(56,189,248,0.5)",
              color: "#38bdf8",
              fontWeight: 700,
              fontSize: "12px",
              padding: "7px 12px",
              background: "rgba(56,189,248,0.08)"
            }
          },
          "🧘 Post-Workout"
        ),
        h.createElement(
          "button",
          {
            className: "outline-button",
            onClick: () => onOpenGuide && onOpenGuide({ tab: "apt" }),
            style: {
              borderColor: "rgba(250,204,21,0.5)",
              color: "#facc15",
              fontWeight: 700,
              fontSize: "12px",
              padding: "7px 12px",
              background: "rgba(250,204,21,0.08)"
            }
          },
          "🦴 APT Guide"
        ),
        h.createElement(
          "button",
          {
            className: "primary-button",
            onClick: () => onOpenGuide && onOpenGuide({ tab: "all" }),
            style: {
              fontWeight: 800,
              fontSize: "12px",
              padding: "7px 14px"
            }
          },
          "📋 Full Overview"
        )
      )
    )
  );
}

/**
 * UI Component: Pre-Workout Protocol & Exercise Guide Modal
 */
export function NeerajProtocolModal({ routine: inputRoutine, initialTab = "all", onClose, onStart }) {
  const routine = inputRoutine?.routine || (inputRoutine?.id ? inputRoutine : null);
  const startTab = inputRoutine?.tab || initialTab || "all";
  const [activeTab, setActiveTab] = h.useState(startTab);
  const [selectedDayKey, setSelectedDayKey] = h.useState(() => {
    if (!routine?.id) return "push";
    const rid = String(routine.id).toLowerCase();
    if (rid.includes("pull")) return "pull";
    if (rid.includes("legs")) return "legs";
    if (rid.includes("rest")) return "rest";
    return "push";
  });
  const [checkedItems, setCheckedItems] = h.useState({});

  const toggleCheck = (itemId) => {
    setCheckedItems(prev => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const dayProto = DAY_PROTOCOLS[selectedDayKey] || DAY_PROTOCOLS.push;
  const exercises = routine?.exercises || [];
  const routineName = routine?.name || dayProto.name;
  const isLegsOrRest = selectedDayKey === "legs" || selectedDayKey === "rest";

  return h.createElement(
    "div",
    { className: "modal-backdrop", onClick: onClose },
    h.createElement(
      "div",
      {
        className: "form-modal neeraj-protocol-modal",
        onClick: (e) => e.stopPropagation(),
        style: {
          maxWidth: "800px",
          width: "95vw",
          maxHeight: "92vh",
          overflowY: "auto",
          background: "#0d0f0e",
          border: "1px solid #232724",
          borderRadius: "16px",
          padding: "22px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.85)"
        }
      },
      // Modal Header
      h.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            borderBottom: "1px solid #1f2420",
            paddingBottom: "14px",
            marginBottom: "14px"
          }
        },
        h.createElement(
          "div",
          null,
          h.createElement("div", { style: { display: "flex", gap: "6px", alignItems: "center", marginBottom: "4px" } },
            h.createElement("span", {
              style: {
                fontSize: "10px",
                color: dayProto.accent,
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              }
            }, dayProto.badge)
          ),
          h.createElement("h2", {
            style: { margin: "2px 0 6px", fontSize: "19px", fontWeight: 800, color: "#fff" }
          }, routineName),
          h.createElement("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap" } },
            h.createElement("span", {
              style: { background: "rgba(132,204,22,0.12)", color: "#84cc16", padding: "2px 7px", borderRadius: "4px", fontSize: "11px", fontWeight: 700 }
            }, "2 Sets Dynamic Volume"),
            h.createElement("span", {
              style: { background: "rgba(59,130,246,0.12)", color: "#60a5fa", padding: "2px 7px", borderRadius: "4px", fontSize: "11px", fontWeight: 700 }
            }, "Right Shoulder Depression Cues"),
            h.createElement("span", {
              style: { background: "rgba(234,179,8,0.14)", color: "#facc15", padding: "2px 7px", borderRadius: "4px", fontSize: "11px", fontWeight: 700 }
            }, "🦴 Anterior Pelvic Tilt (APT) Fix")
          )
        ),
        h.createElement(
          "button",
          {
            className: "icon-button",
            onClick: onClose,
            style: {
              background: "transparent",
              border: 0,
              color: "#9ca3af",
              fontSize: "20px",
              cursor: "pointer",
              padding: "4px 8px"
            }
          },
          "✕"
        )
      ),

      // Day Selector (Push / Pull / Legs / Rest)
      h.createElement(
        "div",
        {
          style: {
            display: "flex",
            gap: "6px",
            marginBottom: "12px",
            overflowX: "auto",
            paddingBottom: "4px"
          }
        },
        [
          { id: "push", label: "Push Day", icon: "🔥", color: "#84cc16" },
          { id: "pull", label: "Pull Day", icon: "⚡", color: "#60a5fa" },
          { id: "legs", label: "Legs Day (APT)", icon: "🦵", color: "#f59e0b" },
          { id: "rest", label: "Day 7 Rest (Posture)", icon: "🧘", color: "#a855f7" }
        ].map(d =>
          h.createElement(
            "button",
            {
              key: d.id,
              onClick: () => setSelectedDayKey(d.id),
              style: {
                background: selectedDayKey === d.id ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.03)",
                color: selectedDayKey === d.id ? d.color : "#9ca3af",
                border: "1px solid " + (selectedDayKey === d.id ? d.color : "rgba(255,255,255,0.08)"),
                borderRadius: "6px",
                padding: "4px 10px",
                fontSize: "11px",
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap"
              }
            },
            d.icon + " " + d.label
          )
        )
      ),

      // Navigation Tabs (All, Pre-Workout, Exercises, Post-Workout, APT)
      h.createElement(
        "div",
        {
          style: {
            display: "flex",
            gap: "6px",
            borderBottom: "1px solid #1f2420",
            paddingBottom: "10px",
            marginBottom: "16px",
            overflowX: "auto"
          }
        },
        [
          { id: "all", label: "Full Overview", color: "#d1d5db" },
          { id: "warmup", label: "🔥 Pre-Workout (" + dayProto.warmup.length + ")", color: "#84cc16" },
          exercises.length > 0 && { id: "exercises", label: "⚡ Exercises (" + exercises.length + ")", color: "#60a5fa" },
          { id: "cooldown", label: "🧘 Post-Workout (" + dayProto.cooldown.length + ")", color: "#38bdf8" },
          { id: "apt", label: "🦴 Anterior Pelvic Tilt (APT)", color: "#facc15" }
        ].filter(Boolean).map((tab) =>
          h.createElement(
            "button",
            {
              key: tab.id,
              onClick: () => setActiveTab(tab.id),
              style: {
                background: activeTab === tab.id ? tab.color : "rgba(255,255,255,0.04)",
                color: activeTab === tab.id ? "#000" : "#d1d5db",
                border: "none",
                borderRadius: "6px",
                padding: "6px 12px",
                fontSize: "12px",
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap"
              }
            },
            tab.label
          )
        )
      ),

      // TAB: PRE-WORKOUT WARM-UP (Day-Specific)
      (activeTab === "all" || activeTab === "warmup") &&
        h.createElement(
          "div",
          { style: { marginBottom: "18px", background: "#111412", padding: "16px", borderRadius: "12px", border: "1px solid rgba(132, 204, 22, 0.25)" } },
          h.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "6px" } },
            h.createElement("h4", { style: { margin: 0, color: "#84cc16", fontSize: "14px", fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase" } },
              "🔥 " + dayProto.name + " — Pre-Workout Warm-Up"
            ),
            h.createElement("span", { style: { background: "rgba(132,204,22,0.15)", color: "#84cc16", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "4px" } },
              "8–10 MINS • TAP TO CHECK"
            )
          ),
          h.createElement(
            "div",
            { style: { display: "grid", gap: "10px" } },
            dayProto.warmup.map((step, idx) => {
              const isChecked = !!checkedItems[step.id];
              return h.createElement(
                "div",
                {
                  key: step.id || idx,
                  onClick: () => toggleCheck(step.id),
                  style: {
                    background: isChecked ? "rgba(132,204,22,0.06)" : "rgba(255,255,255,0.02)",
                    border: "1px solid " + (isChecked ? "rgba(132,204,22,0.4)" : "#1f2420"),
                    borderRadius: "8px",
                    padding: "10px 12px",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    opacity: isChecked ? 0.75 : 1
                  }
                },
                h.createElement(
                  "div",
                  { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px", gap: "8px" } },
                  h.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px" } },
                    h.createElement("span", {
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "18px",
                        height: "18px",
                        borderRadius: "4px",
                        border: "1px solid " + (isChecked ? "#84cc16" : "#4b5563"),
                        background: isChecked ? "#84cc16" : "transparent",
                        color: "#000",
                        fontSize: "12px",
                        fontWeight: 900
                      }
                    }, isChecked ? "✓" : ""),
                    h.createElement("strong", {
                      style: {
                        color: isChecked ? "#84cc16" : "#f3f4f6",
                        fontSize: "13px",
                        textDecoration: isChecked ? "line-through" : "none"
                      }
                    }, (idx + 1) + ". " + step.title)
                  ),
                  h.createElement("span", {
                    style: {
                      color: step.badge ? "#facc15" : "#84cc16",
                      background: step.badge ? "rgba(234,179,8,0.15)" : "rgba(132,204,22,0.1)",
                      fontSize: "10px",
                      fontWeight: 800,
                      padding: "2px 6px",
                      borderRadius: "4px",
                      whiteSpace: "nowrap"
                    }
                  }, step.badge || step.time)
                ),
                h.createElement("p", { style: { margin: "4px 0 0 26px", color: isChecked ? "#6b7280" : "#9ca3af", fontSize: "12px", lineHeight: 1.45 } }, step.text)
              );
            })
          )
        ),

      // TAB: EXERCISES & FORM TIPS
      exercises.length > 0 && (activeTab === "all" || activeTab === "exercises") &&
        h.createElement(
          "div",
          { style: { marginBottom: "18px" } },
          h.createElement("h4", { style: { margin: "0 0 12px", color: "#60a5fa", fontSize: "14px", fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase" } },
            "⚡ MAIN LIFTS & ASYMMETRY CUES (" + exercises.length + " EXERCISES)"
          ),
          h.createElement(
            "div",
            { style: { display: "grid", gap: "12px" } },
            exercises.map((ex, idx) =>
              h.createElement(
                "div",
                {
                  key: ex.exerciseId || idx,
                  style: {
                    background: "#121513",
                    border: "1px solid #232724",
                    borderRadius: "10px",
                    padding: "14px"
                  }
                },
                h.createElement(
                  "div",
                  { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", flexWrap: "wrap", gap: "8px" } },
                  h.createElement(
                    "div",
                    null,
                    h.createElement("strong", { style: { color: "#fff", fontSize: "14px", display: "block" } },
                      (idx + 1) + ". " + (ex.exerciseName || ex.name)
                    ),
                    h.createElement("span", { style: { fontSize: "11px", color: "#9ca3af" } }, "Target: " + (ex.target || ex.muscle || "General"))
                  ),
                  h.createElement(
                    "span",
                    {
                      style: {
                        background: "rgba(132,204,22,0.15)",
                        color: "#84cc16",
                        fontWeight: 800,
                        fontSize: "11px",
                        padding: "3px 8px",
                        borderRadius: "4px"
                      }
                    },
                    (ex.defaultSets || ex.sets || 2) + " Sets x " + (ex.defaultRepRange || "10-12") + " Reps"
                  )
                ),
                ex.formTips && h.createElement(
                  "div",
                  { style: { background: "rgba(0,0,0,0.3)", padding: "8px 10px", borderRadius: "6px", marginBottom: "10px", borderLeft: "3px solid #60a5fa" } },
                  h.createElement("small", { style: { color: "#60a5fa", fontWeight: 700, display: "block", marginBottom: "2px" } }, "🎯 Form & Asymmetry Cues:"),
                  h.createElement("p", { style: { margin: 0, color: "#d1d5db", fontSize: "12px", lineHeight: 1.4 } }, ex.formTips)
                ),
                ex.alternatives && h.createElement(
                  "div",
                  { style: { fontSize: "11px", color: "#9ca3af" } },
                  h.createElement("strong", { style: { color: "#cbd5e1" } }, "Alternatives: "),
                  ex.alternatives.dumbbell && h.createElement("span", null, "• DB: " + ex.alternatives.dumbbell + " "),
                  ex.alternatives.machine && h.createElement("span", null, "• Machine: " + ex.alternatives.machine + " "),
                  ex.alternatives.cableOrBodyweight && h.createElement("span", null, "• Body/Cable: " + ex.alternatives.cableOrBodyweight)
                )
              )
            )
          )
        ),

      // TAB: POST-WORKOUT COOL-DOWN & DECOMPRESSION (Day-Specific)
      (activeTab === "all" || activeTab === "cooldown") &&
        h.createElement(
          "div",
          { style: { marginBottom: "18px", background: "#111412", padding: "16px", borderRadius: "12px", border: "1px solid rgba(56, 189, 248, 0.25)" } },
          h.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "6px" } },
            h.createElement("h4", { style: { margin: 0, color: "#38bdf8", fontSize: "14px", fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase" } },
              "🧘 " + dayProto.name + " — Post-Workout Cool-Down"
            ),
            h.createElement("span", { style: { background: "rgba(56,189,248,0.15)", color: "#38bdf8", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "4px" } },
              "5 MINS • TAP TO CHECK"
            )
          ),
          h.createElement(
            "div",
            { style: { display: "grid", gap: "10px" } },
            dayProto.cooldown.map((step, idx) => {
              const isChecked = !!checkedItems[step.id];
              return h.createElement(
                "div",
                {
                  key: step.id || idx,
                  onClick: () => toggleCheck(step.id),
                  style: {
                    background: isChecked ? "rgba(56,189,248,0.06)" : "rgba(255,255,255,0.02)",
                    border: "1px solid " + (isChecked ? "rgba(56,189,248,0.4)" : "#1f2420"),
                    borderRadius: "8px",
                    padding: "10px 12px",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    opacity: isChecked ? 0.75 : 1
                  }
                },
                h.createElement(
                  "div",
                  { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px", gap: "8px" } },
                  h.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px" } },
                    h.createElement("span", {
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "18px",
                        height: "18px",
                        borderRadius: "4px",
                        border: "1px solid " + (isChecked ? "#38bdf8" : "#4b5563"),
                        background: isChecked ? "#38bdf8" : "transparent",
                        color: "#000",
                        fontSize: "12px",
                        fontWeight: 900
                      }
                    }, isChecked ? "✓" : ""),
                    h.createElement("strong", {
                      style: {
                        color: isChecked ? "#38bdf8" : "#f3f4f6",
                        fontSize: "13px",
                        textDecoration: isChecked ? "line-through" : "none"
                      }
                    }, (idx + 1) + ". " + step.title)
                  ),
                  h.createElement("span", {
                    style: {
                      color: step.badge ? "#facc15" : "#38bdf8",
                      background: step.badge ? "rgba(234,179,8,0.15)" : "rgba(56,189,248,0.1)",
                      fontSize: "10px",
                      fontWeight: 800,
                      padding: "2px 6px",
                      borderRadius: "4px",
                      whiteSpace: "nowrap"
                    }
                  }, step.badge || step.time)
                ),
                h.createElement("p", { style: { margin: "4px 0 0 26px", color: isChecked ? "#6b7280" : "#9ca3af", fontSize: "12px", lineHeight: 1.45 } }, step.text)
              );
            })
          )
        ),

      // TAB: ANTERIOR PELVIC TILT (APT) CLINICAL GUIDE
      (activeTab === "all" || activeTab === "apt") &&
        h.createElement(
          "div",
          { style: { marginBottom: "18px", background: "#13120c", padding: "16px", borderRadius: "12px", border: "1px solid rgba(234, 179, 8, 0.35)" } },
          h.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", flexWrap: "wrap", gap: "6px" } },
            h.createElement("h4", { style: { margin: 0, color: "#facc15", fontSize: "14px", fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase" } },
              "🦴 Anterior Pelvic Tilt (APT) Correction Protocol"
            ),
            h.createElement("span", { style: { background: "rgba(234,179,8,0.18)", color: "#facc15", fontSize: "11px", fontWeight: 800, padding: "2px 8px", borderRadius: "4px" } },
              "POSTURE PROTOCOL"
            )
          ),
          h.createElement("p", { style: { margin: "0 0 14px", color: "#d1d5db", fontSize: "12px", lineHeight: 1.45 } },
            "Anterior Pelvic Tilt is caused by shortened/tight hip flexors (psoas) and tight lumbar erectors pulling the pelvis forward, while glutes and deep abdominals are weak. Fix it by stretching the front hips with a posterior pelvic tuck and firing the glutes and core."
          ),
          h.createElement(
            "div",
            { style: { display: "grid", gap: "12px" } },
            APT_CLINICAL_GUIDE.map((item) =>
              h.createElement(
                "div",
                {
                  key: item.number,
                  style: {
                    background: "rgba(0,0,0,0.35)",
                    border: "1px solid rgba(234,179,8,0.2)",
                    borderRadius: "8px",
                    padding: "12px 14px"
                  }
                },
                h.createElement(
                  "div",
                  { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px", flexWrap: "wrap", gap: "6px" } },
                  h.createElement("strong", { style: { color: "#fff", fontSize: "13px" } }, item.number + ". " + item.name),
                  h.createElement("span", { style: { color: "#facc15", background: "rgba(234,179,8,0.12)", fontSize: "10px", fontWeight: 700, padding: "2px 6px", borderRadius: "4px" } }, item.dose)
                ),
                h.createElement("div", { style: { fontSize: "11px", color: "#facc15", marginBottom: "6px", fontWeight: 600 } }, "🎯 Target: " + item.target),
                h.createElement("p", { style: { margin: "0 0 8px", color: "#9ca3af", fontSize: "11px", fontStyle: "italic" } }, item.why),
                h.createElement(
                  "ul",
                  { style: { margin: 0, paddingLeft: "16px", color: "#e2e8e3", fontSize: "12px", lineHeight: 1.4 } },
                  item.cues.map((c, i) => h.createElement("li", { key: i, style: { marginBottom: "2px" } }, c))
                )
              )
            )
          )
        ),

      // Modal Footer with Start Button
      h.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            borderTop: "1px solid #1f2420",
            paddingTop: "16px",
            flexWrap: "wrap"
          }
        },
        h.createElement(
          "button",
          {
            className: "outline-button",
            onClick: onClose,
            style: { padding: "8px 16px" }
          },
          "Close"
        ),
        routine && onStart && h.createElement(
          "button",
          {
            className: "primary-button",
            onClick: () => {
              onClose();
              onStart(routine);
            },
            style: { padding: "8px 20px", fontWeight: 800 }
          },
          "🚀 Start This Workout"
        )
      )
    )
  );
}

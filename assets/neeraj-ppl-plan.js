import { r as h } from "./index-CiCrIMMp.js?v=stealth-v13";

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
export function NeerajPlanBanner({ onOpenGuide }) {
  // h is imported directly from index bundle

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
          { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" } },
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
          }, "ASYMMETRY CORRECTED")
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
        }, "Right shoulder elevation correction with strict unilateral dumbbell focus, scapular depression cues, and dynamic 2-set editable volume.")
      ),
      h.createElement(
        "button",
        {
          className: "outline-button",
          onClick: onOpenGuide,
          style: {
            borderColor: "#84cc16",
            color: "#84cc16",
            fontWeight: 700,
            fontSize: "12px",
            padding: "8px 14px"
          }
        },
        "📋 View Full Protocols & Tips"
      )
    )
  );
}

/**
 * UI Component: Pre-Workout Protocol & Exercise Guide Modal
 */
export function NeerajProtocolModal({ routine, onClose, onStart }) {
  // h is imported directly from index bundle

  const [activeTab, setActiveTab] = h.useState("all");

  const exercises = routine?.exercises || [];
  const routineName = routine?.name || "Beginner 6-Day PPL";

  return h.createElement(
    "div",
    { className: "modal-backdrop", onClick: onClose },
    h.createElement(
      "div",
      {
        className: "form-modal neeraj-protocol-modal",
        onClick: (e) => e.stopPropagation(),
        style: {
          maxWidth: "760px",
          width: "95vw",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#0d0f0e",
          border: "1px solid #232724",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.8)"
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
            paddingBottom: "16px",
            marginBottom: "18px"
          }
        },
        h.createElement(
          "div",
          null,
          h.createElement("span", {
            style: {
              fontSize: "11px",
              color: "#84cc16",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase"
            }
          }, "NEERAJ PROTOCOL & EXERCISE GUIDE"),
          h.createElement("h2", {
            style: { margin: "4px 0 6px", fontSize: "20px", fontWeight: 800, color: "#fff" }
          }, routineName),
          h.createElement("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" } },
            h.createElement("span", {
              style: { background: "rgba(132,204,22,0.12)", color: "#84cc16", padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 700 }
            }, "2 Sets Recommended (Fully Editable)"),
            h.createElement("span", {
              style: { background: "rgba(59,130,246,0.12)", color: "#60a5fa", padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 700 }
            }, "Right Scapular Depression Focus")
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
              cursor: "pointer"
            }
          },
          "✕"
        )
      ),

      // Scapular Asymmetry Callout Box
      h.createElement(
        "div",
        {
          style: {
            background: "rgba(234, 179, 8, 0.08)",
            border: "1px solid rgba(234, 179, 8, 0.35)",
            borderRadius: "10px",
            padding: "12px 16px",
            marginBottom: "18px"
          }
        },
        h.createElement("strong", { style: { color: "#facc15", display: "block", fontSize: "12px", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" } },
          "🛡️ Scapular & Posture Alert — Right Shoulder Elevation Correction"
        ),
        h.createElement("p", { style: { margin: 0, fontSize: "12px", color: "#d1d5db", lineHeight: 1.45 } },
          "Keep shoulder blades tucked down into your back pockets before every pressing and pulling set. Prevent your right upper trapezius from hiking upward. Emphasize unilateral dumbbell freedom and scapular plane angles (30° forward)."
        )
      ),

      // Navigation Tabs
      h.createElement(
        "div",
        {
          style: {
            display: "flex",
            gap: "8px",
            borderBottom: "1px solid #1f2420",
            paddingBottom: "10px",
            marginBottom: "16px",
            overflowX: "auto"
          }
        },
        [
          { id: "all", label: "Full Workout Overview" },
          { id: "warmup", label: "Pre-Workout Warm-Up" },
          { id: "exercises", label: "Exercises & Form Tips" },
          { id: "cooldown", label: "Cool-Down & Core" }
        ].map((tab) =>
          h.createElement(
            "button",
            {
              key: tab.id,
              onClick: () => setActiveTab(tab.id),
              style: {
                background: activeTab === tab.id ? "#84cc16" : "rgba(255,255,255,0.05)",
                color: activeTab === tab.id ? "#000" : "#d1d5db",
                border: "none",
                borderRadius: "6px",
                padding: "6px 12px",
                fontSize: "12px",
                fontWeight: 700,
                cursor: "pointer"
              }
            },
            tab.label
          )
        )
      ),

      // Tab Content: Warm-Up
      (activeTab === "all" || activeTab === "warmup") &&
        h.createElement(
          "div",
          { style: { marginBottom: "20px", background: "#111412", padding: "14px", borderRadius: "10px", border: "1px solid #1f2420" } },
          h.createElement("h4", { style: { margin: "0 0 10px", color: "#84cc16", fontSize: "13px", letterSpacing: "0.05em" } }, "⏱️ PRE-WORKOUT WARM-UP (8–10 MINS)"),
          h.createElement("ol", { style: { margin: 0, paddingLeft: "18px", color: "#d1d5db", fontSize: "12px", lineHeight: 1.6 } },
            h.createElement("li", null, "3 mins cardio (Stairmaster or Elliptical) to elevate core temperature."),
            h.createElement("li", null, "Right Upper Trap Release: 30s gentle neck stretch to the left (reach right fingertips to floor)."),
            h.createElement("li", null, "Prone Incline Y-Raises: 10 unweighted reps (focus on lower trapezius pulling right shoulder blade down)."),
            h.createElement("li", null, "Dynamic Arm Swings & Leg Swings (15 reps each)."),
            h.createElement("li", null, "1 warmup feeder set at 50% working weight before first compound movement.")
          )
        ),

      // Tab Content: Exercises & Form Tips
      (activeTab === "all" || activeTab === "exercises") &&
        h.createElement(
          "div",
          { style: { marginBottom: "20px" } },
          h.createElement("h4", { style: { margin: "0 0 12px", color: "#60a5fa", fontSize: "13px", letterSpacing: "0.05em" } }, "💪 EXERCISE CATALOG & FORM CUES"),
          h.createElement(
            "div",
            { style: { display: "grid", gap: "12px" } },
            exercises.map((ex, idx) =>
              h.createElement(
                "div",
                {
                  key: ex.exerciseId || idx,
                  style: {
                    background: "#131614",
                    border: "1px solid #232824",
                    borderRadius: "10px",
                    padding: "14px"
                  }
                },
                h.createElement(
                  "div",
                  { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "6px", marginBottom: "6px" } },
                  h.createElement("div", null,
                    h.createElement("strong", { style: { color: "#f3f4f6", fontSize: "14px" } }, `${idx + 1}. ${ex.exerciseName}`),
                    ex.target && h.createElement("div", { style: { color: "#9ca3af", fontSize: "11px", marginTop: "2px" } }, `Target: ${ex.target}`)
                  ),
                  h.createElement("span", {
                    style: {
                      background: "rgba(132, 204, 22, 0.15)",
                      color: "#84cc16",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: "4px"
                    }
                  }, `${ex.sets || 2} sets × ${ex.defaultRepRange || "10–12"} reps`)
                ),
                ex.formTips && h.createElement("p", {
                  style: { margin: "6px 0", fontSize: "12px", color: "#d1d5db", lineHeight: 1.45, background: "#0a0c0a", padding: "8px 10px", borderRadius: "6px", borderLeft: "3px solid #84cc16" }
                }, h.createElement("strong", { style: { color: "#84cc16" } }, "Form Tip: "), ex.formTips),
                ex.asymmetryCues && h.createElement("p", {
                  style: { margin: "6px 0", fontSize: "12px", color: "#facc15", lineHeight: 1.45, background: "rgba(234,179,8,0.06)", padding: "8px 10px", borderRadius: "6px", borderLeft: "3px solid #facc15" }
                }, h.createElement("strong", null, "Asymmetry Cue: "), ex.asymmetryCues),
                // Alternatives Table
                ex.alternatives && ex.alternatives.length > 0 && h.createElement(
                  "div",
                  { style: { marginTop: "8px", paddingTop: "8px", borderTop: "1px dashed #232824" } },
                  h.createElement("span", { style: { fontSize: "10px", fontWeight: 800, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em" } }, "3 Swappable Alternatives:"),
                  h.createElement("ul", { style: { margin: "4px 0 0", paddingLeft: "16px", fontSize: "11px", color: "#cbd5e1", lineHeight: 1.5 } },
                    ex.alternatives.map((alt, aIdx) =>
                      h.createElement("li", { key: aIdx },
                        h.createElement("span", { style: { color: "#84cc16", fontWeight: 600 } }, `${alt.category}: `),
                        alt.name
                      )
                    )
                  )
                )
              )
            )
          )
        ),

      // Tab Content: Cool-Down & Core Finisher
      (activeTab === "all" || activeTab === "cooldown") &&
        h.createElement(
          "div",
          { style: { display: "grid", gap: "14px", marginBottom: "20px" } },
          // Core & Abs Finisher
          h.createElement(
            "div",
            { style: { background: "#111412", padding: "14px", borderRadius: "10px", border: "1px solid #1f2420" } },
            h.createElement("h4", { style: { margin: "0 0 8px", color: "#f59e0b", fontSize: "13px", letterSpacing: "0.05em" } }, "⚡ CORE & ABS FINISHER (OPTIONAL 2x / WEEK)"),
            h.createElement("p", { style: { margin: "0 0 8px", fontSize: "11px", color: "#9ca3af" } }, "Format: 35s work / 25s rest (2 rounds)"),
            h.createElement("ol", { style: { margin: 0, paddingLeft: "18px", color: "#d1d5db", fontSize: "12px", lineHeight: 1.6 } },
              h.createElement("li", null, "Slow-Tempo Mountain Climbers (Zero torso twist, rigid plank)"),
              h.createElement("li", null, "Floor Crunches with 2-Second Hold (Ribs to hips squeeze)"),
              h.createElement("li", null, "Forearm Plank Hold (Depress shoulders, tight glutes)")
            )
          ),
          // Post-Workout Cool-Down
          h.createElement(
            "div",
            { style: { background: "#111412", padding: "14px", borderRadius: "10px", border: "1px solid #1f2420" } },
            h.createElement("h4", { style: { margin: "0 0 10px", color: "#38bdf8", fontSize: "13px", letterSpacing: "0.05em" } }, "🧘 POST-WORKOUT COOL-DOWN (5 MINS)"),
            h.createElement("ol", { style: { margin: 0, paddingLeft: "18px", color: "#d1d5db", fontSize: "12px", lineHeight: 1.6 } },
              h.createElement("li", null, "Pull-up bar Dead Hang: 2 x 30s (Spinal decompression)"),
              h.createElement("li", null, "Doorway Chest & Front Shoulder Stretch: 45s per side"),
              h.createElement("li", null, "Kneeling Hip Flexor Stretch: 45s per side"),
              h.createElement("li", null, "Child's Pose into Cobra Stretch: 60s deep breathing")
            )
          )
        ),

      // Footer Actions
      h.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            borderTop: "1px solid #1f2420",
            paddingTop: "16px"
          }
        },
        h.createElement(
          "button",
          { className: "outline-button", onClick: onClose, style: { padding: "8px 16px" } },
          "Close"
        ),
        onStart && h.createElement(
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

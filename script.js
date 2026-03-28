/**
 * Gradelift Anatomy Quiz - Main Script
 * Handles navigation, quiz logic, and data management.
 */

// ==========================================
// 1. NAVIGATION DATA (Subcourses & Modules)
// ==========================================

const anatomyData = {
  "upper-limb": {
    title: "Upper Limb",
    modules: [
      "Bones of Upper Limb",
      "Clavicle, Pectoral Region & Breast",
      "Brachial Plexus",
      "Axilla",
      "Arm",
      "Cubital Fossa",
      "Forearm",
      "Hand",
    ],
  },
  "lower-limb": {
    title: "Lower Limb",
    modules: [
      "Bones of Lower Limb",
      "Anterior & Medial Thigh",
      "Gluteal & Posterior Thigh",
      "Popliteal Fossa & Leg",
      "Foot",
    ],
  },
  head: {
    title: "Gross Anatomy of Head",
    modules: [
      "Cranium",
      "Cranial Fossa",
      "Face and Scalp",
      "Cranial Meninges",
      "Brain",
      "Orbital Region and Eye",
      "Oral Region",
      "Nose",
      "Ear",
    ],
  },
  neck: {
    title: "Gross Anatomy of Neck",
    modules: [
      "Bones of Neck",
      "Fascia of Neck",
      "Triangles of the Neck",
      "Muscles of the Neck",
      "Thyroid and Parathyroid Gland",
      "Larynx",
      "Pharynx",
    ],
  },
  "gen-embryo": {
    title: "General Embryology",
    modules: [
      "Gametogenesis",
      "First Week: Ovulation to Implantation",
      "Second Week: Bilaminar Disc",
      "Third Week: Trilaminar Disc",
      "Third to Eighth Weeks: Embryonic Period",
      "Third Month to Birth: Fetus",
    ],
  },
  "neuro-embryo": {
    title: "Neuro-Embryology",
    modules: [
      "Development of Head",
      "Development of Neck",
      "Development of Ear",
      "Development of Eye",
      "Development of Central Nervous System",
    ],
  },
  "special-senses": {
    title: "Histology of Special Senses",
    modules: [
      "Spinal Cord, Brainstem",
      "Cerebrum and Cerebellum",
      "Histology of Ear",
      "Histology of Eye",
    ],
  },
  "basic-tissues": {
    title: "Histology of Basic Tissues",
    modules: [
      "Cell Structure",
      "Epithelia",
      "General Connective Tissue",
      "Cartilage",
      "Bones",
      "Muscular Tissue",
      "Nervous System",
      "Blood & Mononuclear System",
    ],
  },
  "general-anatomy": {
    title: "General Anatomy Challenge",
    modules: ["Random Quiz - 30 Questions"],
  },
};

const anatomyFacts = [
  "The femur is the longest and strongest bone in the human body.",
  "The stapedius muscle in the ear is the smallest skeletal muscle in the body.",
  "The cornea is the only part of the body with no blood supply; it gets oxygen directly from the air.",
  "Human bone is 4 times stronger than concrete.",
  "The tongue is the only muscle in the human body that is attached at only one end.",
  "Your nose and ears never stop growing.",
  "The gluteus maximus is the body's largest muscle.",
  "There are more than 600 muscles in the human body.",
  "The hyoid bone is the only bone that doesn't articulate with another bone.",
  "Enamel is the hardest substance in the human body.",
];

// ==========================================
// 2. QUESTION BANK
// ==========================================

const questionBank = {
  // --- 1. UPPER LIMB ---
  "upper-limb": {
    "Bones of Upper Limb": [
      {
        text: "The surgical neck of the humerus is clinically significant because it is closely related to which structure?",
        options: [
          {
            text: "Radial nerve",
            explanation:
              "Incorrect. The radial nerve runs in the radial groove, not the surgical neck.",
          },
          {
            text: "Axillary nerve",
            explanation:
              "Correct! The surgical neck of the humerus is related to the axillary nerve and posterior circumflex humeral artery, making them vulnerable in fractures.",
          },
          {
            text: "Median nerve",
            explanation:
              "Incorrect. The median nerve passes anteriorly down the arm without wrapping the surgical neck.",
          },
          {
            text: "Musculocutaneous nerve",
            explanation:
              "Incorrect. The musculocutaneous nerve pierces the coracobrachialis.",
          },
        ],
        correct: 1,
      },
      {
        text: "A fracture at the midshaft of the humerus is most likely to injure which structure in the radial groove?",
        options: [
          {
            text: "Ulnar nerve",
            explanation:
              "Incorrect. The ulnar nerve passes behind the medial epicondyle.",
          },
          {
            text: "Axillary nerve",
            explanation:
              "Incorrect. The axillary nerve is located at the surgical neck, not the midshaft.",
          },
          {
            text: "Radial nerve",
            explanation:
              "Correct! The radial groove (spiral groove) transmits the radial nerve and profunda brachii artery.",
          },
          {
            text: "Median nerve",
            explanation:
              "Incorrect. The median nerve runs anteromedially in the arm.",
          },
        ],
        correct: 2,
      },
      {
        text: "Which of the following structures attaches to the lesser tubercle of the humerus?",
        options: [
          "Supraspinatus",
          "Infraspinatus",
          "Subscapularis",
          "Teres minor",
        ],
        correct: 2,
        explanation:
          "Lesser tubercle → Subscapularis. Greater tubercle → Supraspinatus, Infraspinatus, Teres minor.",
      },
      {
        text: "The anatomical neck of the humerus is clinically important because it marks the attachment of:",
        options: [
          "Surgical capsule of the shoulder joint",
          "Capsule of the elbow joint",
          "Deltoid muscle",
          "Coracobrachialis",
        ],
        correct: 0,
        explanation:
          "The capsule of the glenohumeral joint attaches around the anatomical neck.",
      },
      {
        text: "The deltoid tuberosity is located on which surface of the humerus?",
        options: [
          "Medial surface",
          "Lateral surface",
          "Posterior surface",
          "Anterior surface",
        ],
        correct: 1,
        explanation:
          "The deltoid muscle inserts on the lateral shaft at the deltoid tuberosity.",
      },
      {
        text: "Which of the following articulates with the head of the radius?",
        options: [
          "Trochlea",
          "Capitulum",
          "Medial epicondyle",
          "Coronoid fossa",
        ],
        correct: 1,
        explanation:
          "The capitulum (lateral distal humerus) articulates with the head of the radius.",
      },
      {
        text: "The trochlea of the humerus articulates with which part of the ulna?",
        options: [
          "Olecranon only",
          "Coronoid process only",
          "Trochlear notch",
          "Radial notch",
        ],
        correct: 2,
        explanation:
          "The trochlea fits into the trochlear notch formed by the olecranon and coronoid process.",
      },
      {
        text: "The intertubercular sulcus (bicipital groove) transmits:",
        options: [
          "Tendon of long head of triceps",
          "Tendon of short head of biceps",
          "Tendon of long head of biceps",
          "Axillary nerve",
        ],
        correct: 2,
        explanation:
          "The long head of biceps runs in the intertubercular groove.",
      },
      {
        text: "Which structure is found only on the ulna and not on the radius?",
        options: ["Styloid process", "Head", "Radial notch", "Neck"],
        correct: 2,
        explanation:
          "The radial notch is on the ulna and articulates with the head of the radius.",
      },
      {
        text: "The nutrient artery of the humerus enters:",
        options: [
          "Towards the elbow",
          "Towards the shoulder",
          "Laterally",
          "Medially",
        ],
        correct: 0,
        explanation:
          "Rule: 'To the elbow I go, from the knee I flee.' Upper limb nutrient canals are directed distally.",
      },
      {
        text: "Which carpal bone is most commonly fractured?",
        options: ["Lunate", "Scaphoid", "Triquetrum", "Pisiform"],
        correct: 1,
        explanation:
          "The scaphoid is most frequently fractured and prone to avascular necrosis due to retrograde blood supply.",
      },
      {
        text: "The anatomical snuffbox is bounded laterally by the tendons of:",
        options: [
          "Extensor digitorum",
          "Extensor carpi ulnaris",
          "Abductor pollicis longus and extensor pollicis brevis",
          "Extensor pollicis longus and brevis",
        ],
        correct: 2,
        explanation:
          "Medial boundary → Extensor pollicis longus. Lateral boundary → APL and EPB.",
      },
      {
        text: "Which carpal bone articulates with the radius?",
        options: ["Pisiform", "Scaphoid", "Hamate", "Trapezium"],
        correct: 1,
        explanation:
          "The radius articulates with the scaphoid and lunate (not ulna directly).",
      },
      {
        text: "The hook of hamate is clinically important because it may injure:",
        options: [
          "Radial artery",
          "Ulnar nerve",
          "Median nerve",
          "Axillary artery",
        ],
        correct: 1,
        explanation:
          "The ulnar nerve passes through Guyon’s canal near the hook of hamate.",
      },
      {
        text: "The clavicle differs from other long bones because it:",
        options: [
          "Has a medullary cavity",
          "Ossifies intramembranously",
          "Articulates with the scapula only",
          "Has an epiphysis at birth",
        ],
        correct: 1,
        explanation:
          "The clavicle is primarily intramembranous in origin and lacks a typical medullary cavity.",
      },
      {
        text: "Which part of the scapula articulates with the clavicle?",
        options: ["Coracoid process", "Glenoid cavity", "Acromion", "Spine"],
        correct: 2,
        explanation:
          "The acromion articulates with the clavicle at the acromioclavicular joint.",
      },
      {
        text: "The suprascapular notch is converted into a foramen by:",
        options: [
          "Transverse humeral ligament",
          "Coracoacromial ligament",
          "Superior transverse scapular ligament",
          "Inferior transverse ligament",
        ],
        correct: 2,
        explanation:
          "It bridges the suprascapular notch forming a foramen for the suprascapular nerve.",
      },
      {
        text: "Which surface of the scapula contains the subscapular fossa?",
        options: [
          "Dorsal surface",
          "Costal surface",
          "Lateral surface",
          "Posterior border",
        ],
        correct: 1,
        explanation:
          "The subscapular fossa lies on the anterior (costal) surface.",
      },
      {
        text: "The head of the radius articulates proximally with:",
        options: [
          "Trochlea and radial notch",
          "Capitulum and radial notch",
          "Capitulum only",
          "Trochlea only",
        ],
        correct: 1,
        explanation:
          "It articulates with the capitulum (humerus) and radial notch (ulna).",
      },
      {
        text: "Which statement about the ulna is TRUE?",
        options: [
          "It forms the main articulation with the carpal bones",
          "It is lateral in anatomical position",
          "It forms the hinge of the elbow joint",
          "It has a round head proximally",
        ],
        correct: 2,
        explanation:
          "The ulna (trochlear notch) forms the hinge articulation with the trochlea. The radius is lateral.",
      },
    ],
    "Clavicle, Pectoral Region & Breast": [
      {
        text: "The weakest part of the clavicle, and therefore the most commonly fractured region, is:",
        options: [
          "Medial third",
          "Lateral third",
          "Junction of medial 2/3 and lateral 1/3",
          "Costoclavicular ligament attachment",
        ],
        correct: 2,
        explanation:
          "The curvature changes at this junction and the bone is thinnest here → common fracture site.",
      },
      {
        text: "A fracture of the middle third of the clavicle results in the medial fragment being pulled:",
        options: [
          "Inferiorly by gravity",
          "Inferiorly by subclavius",
          "Superiorly by sternocleidomastoid",
          "Laterally by trapezius",
        ],
        correct: 2,
        explanation: "Sternocleidomastoid elevates the medial fragment.",
      },
      {
        text: "The conoid tubercle is found on:",
        options: [
          "Superior surface of medial clavicle",
          "Inferior surface of lateral clavicle",
          "Inferior surface of medial clavicle",
          "Superior surface of lateral clavicle",
        ],
        correct: 1,
        explanation:
          "It gives attachment to the conoid ligament (part of coracoclavicular ligament).",
      },
      {
        text: "Which structure passes posterior to the clavicle and may be compressed in a clavicular fracture?",
        options: [
          "Axillary artery",
          "Subclavian vein",
          "Cephalic vein",
          "Thoracoacromial artery",
        ],
        correct: 1,
        explanation:
          "The subclavian vein runs posterior and inferior to the clavicle → risk in displaced fractures.",
      },
      {
        text: "The clavipectoral fascia encloses which muscle?",
        options: [
          "Pectoralis major",
          "Pectoralis minor",
          "Serratus anterior",
          "Subclavius only",
        ],
        correct: 1,
        explanation:
          "Clavipectoral fascia surrounds subclavius and pectoralis minor.",
      },
      {
        text: "The cephalic vein pierces which structure to drain into the axillary vein?",
        options: [
          "Pectoralis major",
          "Axillary fascia",
          "Clavipectoral fascia",
          "Deltoid fascia",
        ],
        correct: 2,
        explanation:
          "Cephalic vein pierces clavipectoral fascia before joining axillary vein.",
      },
      {
        text: "Which nerve pierces pectoralis minor?",
        options: [
          "Medial pectoral nerve",
          "Lateral pectoral nerve",
          "Long thoracic nerve",
          "Thoracodorsal nerve",
        ],
        correct: 0,
        explanation:
          "The medial pectoral nerve pierces pectoralis minor to supply both pec minor and major.",
      },
      {
        text: "The long thoracic nerve injury produces winging of the scapula due to paralysis of:",
        options: [
          "Pectoralis minor",
          "Latissimus dorsi",
          "Serratus anterior",
          "Rhomboid major",
        ],
        correct: 2,
        explanation:
          "Long thoracic nerve supplies serratus anterior → stabilizes scapula.",
      },
      {
        text: "The breast is separated from the deep fascia by:",
        options: [
          "Cooper’s ligaments",
          "Clavipectoral fascia",
          "Retromammary space",
          "Axillary tail",
        ],
        correct: 2,
        explanation:
          "Retromammary space allows mobility of the breast over pectoralis major.",
      },
      {
        text: "The axillary tail of Spence extends into:",
        options: [
          "Posterior triangle of neck",
          "Deltopectoral groove",
          "Axilla",
          "Clavipectoral triangle",
        ],
        correct: 2,
        explanation:
          "The axillary tail is an extension of breast tissue into the axilla.",
      },
      {
        text: "Which lymph nodes first receive lymph from the upper outer quadrant of the breast?",
        options: [
          "Parasternal nodes",
          "Apical axillary nodes",
          "Pectoral (anterior) axillary nodes",
          "Supraclavicular nodes",
        ],
        correct: 2,
        explanation: "Most breast lymph drains to anterior axillary nodes.",
      },
      {
        text: "Lymph from the medial quadrant of the breast may drain into:",
        options: [
          "Contralateral breast",
          "Inguinal nodes",
          "Posterior axillary nodes",
          "Submental nodes",
        ],
        correct: 0,
        explanation: "Medial drainage → parasternal nodes → cross midline.",
      },
      {
        text: "Peau d’orange appearance in breast carcinoma is due to involvement of:",
        options: [
          "Lactiferous ducts",
          "Retromammary space",
          "Suspensory ligaments",
          "Axillary tail",
        ],
        correct: 2,
        explanation: "Suspensory ligaments of breast tether skin → dimpling.",
      },
      {
        text: "The arterial supply to the medial part of the breast is mainly from:",
        options: [
          "Lateral thoracic artery",
          "Thoracoacromial artery",
          "Posterior intercostal arteries",
          "Internal thoracic artery",
        ],
        correct: 3,
        explanation: "Medial breast → perforators of Internal thoracic artery.",
      },
      {
        text: "The nipple is typically located at which vertebral level in males?",
        options: ["T2", "T4", "T6", "T8"],
        correct: 1,
        explanation: "Nipple lies at 4th intercostal space (~T4 dermatome).",
      },
      {
        text: "Which structure forms the anterior wall of the axilla?",
        options: [
          "Pectoralis major only",
          "Pectoralis minor only",
          "Pectoralis major and minor",
          "Serratus anterior",
        ],
        correct: 2,
        explanation: "Both muscles form the anterior axillary fold.",
      },
      {
        text: "The clavipectoral triangle (deltopectoral triangle) contains:",
        options: [
          "Axillary artery",
          "Cephalic vein",
          "Axillary nerve",
          "Thoracodorsal nerve",
        ],
        correct: 1,
        explanation:
          "The cephalic vein lies in the deltopectoral groove before piercing fascia.",
      },
      {
        text: "The subclavius muscle functions primarily to:",
        options: [
          "Elevate clavicle",
          "Depress clavicle",
          "Stabilize clavicle",
          "Rotate clavicle",
        ],
        correct: 2,
        explanation:
          "Subclavius muscle stabilizes the clavicle during shoulder movement.",
      },
      {
        text: "The clavipectoral fascia is attached superiorly to:",
        options: ["Coracoid process", "Clavicle", "Sternum", "First rib"],
        correct: 1,
        explanation: "It extends from clavicle to axillary fascia.",
      },
      {
        text: "In modified radical mastectomy, which nerve must be preserved to prevent winged scapula?",
        options: [
          "Thoracodorsal nerve",
          "Lateral pectoral nerve",
          "Long thoracic nerve",
          "Medial pectoral nerve",
        ],
        correct: 2,
        explanation: "Injury → serratus anterior paralysis → winged scapula.",
      },
    ],
    "Brachial Plexus": [
      {
        text: "The roots of the brachial plexus emerge between which two muscles?",
        options: [
          "Scalenus anterior and medius",
          "Scalenus medius and posterior",
          "Sternocleidomastoid and scalenus anterior",
          "Trapezius and levator scapulae",
        ],
        correct: 0,
        explanation:
          "Roots (C5–T1) pass through the interscalene triangle between anterior and middle scalene.",
      },
      {
        text: "The suprascapular nerve arises from:",
        options: ["Root", "Posterior cord", "Upper trunk", "Lateral cord"],
        correct: 2,
        explanation:
          "It arises from the superior trunk (C5–C6) and supplies supraspinatus & infraspinatus.",
      },
      {
        text: "Which nerve is formed by contributions from both lateral and medial cords?",
        options: [
          "Ulnar nerve",
          "Radial nerve",
          "Median nerve",
          "Axillary nerve",
        ],
        correct: 2,
        explanation: "Median nerve is formed by lateral and medial roots.",
      },
      {
        text: "The posterior cord is formed by union of:",
        options: [
          "Anterior divisions of all trunks",
          "Posterior divisions of all trunks",
          "Upper and middle trunks",
          "Lower trunk only",
        ],
        correct: 1,
        explanation: "All three posterior divisions unite → posterior cord.",
      },
      {
        text: "Which nerve is most commonly injured in surgical neck fracture of the humerus?",
        options: [
          "Radial nerve",
          "Musculocutaneous nerve",
          "Axillary nerve",
          "Ulnar nerve",
        ],
        correct: 2,
        explanation:
          "Axillary nerve winds around surgical neck with posterior circumflex humeral artery.",
      },
      {
        text: "A lesion of the upper trunk (C5–C6) produces which deformity?",
        options: ["Claw hand", "Wrist drop", "Erb-Duchenne palsy", "Ape thumb"],
        correct: 2,
        explanation: "Erb's palsy → 'waiter's tip' position.",
      },
      {
        text: "In Erb's palsy, which movement is most severely affected?",
        options: [
          "Finger flexion",
          "Elbow extension",
          "Shoulder abduction",
          "Wrist flexion",
        ],
        correct: 2,
        explanation: "Deltoid & supraspinatus (C5–C6) are paralyzed.",
      },
      {
        text: "A lower trunk lesion (C8–T1) produces:",
        options: [
          "Klumpke palsy",
          "Erb palsy",
          "Wrist drop",
          "Radial nerve palsy",
        ],
        correct: 0,
        explanation:
          "Klumpke's palsy affects intrinsic hand muscles → clawing.",
      },
      {
        text: "Which nerve arises from the lateral cord only?",
        options: [
          "Ulnar nerve",
          "Musculocutaneous nerve",
          "Radial nerve",
          "Axillary nerve",
        ],
        correct: 1,
        explanation: "Musculocutaneous nerve supplies anterior arm.",
      },
      {
        text: "The medial cutaneous nerve of arm arises from:",
        options: [
          "Lateral cord",
          "Posterior cord",
          "Medial cord",
          "Upper trunk",
        ],
        correct: 2,
        explanation:
          "Medial cord gives medial cutaneous nerves of arm and forearm.",
      },
      {
        text: "The thoracodorsal nerve is a branch of:",
        options: [
          "Lateral cord",
          "Posterior cord",
          "Upper trunk",
          "Medial cord",
        ],
        correct: 1,
        explanation: "Thoracodorsal nerve supplies latissimus dorsi.",
      },
      {
        text: "The long thoracic nerve arises directly from:",
        options: ["Trunks", "Cords", "Divisions", "Roots"],
        correct: 3,
        explanation: "Long thoracic nerve arises from C5–C7 roots.",
      },
      {
        text: "Which cord is named according to its relation to the axillary artery?",
        options: ["Roots", "Trunks", "Divisions", "Cords"],
        correct: 3,
        explanation:
          "Cords are named lateral, medial, posterior relative to second part of axillary artery.",
      },
      {
        text: "Compression of the posterior cord would most likely impair:",
        options: [
          "Elbow flexion",
          "Wrist extension",
          "Finger abduction",
          "Shoulder adduction only",
        ],
        correct: 1,
        explanation:
          "Posterior cord gives rise to radial nerve → wrist extensors.",
      },
      {
        text: "The nerve to subclavius arises from:",
        options: [
          "Upper trunk",
          "Lower trunk",
          "Posterior cord",
          "Medial cord",
        ],
        correct: 0,
        explanation: "Small branch from superior trunk.",
      },
      {
        text: "Which structure is located posterior to the axillary artery in the axilla?",
        options: [
          "Lateral cord",
          "Medial cord",
          "Posterior cord",
          "Median nerve",
        ],
        correct: 2,
        explanation:
          "Posterior cord lies posterior to second part of axillary artery.",
      },
      {
        text: "A stab wound in the infraclavicular region damages the lateral cord. Which function is affected?",
        options: [
          "Finger abduction",
          "Elbow flexion",
          "Wrist extension",
          "Thumb adduction",
        ],
        correct: 1,
        explanation: "Lateral cord → musculocutaneous nerve → biceps brachii.",
      },
      {
        text: "Horner's syndrome may accompany which plexus injury?",
        options: [
          "Upper trunk lesion",
          "Lower trunk lesion",
          "Posterior cord lesion",
          "Lateral cord lesion",
        ],
        correct: 1,
        explanation: "T1 sympathetic fibers affected in lower trunk injury.",
      },
      {
        text: "Which nerve supplies teres minor?",
        options: [
          "Radial nerve",
          "Axillary nerve",
          "Suprascapular nerve",
          "Musculocutaneous nerve",
        ],
        correct: 1,
        explanation: "Axillary nerve supplies deltoid and teres minor.",
      },
      {
        text: "The medial cord is formed from:",
        options: [
          "Anterior division of lower trunk",
          "Posterior division of lower trunk",
          "Anterior divisions of upper & middle trunks",
          "Posterior divisions of all trunks",
        ],
        correct: 0,
        explanation:
          "Lateral cord → anterior divisions of upper & middle trunks\nMedial cord → anterior division of lower trunk\nPosterior cord → all posterior divisions",
      },
    ],
    Axilla: [
      {
        text: "The apex of the axilla (cervico-axillary canal) is bounded by all EXCEPT:",
        options: [
          "Clavicle",
          "First rib",
          "Superior border of scapula",
          "Upper border of pectoralis minor",
        ],
        correct: 3,
        explanation:
          "The apex is bounded by clavicle (anterior), first rib (medial), and superior border of scapula (posterior).",
      },
      {
        text: "The anterior wall of the axilla is primarily formed by:",
        options: [
          "Serratus anterior",
          "Subscapularis",
          "Pectoralis major and minor",
          "Latissimus dorsi",
        ],
        correct: 2,
        explanation: "These muscles form the anterior axillary fold.",
      },
      {
        text: "The surgical neck of the humerus lies in close relation to which structure within the axilla?",
        options: [
          "Radial nerve",
          "Axillary nerve",
          "Median nerve",
          "Ulnar nerve",
        ],
        correct: 1,
        explanation:
          "Axillary nerve winds around the surgical neck with posterior circumflex humeral artery.",
      },
      {
        text: "The medial wall of the axilla is formed mainly by:",
        options: [
          "Subscapularis",
          "Serratus anterior",
          "Latissimus dorsi",
          "Teres major",
        ],
        correct: 1,
        explanation:
          "Serratus anterior covers the thoracic wall forming medial boundary.",
      },
      {
        text: "The second part of the axillary artery lies posterior to:",
        options: [
          "Pectoralis major",
          "Pectoralis minor",
          "Subscapularis",
          "Clavipectoral fascia",
        ],
        correct: 1,
        explanation:
          "Axillary artery is divided into 3 parts by pectoralis minor.",
      },
      {
        text: "The posterior cord of the brachial plexus lies:",
        options: [
          "Medial to the axillary artery",
          "Lateral to the axillary artery",
          "Posterior to the axillary artery",
          "Anterior to the axillary vein",
        ],
        correct: 2,
        explanation:
          "Cords are named according to relation to second part of axillary artery.",
      },
      {
        text: "Which branch arises from the third part of the axillary artery?",
        options: [
          "Superior thoracic artery",
          "Thoracoacromial artery",
          "Lateral thoracic artery",
          "Subscapular artery",
        ],
        correct: 3,
        explanation:
          "Third part gives subscapular and circumflex humeral arteries.",
      },
      {
        text: "The axillary vein lies:",
        options: [
          "Lateral to axillary artery",
          "Posterior to axillary artery",
          "Medial and anterior to axillary artery",
          "Between lateral and medial cords",
        ],
        correct: 2,
        explanation: "Vein is more superficial and medial.",
      },
      {
        text: "Injury to the long thoracic nerve in the axilla results in:",
        options: [
          "Loss of shoulder abduction beyond 15°",
          "Winged scapula",
          "Wrist drop",
          "Claw hand",
        ],
        correct: 1,
        explanation:
          "Long thoracic nerve injury → paralysis of serratus anterior.",
      },
      {
        text: "The lateral cord gives rise to all EXCEPT:",
        options: [
          "Musculocutaneous nerve",
          "Lateral root of median nerve",
          "Lateral pectoral nerve",
          "Ulnar nerve",
        ],
        correct: 3,
        explanation: "Ulnar nerve arises from medial cord.",
      },
      {
        text: "The posterior wall of the axilla is formed by:",
        options: [
          "Subscapularis, teres major, latissimus dorsi",
          "Teres minor and infraspinatus",
          "Serratus anterior and ribs",
          "Pectoralis major only",
        ],
        correct: 0,
        explanation: "These muscles form the posterior axillary fold.",
      },
      {
        text: "The intertubercular sulcus forms part of which boundary of the axilla?",
        options: ["Apex", "Base", "Lateral wall", "Medial wall"],
        correct: 2,
        explanation:
          "Lateral wall is narrow and formed by intertubercular sulcus of humerus.",
      },
      {
        text: "The base of the axilla is formed by:",
        options: [
          "Clavipectoral fascia",
          "Axillary fascia and skin",
          "Pectoralis major",
          "Serratus anterior",
        ],
        correct: 1,
        explanation: "Base = skin + axillary fascia.",
      },
      {
        text: "The thoracodorsal nerve accompanies which artery in the axilla?",
        options: [
          "Lateral thoracic artery",
          "Subscapular artery",
          "Thoracoacromial artery",
          "Superior thoracic artery",
        ],
        correct: 1,
        explanation:
          "Thoracodorsal nerve accompanies thoracodorsal branch of subscapular artery.",
      },
      {
        text: "The apical group of axillary lymph nodes drains into:",
        options: [
          "Parasternal nodes",
          "Subclavian trunk",
          "Brachial nodes",
          "Inguinal nodes",
        ],
        correct: 1,
        explanation: "Apical nodes → subclavian lymphatic trunk.",
      },
      {
        text: "A surgeon clamps the second part of the axillary artery. Which branch is preserved?",
        options: [
          "Thoracoacromial artery",
          "Lateral thoracic artery",
          "Superior thoracic artery",
          "Subscapular artery",
        ],
        correct: 2,
        explanation: "Superior thoracic arises from first part.",
      },
      {
        text: "Which nerve lies most posterior in the axilla?",
        options: [
          "Median nerve",
          "Ulnar nerve",
          "Radial nerve",
          "Musculocutaneous nerve",
        ],
        correct: 2,
        explanation:
          "Radial nerve is a terminal branch of posterior cord → posterior position.",
      },
      {
        text: "The axillary sheath encloses:",
        options: [
          "Axillary artery only",
          "Axillary vein only",
          "Axillary artery and cords of brachial plexus",
          "Entire contents of axilla",
        ],
        correct: 2,
        explanation: "Axillary sheath is extension of prevertebral fascia.",
      },
      {
        text: "In radical mastectomy, preservation of which nerve prevents inability to adduct the arm?",
        options: [
          "Long thoracic nerve",
          "Thoracodorsal nerve",
          "Axillary nerve",
          "Medial pectoral nerve",
        ],
        correct: 1,
        explanation: "Supplies latissimus dorsi → arm adduction.",
      },
      {
        text: "The median nerve lies lateral to the axillary artery in which part?",
        options: [
          "First part only",
          "Second part only",
          "Third part only",
          "None — it is formed distal to axilla",
        ],
        correct: 2,
        explanation:
          "Median nerve is formed anterior to third part of axillary artery by union of lateral and medial roots.",
      },
    ],
    Arm: [
      {
        text: "The radial nerve enters the posterior compartment of the arm through:",
        options: [
          "Quadrangular space",
          "Triangular space",
          "Triangular interval",
          "Supraclavicular fossa",
        ],
        correct: 2,
        explanation:
          "Radial nerve passes with profunda brachii artery through the triangular interval.",
      },
      {
        text: "The profunda brachii artery accompanies the radial nerve in:",
        options: [
          "Cubital fossa",
          "Radial groove",
          "Intertubercular sulcus",
          "Medial intermuscular septum",
        ],
        correct: 1,
        explanation:
          "The nerve and artery run together in the spiral (radial) groove of the humerus.",
      },
      {
        text: "A midshaft fracture of the humerus most commonly produces:",
        options: [
          "Loss of elbow flexion",
          "Wrist drop",
          "Loss of shoulder abduction",
          "Claw hand",
        ],
        correct: 1,
        explanation:
          "Radial nerve injury → paralysis of wrist extensors → wrist drop.",
      },
      {
        text: "The musculocutaneous nerve pierces which muscle?",
        options: [
          "Biceps brachii",
          "Coracobrachialis",
          "Brachialis",
          "Triceps brachii",
        ],
        correct: 1,
        explanation:
          "Musculocutaneous nerve pierces coracobrachialis before supplying anterior compartment.",
      },
      {
        text: "The median nerve in the arm:",
        options: [
          "Supplies brachialis",
          "Gives off branches in the arm",
          "Crosses the brachial artery from lateral to medial",
          "Lies posterior to brachial artery throughout",
        ],
        correct: 2,
        explanation:
          "It crosses anterior to the artery around mid-arm and gives no major motor branches in arm.",
      },
      {
        text: "The ulnar nerve enters the posterior compartment of the arm by piercing:",
        options: [
          "Lateral intermuscular septum",
          "Medial intermuscular septum",
          "Brachial fascia",
          "Clavipectoral fascia",
        ],
        correct: 1,
        explanation:
          "Ulnar nerve passes posterior to medial epicondyle after piercing septum.",
      },
      {
        text: "The brachial artery begins at the lower border of:",
        options: [
          "Pectoralis major",
          "Teres major",
          "Subscapularis",
          "Latissimus dorsi",
        ],
        correct: 1,
        explanation:
          "Continuation of axillary artery beyond inferior border of teres major.",
      },
      {
        text: "The brachial artery terminates at the level of:",
        options: [
          "Surgical neck of humerus",
          "Midshaft humerus",
          "Neck of radius",
          "Radial groove",
        ],
        correct: 2,
        explanation:
          "It divides into radial and ulnar arteries in the cubital fossa at level of neck of radius.",
      },
      {
        text: "Which muscle forms the floor of the cubital fossa proximally?",
        options: [
          "Brachialis",
          "Supinator",
          "Pronator teres",
          "Biceps brachii",
        ],
        correct: 0,
        explanation:
          "Floor is formed by brachialis (proximally) and supinator (distally).",
      },
      {
        text: "The biceps brachii inserts into:",
        options: [
          "Radial tuberosity and bicipital aponeurosis",
          "Ulnar tuberosity",
          "Olecranon",
          "Coronoid process",
        ],
        correct: 0,
        explanation:
          "Biceps brachii inserts into radial tuberosity; aponeurosis blends with forearm fascia.",
      },
      {
        text: "The strongest flexor of the elbow joint regardless of forearm position is:",
        options: [
          "Biceps brachii",
          "Brachioradialis",
          "Brachialis",
          "Pronator teres",
        ],
        correct: 2,
        explanation: "Brachialis muscle acts in all positions.",
      },
      {
        text: "Which head of triceps arises from below the radial groove?",
        options: ["Long head", "Medial head", "Lateral head", "Short head"],
        correct: 1,
        explanation: "Medial head originates inferior to radial groove.",
      },
      {
        text: "The long head of triceps originates from:",
        options: [
          "Infraglenoid tubercle",
          "Supraglenoid tubercle",
          "Coracoid process",
          "Surgical neck",
        ],
        correct: 0,
        explanation: "Triceps brachii long head crosses shoulder joint.",
      },
      {
        text: "Injury to the musculocutaneous nerve in the arm would MOST affect:",
        options: [
          "Wrist extension",
          "Forearm supination",
          "Finger flexion",
          "Shoulder abduction",
        ],
        correct: 1,
        explanation: "Biceps brachii is powerful supinator.",
      },
      {
        text: "The radial nerve pierces the lateral intermuscular septum to enter:",
        options: [
          "Posterior compartment",
          "Anterior compartment",
          "Axilla",
          "Cubital fossa directly",
        ],
        correct: 1,
        explanation:
          "After radial groove, nerve comes anteriorly before elbow.",
      },
      {
        text: "The basilic vein becomes the axillary vein at the lower border of:",
        options: [
          "Pectoralis major",
          "Teres major",
          "Latissimus dorsi",
          "Coracobrachialis",
        ],
        correct: 1,
        explanation: "Basilic vein joins brachial veins → forms axillary vein.",
      },
      {
        text: "Which structure lies most lateral in the cubital fossa?",
        options: [
          "Median nerve",
          "Brachial artery",
          "Biceps tendon",
          "Radial nerve",
        ],
        correct: 3,
        explanation:
          "From lateral to medial: Radial nerve → Biceps tendon → Brachial artery → Median nerve.",
      },
      {
        text: "A supracondylar fracture of the humerus most commonly injures:",
        options: [
          "Radial nerve",
          "Median nerve",
          "Ulnar nerve",
          "Axillary nerve",
        ],
        correct: 1,
        explanation:
          "Particularly anterior interosseous branch; brachial artery also at risk.",
      },
      {
        text: "The nutrient artery of the humerus is directed:",
        options: ["Proximally", "Distally", "Laterally", "Medially"],
        correct: 1,
        explanation:
          "Rule: 'To the elbow I go.' Upper limb nutrient canal points downward.",
      },
      {
        text: "Which muscle contributes to both flexion and adduction of the arm?",
        options: [
          "Biceps brachii (long head)",
          "Coracobrachialis",
          "Brachialis",
          "Triceps (long head)",
        ],
        correct: 1,
        explanation:
          "Coracobrachialis assists in flexion and adduction of shoulder.",
      },
    ],
    "Cubital Fossa": [
      {
        text: "The lateral boundary of the cubital fossa is formed by:",
        options: [
          "Pronator teres",
          "Brachialis",
          "Brachioradialis",
          "Supinator",
        ],
        correct: 2,
        explanation:
          "Lateral boundary → brachioradialis; medial boundary → pronator teres.",
      },
      {
        text: "The medial boundary of the cubital fossa is formed by:",
        options: [
          "Brachialis",
          "Pronator teres",
          "Supinator",
          "Flexor carpi radialis",
        ],
        correct: 1,
        explanation: "Pronator teres forms medial boundary.",
      },
      {
        text: "The floor of the cubital fossa is formed by:",
        options: [
          "Biceps brachii and brachialis",
          "Brachialis and supinator",
          "Supinator only",
          "Pronator teres and supinator",
        ],
        correct: 1,
        explanation: "Proximal floor → brachialis; distal floor → supinator.",
      },
      {
        text: "The roof of the cubital fossa includes all EXCEPT:",
        options: [
          "Skin",
          "Deep fascia",
          "Bicipital aponeurosis",
          "Radial collateral ligament",
        ],
        correct: 3,
        explanation:
          "Roof = skin, superficial fascia, deep fascia, and bicipital aponeurosis.",
      },
      {
        text: "From lateral to medial, the contents of the cubital fossa are arranged as:",
        options: [
          "Median nerve – Brachial artery – Biceps tendon – Radial nerve",
          "Radial nerve – Biceps tendon – Brachial artery – Median nerve",
          "Biceps tendon – Radial nerve – Median nerve – Brachial artery",
          "Radial nerve – Brachial artery – Biceps tendon – Median nerve",
        ],
        correct: 1,
        explanation:
          "Classic order: TAN (Tendon, Artery, Nerve) medial to radial nerve.",
      },
      {
        text: "The brachial artery divides into radial and ulnar arteries at the level of:",
        options: [
          "Medial epicondyle",
          "Lateral epicondyle",
          "Neck of radius",
          "Head of ulna",
        ],
        correct: 2,
        explanation:
          "Bifurcation occurs in the cubital fossa at level of radial neck.",
      },
      {
        text: "The structure most medial in the cubital fossa is:",
        options: [
          "Brachial artery",
          "Biceps tendon",
          "Median nerve",
          "Radial nerve",
        ],
        correct: 2,
        explanation: "Lies medial to brachial artery.",
      },
      {
        text: "The radial nerve in the cubital fossa lies:",
        options: [
          "Medial to biceps tendon",
          "Posterior to brachial artery",
          "Between brachialis and brachioradialis",
          "Within bicipital aponeurosis",
        ],
        correct: 2,
        explanation: "Radial nerve lies laterally under brachioradialis.",
      },
      {
        text: "Venepuncture in the cubital fossa is usually performed in the:",
        options: [
          "Basilic vein",
          "Cephalic vein",
          "Median cubital vein",
          "Radial vein",
        ],
        correct: 2,
        explanation:
          "Median cubital vein lies in superficial fascia over bicipital aponeurosis.",
      },
      {
        text: "The bicipital aponeurosis protects which structure during venepuncture?",
        options: [
          "Radial nerve",
          "Ulnar nerve",
          "Brachial artery",
          "Basilic vein",
        ],
        correct: 2,
        explanation:
          "Aponeurosis lies superficial to brachial artery and median nerve.",
      },
      {
        text: "Which nerve passes through the cubital fossa without branching in the arm?",
        options: [
          "Radial nerve",
          "Ulnar nerve",
          "Median nerve",
          "Musculocutaneous nerve",
        ],
        correct: 2,
        explanation:
          "Median nerve gives no branches in arm; enters forearm via cubital fossa.",
      },
      {
        text: "The tendon forming the central content of the cubital fossa belongs to:",
        options: [
          "Brachialis",
          "Biceps brachii",
          "Triceps brachii",
          "Pronator teres",
        ],
        correct: 1,
        explanation: "Biceps tendon inserts into radial tuberosity.",
      },
      {
        text: "A supracondylar fracture of the humerus may injure which artery in the cubital fossa?",
        options: [
          "Radial artery",
          "Ulnar artery",
          "Profunda brachii",
          "Brachial artery",
        ],
        correct: 3,
        explanation: "Lies anterior to distal humerus → vulnerable.",
      },
      {
        text: "The radial nerve divides into superficial and deep branches at the level of:",
        options: ["Radial groove", "Mid-arm", "Cubital fossa", "Wrist"],
        correct: 2,
        explanation:
          "Deep branch pierces supinator; superficial continues under brachioradialis.",
      },
      {
        text: "Which structure lies deepest in the cubital fossa?",
        options: [
          "Median cubital vein",
          "Bicipital aponeurosis",
          "Brachialis muscle",
          "Biceps tendon",
        ],
        correct: 2,
        explanation: "It forms the proximal floor of the fossa.",
      },
      {
        text: "The apex of the cubital fossa is directed:",
        options: ["Superiorly", "Medially", "Inferiorly", "Laterally"],
        correct: 2,
        explanation: "It is a triangular space with apex pointing downward.",
      },
      {
        text: "The ulnar nerve in relation to the cubital fossa:",
        options: [
          "Lies within it",
          "Passes anterior to medial epicondyle",
          "Lies posterior to medial epicondyle",
          "Crosses brachial artery",
        ],
        correct: 2,
        explanation: "Ulnar nerve does NOT pass through cubital fossa.",
      },
      {
        text: "The deep branch of the radial nerve becomes:",
        options: [
          "Posterior interosseous nerve",
          "Anterior interosseous nerve",
          "Superficial radial nerve",
          "Musculocutaneous nerve",
        ],
        correct: 0,
        explanation: "After piercing supinator.",
      },
      {
        text: "Injury to the median nerve at the cubital fossa would MOST affect:",
        options: [
          "Wrist extension",
          "Forearm pronation",
          "Finger abduction",
          "Elbow extension",
        ],
        correct: 1,
        explanation:
          "Pronator teres and pronator quadratus supplied by median nerve.",
      },
      {
        text: "The cubital fossa communicates proximally with:",
        options: [
          "Axilla",
          "Posterior compartment of arm",
          "Anterior compartment of arm",
          "Carpal tunnel",
        ],
        correct: 2,
        explanation:
          "It is a continuation of anterior arm region into forearm.",
      },
    ],
    Forearm: [
      {
        text: "Which muscle is present in the superficial flexor compartment but is NOT attached to the medial epicondyle?",
        options: [
          "Pronator teres",
          "Flexor carpi radialis",
          "Flexor digitorum superficialis",
          "Flexor carpi ulnaris",
        ],
        correct: 2,
        explanation:
          "Flexor digitorum superficialis has humero-ulnar and radial heads; not solely from medial epicondyle.",
      },
      {
        text: "The anterior interosseous nerve is a branch of:",
        options: [
          "Radial nerve",
          "Ulnar nerve",
          "Median nerve",
          "Musculocutaneous nerve",
        ],
        correct: 2,
        explanation:
          "Anterior interosseous nerve supplies deep flexors (FPL, lateral FDP, pronator quadratus).",
      },
      {
        text: "A patient cannot make an 'OK' sign due to weakness of flexor pollicis longus and lateral half of FDP. The lesion is most likely of:",
        options: [
          "Ulnar nerve at wrist",
          "Median nerve at elbow",
          "Anterior interosseous nerve",
          "Radial nerve in forearm",
        ],
        correct: 2,
        explanation: "Pure motor branch → no sensory loss.",
      },
      {
        text: "The deep branch of the radial nerve passes through which muscle?",
        options: [
          "Supinator",
          "Brachioradialis",
          "Pronator teres",
          "Extensor digitorum",
        ],
        correct: 0,
        explanation:
          "Supinator muscle surrounds the deep branch, which becomes posterior interosseous nerve.",
      },
      {
        text: "Which muscle is supplied by the ulnar nerve in the forearm?",
        options: [
          "Flexor digitorum superficialis",
          "Flexor carpi radialis",
          "Flexor digitorum profundus (medial half)",
          "Pronator quadratus",
        ],
        correct: 2,
        explanation: "Ulnar nerve supplies FCU and medial FDP.",
      },
      {
        text: "The radial artery in the proximal forearm lies deep to:",
        options: [
          "Pronator teres",
          "Brachioradialis",
          "Flexor carpi radialis",
          "Supinator",
        ],
        correct: 1,
        explanation: "Radial artery runs under brachioradialis proximally.",
      },
      {
        text: "The strongest pronator of the forearm is:",
        options: [
          "Pronator teres",
          "Pronator quadratus",
          "Brachioradialis",
          "Flexor carpi radialis",
        ],
        correct: 1,
        explanation: "Pronator quadratus is primary pronator in all positions.",
      },
      {
        text: "Which structure passes between the two heads of pronator teres?",
        options: [
          "Ulnar nerve",
          "Radial nerve",
          "Median nerve",
          "Radial artery",
        ],
        correct: 2,
        explanation: "Common site of compression → pronator syndrome.",
      },
      {
        text: "The extensor digitorum is innervated by:",
        options: [
          "Radial nerve (main trunk)",
          "Deep branch of radial nerve",
          "Posterior interosseous nerve",
          "Ulnar nerve",
        ],
        correct: 2,
        explanation: "Terminal continuation of deep radial branch.",
      },
      {
        text: "The interosseous membrane primarily functions to:",
        options: [
          "Prevent supination",
          "Transmit forces from radius to ulna",
          "Limit elbow extension",
          "Protect median nerve",
        ],
        correct: 1,
        explanation:
          "Weight passes from hand → radius → membrane → ulna → humerus.",
      },
      {
        text: "Which muscle forms the lateral border of the anatomical snuffbox?",
        options: [
          "Extensor pollicis longus",
          "Extensor pollicis brevis",
          "Abductor pollicis longus",
          "B and C",
        ],
        correct: 3,
        explanation: "Lateral boundary = APL + EPB; medial boundary = EPL.",
      },
      {
        text: "The ulnar artery enters the forearm by passing:",
        options: [
          "Between heads of pronator teres",
          "Deep to supinator",
          "Between heads of flexor carpi ulnaris",
          "Through interosseous membrane",
        ],
        correct: 2,
        explanation: "Ulnar artery travels deep in forearm.",
      },
      {
        text: "Injury to the radial nerve in the proximal forearm would spare:",
        options: [
          "Wrist extension",
          "Finger extension",
          "Supination",
          "Sensation over posterior forearm",
        ],
        correct: 3,
        explanation: "Sensory branches arise higher in arm.",
      },
      {
        text: "Which muscle has dual innervation from both median and ulnar nerves?",
        options: [
          "Flexor digitorum superficialis",
          "Flexor digitorum profundus",
          "Pronator teres",
          "Flexor carpi ulnaris",
        ],
        correct: 1,
        explanation: "Lateral half → median (AIN); medial half → ulnar.",
      },
      {
        text: "The tendon of flexor carpi radialis passes:",
        options: [
          "Through carpal tunnel",
          "Superficial to flexor retinaculum",
          "In its own lateral compartment",
          "With ulnar nerve",
        ],
        correct: 2,
        explanation: "Lies in separate tunnel within flexor retinaculum.",
      },
      {
        text: "The posterior interosseous artery is a branch of:",
        options: [
          "Radial artery",
          "Ulnar artery",
          "Anterior interosseous artery",
          "Brachial artery",
        ],
        correct: 1,
        explanation: "Via common interosseous branch.",
      },
      {
        text: "Loss of supination against resistance suggests injury to:",
        options: [
          "Musculocutaneous nerve",
          "Radial nerve",
          "Median nerve",
          "Ulnar nerve",
        ],
        correct: 0,
        explanation:
          "Biceps brachii (powerful supinator) supplied by musculocutaneous nerve.",
      },
      {
        text: "Which muscle inserts into the base of the second metacarpal?",
        options: [
          "Flexor carpi ulnaris",
          "Flexor carpi radialis",
          "Extensor carpi ulnaris",
          "Extensor digitorum",
        ],
        correct: 1,
        explanation: "Inserts into base of 2nd (sometimes 3rd) metacarpal.",
      },
      {
        text: "The radial styloid process is located:",
        options: [
          "Medial and distal",
          "Lateral and distal",
          "Medial and proximal",
          "Posterior only",
        ],
        correct: 1,
        explanation: "Radius is lateral bone in anatomical position.",
      },
      {
        text: "Compartment syndrome of the forearm most threatens which nerve in the deep anterior compartment?",
        options: [
          "Radial nerve",
          "Ulnar nerve",
          "Anterior interosseous nerve",
          "Superficial radial nerve",
        ],
        correct: 2,
        explanation: "Lies deep along interosseous membrane.",
      },
    ],
    Hand: [
      {
        text: "The carpal tunnel contains all EXCEPT:",
        options: [
          "Tendon of flexor pollicis longus",
          "Tendons of flexor digitorum superficialis",
          "Median nerve",
          "Tendon of flexor carpi radialis",
        ],
        correct: 3,
        explanation:
          "Carpal tunnel contains FDS (4), FDP (4), FPL, and median nerve. FCR lies in a separate compartment.",
      },
      {
        text: "The ulnar nerve enters the hand through:",
        options: [
          "Carpal tunnel",
          "Anatomical snuffbox",
          "Guyon's canal",
          "Flexor retinaculum",
        ],
        correct: 2,
        explanation:
          "Ulnar nerve passes superficial to flexor retinaculum in Guyon's canal.",
      },
      {
        text: "Which muscle is responsible for opposition of the thumb?",
        options: [
          "Abductor pollicis longus",
          "Opponens pollicis",
          "Flexor pollicis longus",
          "Adductor pollicis",
        ],
        correct: 1,
        explanation:
          "Opponens pollicis produces true opposition (medial rotation + flexion).",
      },
      {
        text: "Froment's sign indicates paralysis of:",
        options: [
          "First dorsal interosseous",
          "Opponens pollicis",
          "Adductor pollicis",
          "Flexor pollicis longus",
        ],
        correct: 2,
        explanation:
          "Adductor pollicis paralysis → patient flexes thumb (FPL compensation).",
      },
      {
        text: "The deep palmar arch is primarily formed by:",
        options: [
          "Ulnar artery",
          "Radial artery",
          "Superficial palmar branch of radial artery",
          "Common interosseous artery",
        ],
        correct: 1,
        explanation:
          "Radial artery forms deep arch, completed by deep branch of ulnar artery.",
      },
      {
        text: "Which nerve supplies the lumbricals to digits 4 and 5?",
        options: [
          "Median nerve",
          "Ulnar nerve",
          "Radial nerve",
          "Anterior interosseous nerve",
        ],
        correct: 1,
        explanation: "Medial two lumbricals supplied by ulnar nerve.",
      },
      {
        text: "The anatomical snuffbox contains:",
        options: [
          "Ulnar artery",
          "Radial artery",
          "Median nerve",
          "Ulnar nerve",
        ],
        correct: 1,
        explanation:
          "Anatomical snuffbox contains radial artery over scaphoid.",
      },
      {
        text: "A lesion of the median nerve at the wrist causes:",
        options: [
          "Ape thumb deformity",
          "Clawing of all fingers",
          "Wrist drop",
          "Loss of forearm pronation",
        ],
        correct: 0,
        explanation: "Thenar muscle paralysis → loss of opposition.",
      },
      {
        text: "The superficial palmar arch is primarily formed by:",
        options: [
          "Radial artery",
          "Ulnar artery",
          "Deep palmar branch",
          "Anterior interosseous artery",
        ],
        correct: 1,
        explanation:
          "Ulnar artery forms superficial arch, completed by superficial branch of radial artery.",
      },
      {
        text: "The tendon sheath of the little finger is continuous proximally with:",
        options: [
          "Radial bursa",
          "Ulnar bursa",
          "Carpal tunnel only",
          "Thenar space",
        ],
        correct: 1,
        explanation: "Common flexor sheath continues into little finger.",
      },
      {
        text: "Which muscle is supplied by the radial nerve in the hand?",
        options: ["Interossei", "Lumbricals", "None", "Thenar muscles"],
        correct: 2,
        explanation: "Radial nerve supplies no intrinsic hand muscles.",
      },
      {
        text: "Injury to the deep branch of the ulnar nerve would most affect:",
        options: [
          "Sensation over little finger",
          "Opposition of thumb",
          "Finger abduction",
          "Flexion of DIP joints",
        ],
        correct: 2,
        explanation: "Interossei (PAD/DAB) supplied by deep ulnar branch.",
      },
      {
        text: "The scaphoid articulates proximally with:",
        options: ["Ulna", "Radius", "Capitate", "Hamate"],
        correct: 1,
        explanation: "Scaphoid forms part of radiocarpal joint.",
      },
      {
        text: "Which muscle inserts into the extensor expansion?",
        options: [
          "Flexor digitorum profundus",
          "Lumbricals",
          "Flexor carpi radialis",
          "Palmaris longus",
        ],
        correct: 1,
        explanation: "Lumbricals flex MCP, extend IP via extensor expansion.",
      },
      {
        text: "The space between the first and second metacarpals containing the radial artery is:",
        options: [
          "Thenar space",
          "Hypothenar space",
          "First dorsal interosseous space",
          "Carpal tunnel",
        ],
        correct: 2,
        explanation:
          "Radial artery passes between heads of first dorsal interosseous.",
      },
      {
        text: "A lesion of the ulnar nerve at the wrist produces:",
        options: [
          "More severe clawing than at elbow",
          "Less clawing than at elbow",
          "No clawing",
          "Wrist drop",
        ],
        correct: 0,
        explanation:
          "'Ulnar paradox' — proximal lesion reduces FDP function, decreasing claw.",
      },
      {
        text: "The strongest flexor of the DIP joints is:",
        options: [
          "Flexor digitorum superficialis",
          "Lumbricals",
          "Flexor digitorum profundus",
          "Interossei",
        ],
        correct: 2,
        explanation: "FDP flexes DIP joints.",
      },
      {
        text: "Which carpal bone forms the floor of the anatomical snuffbox?",
        options: ["Lunate", "Scaphoid", "Triquetrum", "Pisiform"],
        correct: 1,
        explanation: "Scaphoid fracture presents with snuffbox tenderness.",
      },
      {
        text: "The deep branch of the ulnar nerve passes between the two heads of:",
        options: [
          "Flexor carpi ulnaris",
          "Adductor pollicis",
          "First dorsal interosseous",
          "Opponens digiti minimi",
        ],
        correct: 1,
        explanation: "Deep branch runs across palm with deep palmar arch.",
      },
      {
        text: "The central compartment of the palm contains:",
        options: [
          "Thenar muscles",
          "Hypothenar muscles",
          "Long flexor tendons and lumbricals",
          "Radial artery only",
        ],
        correct: 2,
        explanation:
          "Central compartment houses FDS, FDP tendons, lumbricals, superficial arch.",
      },
    ],
    // You will add the next module here...
  },

  // --- 2. LOWER LIMB ---
  "lower-limb": {
    "Bones of Lower Limb": [
      {
        text: "Which part of the femur is the primary attachment site for the iliofemoral ligament?",
        options: [
          "Greater trochanter",
          "Lesser trochanter",
          "Intertrochanteric line",
          "Linea aspera",
        ],
        correct: 2,
        explanation:
          "The iliofemoral ligament attaches to the anterior aspect of the intertrochanteric line, not the trochanters or linea aspera.",
      },
      {
        text: "The nutrient foramen of the femur usually points:",
        options: [
          "Towards the knee",
          "Away from the knee",
          "Towards the head of femur",
          "Away from the head of femur",
        ],
        correct: 1,
        explanation:
          "In long bones, the nutrient foramen is directed away from the growing end; in femur, the distal end grows faster, so it points away from the knee.",
      },
      {
        text: "Which tarsal bone articulates with all other tarsal bones except the talus?",
        options: ["Navicular", "Cuboid", "Calcaneus", "Cuneiform medial"],
        correct: 0,
        explanation:
          "Navicular articulates with the talus proximally and with all three cuneiforms distally, but not the cuboid directly.",
      },
      {
        text: "The most frequently fractured part of the femur in adults is:",
        options: [
          "Neck of femur",
          "Shaft of femur",
          "Greater trochanter",
          "Condyles of femur",
        ],
        correct: 0,
        explanation:
          "The neck is narrow and subjected to high stress; fractures are common especially in osteoporotic bones.",
      },
      {
        text: "Which structure separates the anterior and posterior compartments of the thigh on the femur?",
        options: [
          "Linea aspera",
          "Intertrochanteric crest",
          "Adductor tubercle",
          "Gluteal tuberosity",
        ],
        correct: 0,
        explanation:
          "The linea aspera serves as an attachment for the intermuscular septa, dividing anterior and posterior thigh compartments.",
      },
      {
        text: "Which of the following is NOT a characteristic of the tibial plateau?",
        options: [
          "Medial condyle is larger than lateral",
          "Lateral condyle has a facet for the fibula",
          "Medial condyle has a facet for the meniscus",
          "Separated by intercondylar eminence",
        ],
        correct: 1,
        explanation:
          "The head of the fibula articulates with the lateral condyle of the tibia, not the plateau facet.",
      },
      {
        text: "The patella is classified as which type of bone?",
        options: ["Long bone", "Sesamoid bone", "Short bone", "Irregular bone"],
        correct: 1,
        explanation:
          "The patella is a sesamoid bone within the quadriceps tendon.",
      },
      {
        text: "Which feature distinguishes the fibula from the tibia?",
        options: [
          "Weight-bearing structure",
          "Lateral malleolus",
          "Interosseous border",
          "Medial condyle",
        ],
        correct: 3,
        explanation:
          "Fibula has lateral malleolus and interosseous border, but no condyles; tibia has medial and lateral condyles.",
      },
      {
        text: "The posterior surface of the calcaneus shows an insertion for:",
        options: [
          "Plantaris",
          "Achilles tendon",
          "Tibialis posterior",
          "Peroneus brevis",
        ],
        correct: 1,
        explanation:
          "The posterior calcaneus (tuber calcanei) is the main insertion of the Achilles tendon.",
      },
      {
        text: "Which part of the femur serves as the attachment for adductor magnus?",
        options: [
          "Lesser trochanter",
          "Gluteal tuberosity",
          "Linea aspera",
          "Intertrochanteric line",
        ],
        correct: 2,
        explanation:
          "The adductor magnus inserts along the linea aspera and adductor tubercle distally.",
      },
      {
        text: "Which tarsal bone is the keystone of the medial longitudinal arch?",
        options: ["Talus", "Calcaneus", "Navicular", "Medial cuneiform"],
        correct: 2,
        explanation:
          "The navicular serves as the main central bone transmitting forces along the medial longitudinal arch.",
      },
      {
        text: "The apex of the patella gives attachment to:",
        options: [
          "Quadriceps tendon",
          "Patellar ligament",
          "Hamstrings",
          "Iliotibial tract",
        ],
        correct: 1,
        explanation:
          "The apex (inferior tip) of the patella attaches to the patellar ligament connecting to tibial tuberosity.",
      },
      {
        text: "The sustentaculum tali of the calcaneus supports which tendon?",
        options: [
          "Tibialis anterior",
          "Flexor hallucis longus",
          "Tibialis posterior",
          "Peroneus longus",
        ],
        correct: 1,
        explanation:
          "The tendon of flexor hallucis longus passes under the sustentaculum tali.",
      },
      {
        text: "Which bone of the lower limb is most prone to avulsion fractures?",
        options: ["Tibia", "Talus", "Ischial tuberosity", "Calcaneus"],
        correct: 2,
        explanation:
          "Strong hamstring pull can avulse the ischial tuberosity, common in athletes.",
      },
      {
        text: "The lateral malleolus is located at the distal end of the:",
        options: ["Tibia", "Fibula", "Femur", "Talus"],
        correct: 1,
        explanation:
          "The lateral malleolus is formed by the distal end of the fibula.",
      },
      {
        text: "Which feature of the femur is palpable through the skin?",
        options: [
          "Linea aspera",
          "Greater trochanter",
          "Adductor tubercle",
          "Intertrochanteric crest",
        ],
        correct: 1,
        explanation:
          "The greater trochanter lies laterally and can be palpated at the hip.",
      },
      {
        text: "The anterior border of the tibia is commonly called:",
        options: [
          "Soleal line",
          "Tibial tuberosity",
          "Shin",
          "Medial malleolus",
        ],
        correct: 2,
        explanation:
          "The sharp anterior border of tibia forms the 'shin' under the skin.",
      },
      {
        text: "Which bone articulates with the 1st metatarsal?",
        options: [
          "Medial cuneiform",
          "Intermediate cuneiform",
          "Lateral cuneiform",
          "Cuboid",
        ],
        correct: 0,
        explanation:
          "The 1st metatarsal articulates with the medial cuneiform only.",
      },
      {
        text: "The apex of the fibula gives attachment to which ligament?",
        options: [
          "Lateral collateral ligament of knee",
          "Medial collateral ligament of knee",
          "Patellar ligament",
          "Anterior cruciate ligament",
        ],
        correct: 0,
        explanation:
          "The lateral collateral ligament attaches to the fibular head (apex).",
      },
      {
        text: "Which structure is absent in the talus?",
        options: ["Head", "Neck", "Body", "Muscle attachment sites"],
        correct: 3,
        explanation:
          "Talus has no muscular attachments; it only articulates with tibia, fibula, calcaneus, and navicular.",
      },
    ],
    "Anterior & Medial Thigh": [
      {
        text: "Which structure forms the lateral boundary of the femoral triangle?",
        options: [
          "Sartorius",
          "Adductor longus",
          "Iliopsoas",
          "Rectus femoris",
        ],
        correct: 0,
        explanation:
          "The femoral triangle is bounded laterally by sartorius, medially by adductor longus, and superiorly by the inguinal ligament. Iliopsoas forms the floor laterally, rectus femoris is not a boundary.",
      },
      {
        text: "Which of the following muscles is innervated by the obturator nerve and contributes to hip flexion?",
        options: ["Pectineus", "Adductor longus", "Gracilis", "Sartorius"],
        correct: 0,
        explanation:
          "Pectineus has dual innervation (femoral and sometimes obturator nerve) and can flex the hip; other adductors mainly act on adduction.",
      },
      {
        text: "Which of these structures passes through the adductor canal but does NOT exit via the adductor hiatus?",
        options: [
          "Femoral artery",
          "Femoral vein",
          "Saphenous nerve",
          "Profunda femoris artery",
        ],
        correct: 2,
        explanation:
          "The saphenous nerve passes through the adductor canal but continues medially in the thigh and does not go through the adductor hiatus into the popliteal fossa.",
      },
      {
        text: "The terminal branch of the obturator nerve supplying the skin of the medial thigh passes through which structure?",
        options: [
          "Adductor canal",
          "Obturator foramen",
          "Femoral triangle",
          "Inguinal ligament",
        ],
        correct: 1,
        explanation:
          "The obturator nerve passes through the obturator foramen and divides into anterior and posterior branches; the anterior branch supplies skin over medial thigh.",
      },
      {
        text: "Which muscle has a tendon that crosses the medial side of the knee and inserts on the tibia?",
        options: ["Sartorius", "Gracilis", "Semitendinosus", "Adductor magnus"],
        correct: 1,
        explanation:
          "Gracilis is a medial thigh muscle inserting on the superior medial tibia (part of pes anserinus).",
      },
      {
        text: "Which of the following muscles is NOT considered a part of the adductor group?",
        options: ["Adductor brevis", "Pectineus", "Gracilis", "Sartorius"],
        correct: 3,
        explanation:
          "Sartorius is an anterior thigh muscle; pectineus, gracilis, adductor longus/brevis/magnus are adductors.",
      },
      {
        text: "Which artery is the main supply to the medial compartment of the thigh?",
        options: [
          "Femoral artery",
          "Obturator artery",
          "Profunda femoris artery",
          "Popliteal artery",
        ],
        correct: 1,
        explanation:
          "The obturator artery supplies the medial compartment; femoral artery supplies anterior compartment, profunda femoris supplies most thigh muscles.",
      },
      {
        text: "The femoral sheath encloses all of the following EXCEPT:",
        options: [
          "Femoral artery",
          "Femoral vein",
          "Femoral nerve",
          "Lymphatic vessels",
        ],
        correct: 2,
        explanation:
          "Femoral nerve lies outside the femoral sheath, lateral to the artery.",
      },
      {
        text: "Which of the following is the floor of the femoral triangle?",
        options: [
          "Pectineus and iliopsoas",
          "Sartorius and adductor longus",
          "Rectus femoris and vastus medialis",
          "Gracilis and adductor brevis",
        ],
        correct: 0,
        explanation:
          "The femoral triangle floor is formed by iliopsoas laterally and pectineus medially.",
      },
      {
        text: "Which adductor muscle has a hamstring part that is innervated by the tibial component of the sciatic nerve?",
        options: [
          "Adductor longus",
          "Adductor brevis",
          "Adductor magnus",
          "Gracilis",
        ],
        correct: 2,
        explanation:
          "Adductor magnus has adductor and hamstring parts; the hamstring part is innervated by tibial nerve.",
      },
      {
        text: "The anterior branch of the obturator nerve passes anterior to which muscle?",
        options: [
          "Adductor brevis",
          "Adductor longus",
          "Adductor magnus",
          "Gracilis",
        ],
        correct: 0,
        explanation:
          "Anterior branch passes in front of adductor brevis; posterior branch passes behind.",
      },
      {
        text: "Which muscle is primarily responsible for medial rotation of the thigh at the hip?",
        options: [
          "Adductor longus",
          "Sartorius",
          "Gracilis",
          "Adductor magnus (adductor part)",
        ],
        correct: 3,
        explanation:
          "The adductor part can medially rotate thigh, while gracilis and sartorius assist weakly.",
      },
      {
        text: "The saphenous nerve provides cutaneous innervation to which area?",
        options: [
          "Anterolateral thigh",
          "Medial leg and foot",
          "Lateral thigh",
          "Posterior thigh",
        ],
        correct: 1,
        explanation:
          "Saphenous nerve is a branch of femoral nerve that supplies skin of medial leg and medial foot.",
      },
      {
        text: "Which of these structures does NOT pass deep to the inguinal ligament?",
        options: [
          "Femoral artery",
          "Femoral vein",
          "Iliopsoas tendon",
          "Saphenous nerve",
        ],
        correct: 3,
        explanation:
          "Saphenous nerve branches off femoral nerve distal to inguinal ligament and does not pass under it.",
      },
      {
        text: "The adductor canal extends from the apex of the femoral triangle to:",
        options: [
          "Popliteal fossa",
          "Adductor hiatus",
          "Medial epicondyle of femur",
          "Greater trochanter",
        ],
        correct: 1,
        explanation:
          "The canal ends at the adductor hiatus, where femoral vessels enter popliteal fossa.",
      },
      {
        text: "Which medial thigh muscle crosses two joints?",
        options: [
          "Adductor longus",
          "Adductor magnus",
          "Gracilis",
          "Pectineus",
        ],
        correct: 2,
        explanation: "Gracilis crosses hip and knee; others act mainly at hip.",
      },
      {
        text: "Which of the following statements about the femoral artery in the femoral triangle is TRUE?",
        options: [
          "Lies medial to femoral vein",
          "Lies lateral to femoral nerve",
          "Lies lateral to femoral vein",
          "Lies posterior to femoral vein",
        ],
        correct: 2,
        explanation:
          "NAVL order: Nerve (lateral), Artery, Vein, Lymph (medial).",
      },
      {
        text: "The terminal branch of the medial circumflex femoral artery contributes mainly to the supply of:",
        options: [
          "Anterior thigh muscles",
          "Hip joint and adductor muscles",
          "Knee joint",
          "Popliteal fossa",
        ],
        correct: 1,
        explanation:
          "Medial circumflex femoral artery mainly supplies adductors and femoral head/neck.",
      },
      {
        text: "Which structure forms the medial border of the adductor canal?",
        options: [
          "Sartorius",
          "Vastus medialis",
          "Adductor longus and magnus",
          "Gracilis",
        ],
        correct: 2,
        explanation:
          "Medial wall is formed by adductor longus and magnus; anterior roof is sartorius; lateral wall is vastus medialis.",
      },
      {
        text: "The femoral ring is clinically important because:",
        options: [
          "Site of femoral hernia",
          "Site of inguinal hernia",
          "Passage for obturator nerve",
          "Passage for saphenous nerve",
        ],
        correct: 0,
        explanation:
          "The femoral ring is the entrance to the femoral canal; femoral hernias occur here, below the inguinal ligament.",
      },
    ],
    "Gluteal & Posterior Thigh": [
      {
        text: "Which structure passes through both the greater sciatic foramen and the lesser sciatic foramen?",
        options: [
          "Superior gluteal artery",
          "Piriformis muscle",
          "Tendon of obturator internus",
          "Inferior gluteal nerve",
        ],
        correct: 2,
        explanation:
          "The obturator internus tendon exits the pelvis via the lesser sciatic foramen after lying within the lesser pelvis; it does not pass through the greater sciatic foramen, but the nerve to obturator internus does. This is tricky because several structures are closely related to the sciatic foramina.",
      },
      {
        text: "Which nerve is most commonly compressed in deep gluteal syndrome?",
        options: [
          "Sciatic nerve",
          "Inferior gluteal nerve",
          "Superior gluteal nerve",
          "Posterior femoral cutaneous nerve",
        ],
        correct: 0,
        explanation:
          "Compression occurs usually by the piriformis muscle, leading to piriformis syndrome—a classic example of a posterior thigh/gluteal entrapment neuropathy.",
      },
      {
        text: "Which of the following muscles is NOT part of the hamstring group?",
        options: [
          "Semimembranosus",
          "Biceps femoris short head",
          "Semitendinosus",
          "Biceps femoris long head",
        ],
        correct: 1,
        explanation:
          "Only the long head of biceps femoris arises from the ischial tuberosity; the short head originates from the femoral shaft and is not a true hamstring.",
      },
      {
        text: "The sciatic nerve usually exits the pelvis inferior to which muscle?",
        options: [
          "Gluteus maximus",
          "Piriformis",
          "Quadratus femoris",
          "Obturator internus",
        ],
        correct: 1,
        explanation:
          "The sciatic nerve exits inferior to the piriformis in most individuals (85%), though anatomical variations exist.",
      },
      {
        text: "Which gluteal muscle has a primary role in stabilizing the pelvis during walking?",
        options: [
          "Gluteus maximus",
          "Gluteus medius",
          "Gluteus minimus",
          "Piriformis",
        ],
        correct: 1,
        explanation:
          "Gluteus medius prevents pelvic drop on the contralateral side during the stance phase of gait (Trendelenburg sign if weak).",
      },
      {
        text: "The short lateral rotators of the hip are mainly innervated by which nerve?",
        options: [
          "Sciatic nerve",
          "Femoral nerve",
          "Sacral plexus branches",
          "Obturator nerve",
        ],
        correct: 2,
        explanation:
          "Muscles like piriformis, obturator internus, and gemelli are innervated by small branches from the sacral plexus (nerve to piriformis, nerve to obturator internus).",
      },
      {
        text: "Which gluteal artery passes superior to the piriformis muscle?",
        options: [
          "Inferior gluteal artery",
          "Superior gluteal artery",
          "Medial circumflex femoral artery",
          "Lateral circumflex femoral artery",
        ],
        correct: 1,
        explanation:
          "Superior gluteal artery passes above piriformis; inferior gluteal artery passes below.",
      },
      {
        text: "Which of the following is the main extensor of the hip during running?",
        options: [
          "Gluteus medius",
          "Gluteus maximus",
          "Semimembranosus",
          "Semitendinosus",
        ],
        correct: 1,
        explanation:
          "Gluteus maximus is most active in forceful hip extension (e.g., climbing stairs, running), whereas hamstrings assist less during powerful extension.",
      },
      {
        text: "Injury to the inferior gluteal nerve would most affect which action?",
        options: [
          "Hip abduction",
          "Hip extension",
          "Hip internal rotation",
          "Knee flexion",
        ],
        correct: 1,
        explanation:
          "The inferior gluteal nerve innervates gluteus maximus, primary hip extensor.",
      },
      {
        text: "The tendon of which hamstring muscle is located most medially at the knee?",
        options: [
          "Semitendinosus",
          "Biceps femoris long head",
          "Semimembranosus",
          "Adductor magnus (hamstring part)",
        ],
        correct: 2,
        explanation:
          "Semimembranosus inserts on the medial tibial condyle, deeper and more medial than semitendinosus.",
      },
      {
        text: "Which gluteal muscle is the smallest and lies deep to gluteus medius?",
        options: [
          "Gluteus minimus",
          "Piriformis",
          "Quadratus femoris",
          "Tensor fascia lata",
        ],
        correct: 0,
        explanation:
          "Gluteus minimus lies directly under gluteus medius and shares similar function in hip abduction and internal rotation.",
      },
      {
        text: "Which structure separates the gluteus medius and minimus muscles?",
        options: [
          "Gluteal fascia",
          "Superior gluteal vessels",
          "Iliotibial tract",
          "Tensor fascia lata",
        ],
        correct: 1,
        explanation:
          "The superior gluteal artery, vein, and nerve pass between gluteus medius and minimus to supply them.",
      },
      {
        text: "Which hamstring muscle does NOT cross the hip joint?",
        options: [
          "Semimembranosus",
          "Biceps femoris short head",
          "Semitendinosus",
          "Biceps femoris long head",
        ],
        correct: 1,
        explanation:
          "Short head originates from femoral shaft and only acts at the knee.",
      },
      {
        text: "The sciatic nerve divides into tibial and common peroneal components usually at:",
        options: [
          "Posterior thigh mid-level",
          "Inferior gluteal region",
          "Popliteal fossa",
          "Greater trochanter level",
        ],
        correct: 0,
        explanation:
          "Division often occurs near mid-posterior thigh, sometimes within the pelvis; critical for nerve block considerations.",
      },
      {
        text: "Which of the following muscles laterally rotates the thigh when hip is extended and abducts when hip is flexed?",
        options: [
          "Gluteus maximus",
          "Piriformis",
          "Quadratus femoris",
          "Obturator internus",
        ],
        correct: 1,
        explanation:
          "Piriformis action varies with hip position: abducts when hip is flexed, laterally rotates when extended.",
      },
      {
        text: "Which bursa lies between gluteus maximus and greater trochanter?",
        options: [
          "Ischial bursa",
          "Trochanteric bursa",
          "Gluteofemoral bursa",
          "Sciatic bursa",
        ],
        correct: 1,
        explanation:
          "Trochanteric bursitis occurs due to friction between gluteus maximus tendon and greater trochanter.",
      },
      {
        text: "Which hamstring muscle has a dual insertion to both the tibia and fascia of the leg?",
        options: [
          "Semitendinosus",
          "Biceps femoris long head",
          "Semimembranosus",
          "Biceps femoris short head",
        ],
        correct: 0,
        explanation:
          "Semitendinosus inserts on pes anserinus and contributes fibers to fascia covering medial leg.",
      },
      {
        text: "Which of the following structures exits the pelvis via the greater sciatic foramen ABOVE the piriformis?",
        options: [
          "Sciatic nerve",
          "Superior gluteal vessels",
          "Pudendal nerve",
          "Inferior gluteal nerve",
        ],
        correct: 1,
        explanation:
          "Superior gluteal nerve and vessels pass above piriformis; most others exit below.",
      },
      {
        text: "Which gluteal muscle inserts into the iliotibial tract rather than femur?",
        options: [
          "Gluteus medius",
          "Gluteus maximus",
          "Gluteus minimus",
          "Piriformis",
        ],
        correct: 1,
        explanation:
          "Upper fibers of gluteus maximus insert on iliotibial tract; lower fibers on gluteal tuberosity.",
      },
      {
        text: "The posterior femoral cutaneous nerve provides sensory innervation to:",
        options: [
          "Posterior thigh only",
          "Posterior thigh and popliteal fossa",
          "Posterior thigh, popliteal fossa, and perineum",
          "Posterior leg only",
        ],
        correct: 2,
        explanation:
          "This nerve arises from sacral plexus (S1-S3) and has a broad cutaneous distribution in the posterior thigh and perineal region.",
      },
    ],
    "Popliteal Fossa & Leg": [
      {
        text: "Which structure forms the lateral boundary of the popliteal fossa?",
        options: [
          "Semitendinosus",
          "Biceps femoris",
          "Medial head of gastrocnemius",
          "Sartorius",
        ],
        correct: 1,
        explanation:
          "The biceps femoris tendon forms the superolateral boundary; semitendinosus and semimembranosus form the superomedial boundary, and the gastrocnemius heads form the inferior boundaries.",
      },
      {
        text: "Which artery is most superficial within the popliteal fossa?",
        options: [
          "Popliteal artery",
          "Femoral artery",
          "Posterior tibial artery",
          "Anterior tibial artery",
        ],
        correct: 0,
        explanation:
          "The popliteal artery lies deep to the popliteal vein and tibial nerve but is the most superficial arterial structure in the fossa.",
      },
      {
        text: "Which nerve lies most superficially in the popliteal fossa?",
        options: [
          "Tibial nerve",
          "Common fibular (peroneal) nerve",
          "Saphenous nerve",
          "Sciatic nerve",
        ],
        correct: 1,
        explanation:
          "The common fibular nerve runs along the lateral edge of the fossa, lying superficially over the biceps femoris tendon, while the tibial nerve is deeper.",
      },
      {
        text: "Which muscle in the leg is innervated by the tibial nerve but lies in the anterior compartment?",
        options: [
          "Tibialis anterior",
          "Extensor hallucis longus",
          "Extensor digitorum longus",
          "None of the above",
        ],
        correct: 3,
        explanation:
          "All muscles in the anterior compartment are innervated by the deep fibular nerve, not the tibial nerve.",
      },
      {
        text: "Which structure forms the floor of the popliteal fossa?",
        options: [
          "Popliteal fascia",
          "Biceps femoris tendon",
          "Popliteal surface of femur",
          "Semitendinosus tendon",
        ],
        correct: 2,
        explanation:
          "The floor is formed by the popliteal surface of femur, posterior capsule of the knee, and popliteus muscle, with fascia covering the fossa.",
      },
      {
        text: "The small saphenous vein drains into which structure in the popliteal fossa?",
        options: [
          "Femoral vein",
          "Popliteal vein",
          "Great saphenous vein",
          "Anterior tibial vein",
        ],
        correct: 1,
        explanation:
          "The small saphenous vein ascends posterior to the lateral malleolus and drains into the popliteal vein in the fossa.",
      },
      {
        text: "Which of the following muscles does NOT contribute to the popliteal fossa boundaries?",
        options: [
          "Semimembranosus",
          "Gastrocnemius",
          "Gracilis",
          "Biceps femoris",
        ],
        correct: 2,
        explanation:
          "Gracilis is medial in the thigh and does not form any boundary of the fossa.",
      },
      {
        text: "Which artery is a direct continuation of the popliteal artery after passing through the interosseous membrane?",
        options: [
          "Posterior tibial artery",
          "Anterior tibial artery",
          "Fibular artery",
          "Dorsalis pedis artery",
        ],
        correct: 1,
        explanation:
          "The anterior tibial artery passes through the interosseous membrane to reach the anterior compartment of the leg.",
      },
      {
        text: "Which compartment of the leg contains the deep fibular nerve?",
        options: ["Posterior", "Lateral", "Anterior", "Medial"],
        correct: 2,
        explanation:
          "The deep fibular nerve supplies muscles in the anterior compartment (dorsiflexors) of the leg.",
      },
      {
        text: "Which muscle in the posterior compartment is NOT innervated by the tibial nerve?",
        options: [
          "Gastrocnemius",
          "Soleus",
          "Fibularis longus",
          "Tibialis posterior",
        ],
        correct: 2,
        explanation:
          "Fibularis longus is in the lateral compartment and is innervated by the superficial fibular nerve, not tibial nerve.",
      },
      {
        text: "Which of the following structures passes through the tendinous arch of the soleus?",
        options: [
          "Tibial nerve",
          "Popliteal artery",
          "Small saphenous vein",
          "Great saphenous vein",
        ],
        correct: 1,
        explanation:
          "The popliteal artery and vein pass deep to the tendinous arch of the soleus muscle as they enter the posterior compartment.",
      },
      {
        text: "Which of the following veins is often used for coronary bypass surgery?",
        options: [
          "Popliteal vein",
          "Small saphenous vein",
          "Great saphenous vein",
          "Posterior tibial vein",
        ],
        correct: 2,
        explanation:
          "The great saphenous vein is long, superficial, and accessible, making it ideal for bypass grafting.",
      },
      {
        text: "Which branch of the popliteal artery supplies the head of the fibula?",
        options: [
          "Superior lateral genicular artery",
          "Inferior lateral genicular artery",
          "Superior medial genicular artery",
          "Middle genicular artery",
        ],
        correct: 1,
        explanation:
          "The inferior lateral genicular artery passes laterally and supplies the head of fibula and lateral knee structures.",
      },
      {
        text: "Which muscle forms the floor of the superior part of the popliteal fossa?",
        options: ["Popliteus", "Gastrocnemius", "Plantaris", "Soleus"],
        correct: 0,
        explanation:
          "The popliteus muscle forms the floor in the upper part of the fossa, underlying neurovascular structures.",
      },
      {
        text: "Which of the following nerves is most vulnerable to injury at the fibular neck?",
        options: [
          "Tibial nerve",
          "Sural nerve",
          "Common fibular nerve",
          "Deep fibular nerve",
        ],
        correct: 2,
        explanation:
          "The common fibular nerve winds around the fibular neck and is superficial, making it prone to injury.",
      },
      {
        text: "Which ligament forms the posterior wall of the knee joint, also contributing to the popliteal fossa floor?",
        options: [
          "Oblique popliteal ligament",
          "Arcuate popliteal ligament",
          "Posterior cruciate ligament",
          "Lateral collateral ligament",
        ],
        correct: 0,
        explanation:
          "The oblique popliteal ligament is an extension of semimembranosus tendon and strengthens the posterior knee capsule.",
      },
      {
        text: "Which compartment of the leg contains the fibularis brevis muscle?",
        options: ["Anterior", "Posterior", "Lateral", "Medial"],
        correct: 2,
        explanation:
          "Fibularis brevis and longus are in the lateral compartment, innervated by the superficial fibular nerve.",
      },
      {
        text: "Which popliteal branch supplies the cruciate ligaments and synovial membrane of the knee?",
        options: [
          "Superior medial genicular artery",
          "Middle genicular artery",
          "Inferior medial genicular artery",
          "Superior lateral genicular artery",
        ],
        correct: 1,
        explanation:
          "The middle genicular artery pierces the posterior capsule to supply ligaments and synovial membrane.",
      },
      {
        text: "Which tendon lies immediately superficial to the tibial nerve in the popliteal fossa?",
        options: [
          "Semitendinosus",
          "Biceps femoris",
          "Gastrocnemius medial head",
          "Semimembranosus",
        ],
        correct: 3,
        explanation:
          "The tibial nerve runs deep and slightly lateral, with semimembranosus tendon forming the medial boundary just superficial to it.",
      },
      {
        text: "Which structure separates the superficial and deep posterior compartments of the leg?",
        options: [
          "Crural fascia",
          "Interosseous membrane",
          "Transverse intermuscular septum",
          "Posterior intermuscular septum",
        ],
        correct: 2,
        explanation:
          "The transverse intermuscular septum divides the superficial (gastrocnemius, soleus, plantaris) from the deep posterior compartment (tibialis posterior, flexor digitorum longus, flexor hallucis longus).",
      },
    ],
    Foot: [
      {
        text: "Which structure passes through the tarsal tunnel along with the tibial nerve?",
        options: [
          "Dorsalis pedis artery",
          "Tendon of flexor hallucis longus",
          "Peroneus brevis tendon",
          "Extensor digitorum longus tendon",
        ],
        correct: 1,
        explanation:
          "The tarsal tunnel contains the tibial nerve, posterior tibial artery, flexor digitorum longus, flexor hallucis longus, and tibialis posterior tendons (Tom, Dick And Very Nervous Harry).",
      },
      {
        text: "Which of the following bones forms the keystone of the medial longitudinal arch?",
        options: ["Calcaneus", "Navicular", "Talus", "Cuboid"],
        correct: 2,
        explanation:
          "The talus sits at the apex of the medial longitudinal arch, transmitting body weight from tibia to the arch.",
      },
      {
        text: "Which muscle is the primary dynamic stabilizer of the lateral longitudinal arch?",
        options: [
          "Flexor digitorum longus",
          "Peroneus longus",
          "Tibialis anterior",
          "Flexor hallucis longus",
        ],
        correct: 1,
        explanation:
          "The peroneus longus tendon runs under the cuboid to support the lateral arch dynamically during gait.",
      },
      {
        text: "Which ligament prevents excessive eversion of the subtalar joint?",
        options: [
          "Deltoid ligament",
          "Plantar calcaneonavicular ligament",
          "Lateral collateral ligament",
          "Interosseous talocalcaneal ligament",
        ],
        correct: 0,
        explanation:
          "The lateral ligament complex (anterior talofibular, posterior talofibular, calcaneofibular) resists excessive inversion, but in eversion, the strong deltoid ligament resists it. Trick: eversion vs inversion.",
      },
      {
        text: "Which plantar interosseous muscle inserts on the medial side of the proximal phalanges?",
        options: [
          "First plantar interosseous",
          "Second plantar interosseous",
          "Third plantar interosseous",
          "Fourth plantar interosseous",
        ],
        correct: 1,
        explanation:
          "Plantar interossei adduct the toes (PAD: plantar adduct), and insert on the medial side of 3rd–5th toes. The 2nd toe has no interosseous.",
      },
      {
        text: "Which artery provides the main blood supply to the lateral plantar surface of the foot?",
        options: [
          "Dorsalis pedis artery",
          "Medial plantar artery",
          "Lateral plantar artery",
          "Anterior tibial artery",
        ],
        correct: 2,
        explanation:
          "The lateral plantar artery forms the deep plantar arch with contributions from dorsalis pedis artery.",
      },
      {
        text: "The extensor hallucis brevis inserts on which part of the foot?",
        options: [
          "Lateral side of proximal phalanx of big toe",
          "Dorsal surface of distal phalanx of big toe",
          "Medial side of proximal phalanx of big toe",
          "Plantar surface of distal phalanx",
        ],
        correct: 2,
        explanation:
          "Extensor hallucis brevis helps extend the MTP joint of the hallux.",
      },
      {
        text: "Which tendon passes through the groove on the posterior surface of the talus?",
        options: [
          "Flexor digitorum longus",
          "Flexor hallucis longus",
          "Tibialis posterior",
          "Peroneus tertius",
        ],
        correct: 1,
        explanation:
          "The flexor hallucis longus tendon runs through a groove on the posterior talus and sustentaculum tali.",
      },
      {
        text: "Which muscle is innervated by the lateral plantar nerve and abducts the fifth toe?",
        options: [
          "Abductor digiti minimi",
          "Flexor digiti minimi brevis",
          "Quadratus plantae",
          "Opponens digiti minimi",
        ],
        correct: 0,
        explanation:
          "Abductor digiti minimi is lateral plantar nerve–innervated and abducts the 5th toe.",
      },
      {
        text: "Which tarsal bone articulates with both cuneiforms and the cuboid?",
        options: ["Talus", "Calcaneus", "Navicular", "Cuboid"],
        correct: 2,
        explanation:
          "The navicular is medial, articulates with talus proximally, cuboid laterally, and all three cuneiforms distally.",
      },
      {
        text: "The plantar aponeurosis is a continuation of which structure?",
        options: [
          "Achilles tendon",
          "Plantaris tendon",
          "Gastrocnemius tendon",
          "Fascia lata",
        ],
        correct: 0,
        explanation:
          "Plantar aponeurosis is a thickening of the plantar fascia and is continuous with the calcaneal part of the Achilles tendon.",
      },
      {
        text: "Which joint allows inversion and eversion of the foot?",
        options: [
          "Talocrural joint",
          "Subtalar joint",
          "Tarsometatarsal joint",
          "Metatarsophalangeal joint",
        ],
        correct: 1,
        explanation:
          "Subtalar (talocalcaneal) joint permits inversion/eversion; talocrural allows dorsiflexion/plantarflexion.",
      },
      {
        text: "Which structure lies immediately deep to the abductor hallucis on the medial plantar surface?",
        options: [
          "Flexor digitorum brevis",
          "Quadratus plantae",
          "Flexor hallucis brevis",
          "Lumbricals",
        ],
        correct: 0,
        explanation:
          "Layer 1: abductor hallucis, flexor digitorum brevis, abductor digiti minimi; the flexor digitorum brevis lies directly deep to abductor hallucis medially.",
      },
      {
        text: "Which ligament supports the lateral longitudinal arch?",
        options: [
          "Plantar calcaneonavicular ligament",
          "Long plantar ligament",
          "Short plantar ligament",
          "Deltoid ligament",
        ],
        correct: 1,
        explanation:
          "Long plantar ligament runs from calcaneus to cuboid and bases of lateral metatarsals, supporting the lateral arch.",
      },
      {
        text: "Which vein is most commonly used for bypass grafting in foot/ankle surgery?",
        options: [
          "Great saphenous vein",
          "Small saphenous vein",
          "Dorsal venous arch",
          "Plantar venous arch",
        ],
        correct: 0,
        explanation:
          "The great saphenous vein runs along the medial aspect of the leg and foot; commonly harvested for grafts.",
      },
      {
        text: "Which nerve supplies sensation to the first web space dorsally?",
        options: [
          "Medial plantar nerve",
          "Lateral plantar nerve",
          "Deep peroneal nerve",
          "Superficial peroneal nerve",
        ],
        correct: 2,
        explanation:
          "The first dorsal web space (between hallux and second toe) is supplied by the deep peroneal (fibular) nerve.",
      },
      {
        text: "Which plantar intrinsic muscle originates from the calcaneus and inserts into the lateral sides of the toes?",
        options: [
          "Flexor digitorum brevis",
          "Quadratus plantae",
          "Lumbricals",
          "Abductor digiti minimi",
        ],
        correct: 1,
        explanation:
          "Quadratus plantae corrects pull of flexor digitorum longus, inserting into its tendons laterally.",
      },
      {
        text: "The groove for the peroneus longus tendon is found on which bone?",
        options: ["Cuboid", "Navicular", "Talus", "Calcaneus"],
        correct: 0,
        explanation:
          "Peroneus longus tendon runs under the lateral side of the cuboid in a groove before inserting on medial cuneiform and first metatarsal.",
      },
      {
        text: "Which muscle flexes the metatarsophalangeal joint and extends the interphalangeal joints?",
        options: [
          "Flexor digitorum longus",
          "Flexor digitorum brevis",
          "Lumbricals",
          "Quadratus plantae",
        ],
        correct: 2,
        explanation:
          "Lumbricals flex MTP joints and extend IP joints (similar to hand lumbricals).",
      },
      {
        text: "Which tarsometatarsal joint is the most rigid and contributes to the keystone effect of the medial longitudinal arch?",
        options: [
          "First TMT joint",
          "Second TMT joint",
          "Third TMT joint",
          "Fifth TMT joint",
        ],
        correct: 1,
        explanation:
          "The second metatarsal fits into a recessed slot between cuneiforms, acting as the keystone for the transverse and medial longitudinal arches.",
      },
    ],
  },

  // --- 3. HEAD ---
  head: {
    Cranium: [
      {
        text: "Which cranial bone contributes to the formation of both the anterior cranial fossa and the orbit?",
        options: ["Temporal", "Sphenoid", "Frontal", "Ethmoid"],
        correct: 2,
        explanation:
          "The frontal bone forms the anterior cranial fossa and the superior part of the orbit (orbital roof).",
      },
      {
        text: "The foramen ovale transmits which structure?",
        options: [
          "Mandibular nerve (V3)",
          "Facial nerve (VII)",
          "Glossopharyngeal nerve (IX)",
          "Ophthalmic nerve (V1)",
        ],
        correct: 0,
        explanation:
          "The foramen ovale of the sphenoid bone allows passage of V3 and the accessory meningeal artery.",
      },
      {
        text: "Which of the following is the only bone that does not articulate with any other cranial bone?",
        options: ["Vomer", "Ethmoid", "Mandible", "Occipital"],
        correct: 2,
        explanation:
          "The mandible is the only movable bone of the skull that articulates with the temporal bone via the temporomandibular joint, but not with any other cranial bone directly.",
      },
      {
        text: "The groove for the middle meningeal artery is found on which cranial surface?",
        options: [
          "Inner surface of parietal bone",
          "Outer surface of frontal bone",
          "Inner surface of temporal bone",
          "Inner surface of occipital bone",
        ],
        correct: 0,
        explanation:
          "The middle meningeal artery grooves the internal aspect of the parietal and sometimes temporal bones.",
      },
      {
        text: "Which cranial bone contains the cribriform plate?",
        options: ["Ethmoid", "Sphenoid", "Frontal", "Occipital"],
        correct: 0,
        explanation:
          "The cribriform plate of the ethmoid bone allows passage of the olfactory nerve filaments (CN I).",
      },
      {
        text: "The jugular foramen is located between which two bones?",
        options: [
          "Occipital and temporal",
          "Temporal and sphenoid",
          "Occipital and parietal",
          "Temporal and parietal",
        ],
        correct: 0,
        explanation:
          "The jugular foramen transmits CN IX, X, XI, and the internal jugular vein.",
      },
      {
        text: "Which cranial suture typically remains unfused until late adulthood?",
        options: ["Coronal", "Sagittal", "Lambdoid", "Metopic"],
        correct: 2,
        explanation:
          "The lambdoid suture fuses later in life compared to the coronal and sagittal sutures.",
      },
      {
        text: "The hypoglossal canal is located in which part of the occipital bone?",
        options: [
          "Basilar part",
          "Condylar part",
          "Squamous part",
          "Lateral part",
        ],
        correct: 3,
        explanation:
          "CN XII passes through the hypoglossal canal, located in the lateral part of the occipital bone near the condyles.",
      },
      {
        text: "Which cranial bone contributes to the middle cranial fossa and houses the pituitary gland?",
        options: ["Frontal", "Sphenoid", "Temporal", "Ethmoid"],
        correct: 1,
        explanation:
          "The sella turcica of the sphenoid bone houses the pituitary gland in the middle cranial fossa.",
      },
      {
        text: "The pterion is a clinically important landmark because it overlies which artery?",
        options: [
          "Internal carotid artery",
          "Middle meningeal artery",
          "Vertebral artery",
          "Facial artery",
        ],
        correct: 1,
        explanation:
          "Fractures at the pterion can rupture the middle meningeal artery, causing an epidural hematoma.",
      },
      {
        text: "The internal acoustic meatus transmits which cranial nerves?",
        options: ["VII and VIII", "V2 and V3", "IX and X", "III and IV"],
        correct: 0,
        explanation:
          "Facial (VII) and vestibulocochlear (VIII) nerves pass through the internal acoustic meatus in the petrous part of the temporal bone.",
      },
      {
        text: "Which bone forms the posterior part of the nasal septum?",
        options: ["Vomer", "Ethmoid", "Maxilla", "Palatine"],
        correct: 0,
        explanation:
          "The vomer articulates with the sphenoid, ethmoid, maxilla, and palatine bones to form the posterior nasal septum.",
      },
      {
        text: "Which cranial bone has a jugular notch that contributes to the jugular foramen?",
        options: ["Occipital", "Temporal", "Sphenoid", "Parietal"],
        correct: 1,
        explanation:
          "The jugular notch of the temporal bone articulates with the occipital bone to form the jugular foramen.",
      },
      {
        text: "Which cranial bone contains the foramen rotundum?",
        options: ["Sphenoid", "Temporal", "Frontal", "Occipital"],
        correct: 0,
        explanation:
          "The foramen rotundum transmits the maxillary nerve (V2) of the trigeminal nerve.",
      },
      {
        text: "The crista galli serves as an attachment point for which structure?",
        options: [
          "Tentorium cerebelli",
          "Falx cerebri",
          "Falx cerebelli",
          "Diaphragma sellae",
        ],
        correct: 1,
        explanation:
          "The falx cerebri attaches to the crista galli of the ethmoid bone.",
      },
      {
        text: "Which bone articulates with all other cranial bones?",
        options: ["Frontal", "Sphenoid", "Parietal", "Occipital"],
        correct: 1,
        explanation:
          'The sphenoid is the "keystone" of the cranial floor, articulating with frontal, temporal, parietal, ethmoid, and occipital bones.',
      },
      {
        text: "Which cranial fossa contains the internal carotid artery in a bony canal?",
        options: [
          "Anterior cranial fossa",
          "Middle cranial fossa",
          "Posterior cranial fossa",
          "None",
        ],
        correct: 1,
        explanation:
          "The internal carotid artery passes through the carotid canal in the petrous part of the temporal bone, located in the middle cranial fossa.",
      },
      {
        text: "The foramen spinosum is located posterolateral to which structure?",
        options: [
          "Foramen ovale",
          "Foramen lacerum",
          "Jugular foramen",
          "Hypoglossal canal",
        ],
        correct: 0,
        explanation:
          "The foramen spinosum is posterolateral to the foramen ovale and transmits the middle meningeal artery.",
      },
      {
        text: "The occipital condyles articulate with which structure?",
        options: ["Atlas (C1)", "Axis (C2)", "Clivus", "Dens"],
        correct: 0,
        explanation:
          "The occipital condyles articulate with the superior articular facets of the atlas, forming the atlanto-occipital joint.",
      },
      {
        text: "The temporal lines on the parietal bone serve as attachments for which muscle?",
        options: [
          "Masseter",
          "Temporalis",
          "Sternocleidomastoid",
          "Occipitofrontalis",
        ],
        correct: 1,
        explanation:
          "The temporalis muscle attaches along the superior and inferior temporal lines on the parietal bone.",
      },
    ],

    "Cranial Fossa": [
      {
        text: "Which of the following structures separates the anterior cranial fossa from the middle cranial fossa?",
        options: [
          "Tentorium cerebelli",
          "Lesser wing of sphenoid",
          "Superior orbital fissure",
          "Foramen magnum",
        ],
        correct: 1,
        explanation:
          "The anterior cranial fossa is separated from the middle cranial fossa by the posterior margin of the lesser wing of the sphenoid. Tentorium cerebelli separates middle and posterior fossae.",
      },
      {
        text: "Which cranial fossa contains the hypophyseal fossa of the sella turcica?",
        options: ["Anterior", "Middle", "Posterior", "None"],
        correct: 1,
        explanation:
          "The hypophyseal (pituitary) fossa is located in the sphenoid bone, within the middle cranial fossa.",
      },
      {
        text: "The cribriform plate transmits which cranial nerve?",
        options: ["CN I", "CN II", "CN III", "CN IV"],
        correct: 0,
        explanation:
          "The olfactory nerve (CN I) passes through the foramina of the cribriform plate in the anterior cranial fossa.",
      },
      {
        text: "Which of the following foramina is incorrectly paired with its transmitted structure?",
        options: [
          "Foramen ovale – mandibular nerve",
          "Foramen rotundum – maxillary nerve",
          "Foramen spinosum – middle meningeal artery",
          "Jugular foramen – CN II",
        ],
        correct: 3,
        explanation:
          "CN II passes through the optic canal, not the jugular foramen. The jugular foramen transmits CN IX, X, XI, and the internal jugular vein.",
      },
      {
        text: "The anterior cranial fossa is formed by all the following bones except:",
        options: ["Frontal", "Ethmoid", "Sphenoid", "Temporal"],
        correct: 3,
        explanation:
          "The temporal bone contributes only to the middle and posterior cranial fossae.",
      },
      {
        text: "Which structure forms the posterior boundary of the middle cranial fossa?",
        options: [
          "Lesser wing of sphenoid",
          "Dorsum sellae",
          "Petrous part of temporal bone",
          "Foramen lacerum",
        ],
        correct: 1,
        explanation:
          "The dorsum sellae forms the posterior boundary of the middle cranial fossa, posterior to the sella turcica.",
      },
      {
        text: "Which artery is most closely associated with the floor of the middle cranial fossa?",
        options: [
          "Anterior cerebral artery",
          "Middle meningeal artery",
          "Basilar artery",
          "Ophthalmic artery",
        ],
        correct: 1,
        explanation:
          "The middle meningeal artery enters the foramen spinosum and runs along the floor of the middle cranial fossa.",
      },
      {
        text: "Which cranial fossa contains the internal acoustic meatus?",
        options: [
          "Anterior",
          "Middle",
          "Posterior",
          "Both middle and posterior",
        ],
        correct: 2,
        explanation:
          "The internal acoustic meatus is in the posterior cranial fossa, transmitting CN VII and VIII.",
      },
      {
        text: "The optic canal is a feature of which cranial fossa?",
        options: [
          "Anterior",
          "Middle",
          "Posterior",
          "Both anterior and middle",
        ],
        correct: 1,
        explanation:
          "The optic canal, located in the lesser wing of the sphenoid, allows passage of CN II and ophthalmic artery in the middle cranial fossa.",
      },
      {
        text: "Which cranial fossa is associated with the tentorium cerebelli superiorly?",
        options: [
          "Anterior",
          "Middle",
          "Posterior",
          "Both middle and posterior",
        ],
        correct: 2,
        explanation:
          "The posterior cranial fossa is separated from the middle cranial fossa by the tentorium cerebelli.",
      },
      {
        text: "The foramen magnum is located in which cranial fossa?",
        options: ["Anterior", "Middle", "Posterior", "None"],
        correct: 2,
        explanation:
          "The foramen magnum is the largest opening of the posterior cranial fossa, transmitting the medulla and vertebral arteries.",
      },
      {
        text: "Which cranial fossa houses the cerebellum and pons?",
        options: ["Anterior", "Middle", "Posterior", "Middle and posterior"],
        correct: 2,
        explanation:
          "The posterior cranial fossa accommodates the cerebellum, pons, and medulla oblongata.",
      },
      {
        text: "The foramen rotundum opens into which fossa?",
        options: [
          "Anterior",
          "Middle",
          "Posterior",
          "Both anterior and middle",
        ],
        correct: 1,
        explanation:
          "The foramen rotundum transmits the maxillary nerve (CN V2) into the middle cranial fossa.",
      },
      {
        text: "Which of the following structures does not pass through the superior orbital fissure?",
        options: ["CN III", "CN IV", "CN V1", "CN VI", "CN II"],
        correct: 4,
        explanation:
          "CN II passes through the optic canal, not the superior orbital fissure.",
      },
      {
        text: "The anterior cranial fossa contains which part of the frontal bone?",
        options: [
          "Squamous part",
          "Orbital part",
          "Zygomatic part",
          "Petrous part",
        ],
        correct: 1,
        explanation:
          "The orbital part of the frontal bone forms part of the floor of the anterior cranial fossa.",
      },
      {
        text: "Which cranial fossa is the sphenopetrosal groove found in?",
        options: ["Anterior", "Middle", "Posterior", "None"],
        correct: 1,
        explanation:
          "The sphenopetrosal groove lies on the floor of the middle cranial fossa for the middle meningeal vessels.",
      },
      {
        text: "Which bone contributes to all three cranial fossae?",
        options: ["Frontal", "Sphenoid", "Temporal", "Occipital"],
        correct: 1,
        explanation:
          "The sphenoid bone forms part of the anterior, middle, and posterior cranial fossae.",
      },
      {
        text: "The clivus is located in which cranial fossa?",
        options: [
          "Anterior",
          "Middle",
          "Posterior",
          "Both middle and posterior",
        ],
        correct: 2,
        explanation:
          "The clivus, formed by the sphenoid and occipital bones, is part of the posterior cranial fossa, supporting the brainstem.",
      },
      {
        text: "Which cranial fossa has the largest volume?",
        options: ["Anterior", "Middle", "Posterior", "All equal"],
        correct: 2,
        explanation:
          "The posterior cranial fossa is deepest and largest, accommodating the cerebellum and brainstem.",
      },
      {
        text: "Which cranial fossa is most closely associated with the ethmoidal air cells?",
        options: ["Anterior", "Middle", "Posterior", "None"],
        correct: 0,
      },
    ],

    "Face and Scalp": [
      {
        text: "The parotid duct pierces which of the following muscles before opening into the oral cavity?",
        options: ["Masseter", "Buccinator", "Orbicularis oris", "Temporalis"],
        correct: 1,
        explanation:
          "The parotid (Stensen's) duct crosses the masseter superficially, then pierces the buccinator to open opposite the second upper molar.",
      },
      {
        text: "Which of the following muscles of facial expression is NOT innervated by the temporal branch of the facial nerve?",
        options: [
          "Frontalis",
          "Orbicularis oculi (orbital part)",
          "Corrugator supercilii",
          "Platysma",
        ],
        correct: 3,
        explanation:
          "Platysma is supplied by the cervical branch of the facial nerve; the temporal branch innervates upper face muscles.",
      },
      {
        text: "The supratrochlear artery is a branch of which artery?",
        options: [
          "Superficial temporal artery",
          "Facial artery",
          "Ophthalmic artery",
          "Maxillary artery",
        ],
        correct: 2,
        explanation:
          "The supratrochlear artery arises from the ophthalmic artery, a branch of the internal carotid, supplying the medial forehead.",
      },
      {
        text: "The temporal fascia attaches superiorly to:",
        options: [
          "Zygomatic arch only",
          "Superior temporal line only",
          "Both superior temporal line and zygomatic arch",
          "Mandibular ramus",
        ],
        correct: 2,
        explanation:
          "Temporal fascia encloses temporalis muscle, attaching superiorly to superior temporal line and laterally to zygomatic arch.",
      },
      {
        text: "The danger area of the scalp is primarily due to which layer?",
        options: [
          "Skin",
          "Connective tissue (dense)",
          "Aponeurosis",
          "Loose areolar tissue",
        ],
        correct: 3,
        explanation:
          "The loose areolar layer allows infections to spread easily and communicate with intracranial venous sinuses.",
      },
      {
        text: "Which foramen of the skull transmits the branch of the trigeminal nerve that supplies the upper lip?",
        options: [
          "Supraorbital foramen",
          "Infraorbital foramen",
          "Mental foramen",
          "Foramen rotundum",
        ],
        correct: 1,
        explanation:
          "The infraorbital nerve (V2) exits via the infraorbital foramen to supply upper lip, lower eyelid, and cheek.",
      },
      {
        text: "The facial vein communicates directly with the cavernous sinus via which vein?",
        options: [
          "Ophthalmic vein",
          "Superficial temporal vein",
          "Maxillary vein",
          "Retromandibular vein",
        ],
        correct: 0,
        explanation:
          "The angular vein at the medial canthus communicates with the superior ophthalmic vein, a route for dangerous infections to the cavernous sinus.",
      },
      {
        text: "Which of the following muscles is deepest in the temporal region?",
        options: [
          "Temporalis",
          "Masseter",
          "Lateral pterygoid",
          "Medial pterygoid",
        ],
        correct: 0,
        explanation:
          "Temporalis lies deep on the temporal fossa, covered superficially by temporal fascia.",
      },
      {
        text: "The auriculotemporal nerve is a branch of which nerve?",
        options: [
          "Mandibular (V3)",
          "Maxillary (V2)",
          "Facial (VII)",
          "Ophthalmic (V1)",
        ],
        correct: 0,
        explanation:
          "Auriculotemporal nerve arises from V3, carrying sensory fibers to the temporal region and parasympathetic fibers to parotid.",
      },
      {
        text: "The frontal belly of occipitofrontalis is supplied by which branch of the facial nerve?",
        options: ["Temporal", "Zygomatic", "Buccal", "Marginal mandibular"],
        correct: 0,
        explanation:
          "Temporal branch innervates forehead muscles, including frontalis and superior orbicularis oculi.",
      },
      {
        text: "The subcutaneous layer of the scalp contains:",
        options: [
          "Loose areolar tissue",
          "Dense connective tissue with vessels and nerves",
          "Galea aponeurotica",
          "Periosteum",
        ],
        correct: 1,
        explanation:
          "The second layer of scalp (dense connective tissue) is rich in arteries, veins, and nerves, prone to bleeding.",
      },
      {
        text: "The parotid gland lies posterior to which landmark?",
        options: [
          "Masseter",
          "Mandibular ramus",
          "Sternocleidomastoid",
          "External acoustic meatus",
        ],
        correct: 3,
        explanation:
          "The parotid sits anterior to sternocleidomastoid, overlying posterior ramus, and extending to external acoustic meatus.",
      },
      {
        text: "The temporal fossa is bounded anteriorly by:",
        options: [
          "Frontal bone",
          "Zygomatic arch",
          "Coronoid process",
          "Mandibular notch",
        ],
        correct: 1,
        explanation:
          "Temporal fossa is a shallow depression on the lateral skull, bounded anteriorly by the zygomatic arch.",
      },
      {
        text: "The facial artery becomes the angular artery at the:",
        options: [
          "Lateral nose",
          "Medial canthus of the eye",
          "Upper lip",
          "Lower lip",
        ],
        correct: 1,
        explanation:
          "Facial artery ascends along the side of the nose to form angular artery near the medial angle of the eye.",
      },
      {
        text: "The occipitofrontalis muscle is connected to the scalp by:",
        options: [
          "Skin",
          "Epicranial aponeurosis (galea aponeurotica)",
          "Temporal fascia",
          "Loose areolar tissue",
        ],
        correct: 1,
        explanation:
          "Frontal and occipital bellies of occipitofrontalis are united by the galea aponeurotica, allowing scalp movement.",
      },
      {
        text: "Which scalp artery is a terminal branch of the external carotid?",
        options: [
          "Supraorbital",
          "Supratrochlear",
          "Superficial temporal",
          "Ophthalmic",
        ],
        correct: 2,
        explanation:
          "Superficial temporal artery, terminal branch of external carotid, supplies lateral scalp.",
      },
      {
        text: "Which muscle attaches to the coronoid process of the mandible?",
        options: ["Masseter", "Temporalis", "Lateral pterygoid", "Platysma"],
        correct: 1,
        explanation:
          "Temporalis inserts into the coronoid process and elevates/retracts the mandible.",
      },
      {
        text: "The deep temporal arteries are branches of:",
        options: [
          "Maxillary artery",
          "Superficial temporal artery",
          "Facial artery",
          "Occipital artery",
        ],
        correct: 0,
        explanation:
          "Deep temporal arteries (anterior and posterior) supply temporalis and branch from maxillary artery.",
      },
      {
        text: "The orbicularis oculi is divided into:",
        options: [
          "Orbital and palpebral parts",
          "Orbital and frontal parts",
          "Palpebral and zygomatic parts",
          "Frontal and temporal parts",
        ],
        correct: 0,
        explanation:
          "Orbicularis oculi has an orbital part (forceful closure) and palpebral part (gentle blinking).",
      },
      {
        text: "The danger triangle of the face is dangerous because:",
        options: [
          "Skin is thin",
          "Lymphatics drain to brain",
          "Facial vein has no valves",
          "Muscles are weak",
        ],
        correct: 2,
      },
    ],

    "Cranial Meninges": [
      {
        text: "Which layer of the meninges is most closely adherent to the brain surface, following its gyri and sulci?",
        options: [
          "Dura mater",
          "Arachnoid mater",
          "Pia mater",
          "Periosteal layer of dura",
        ],
        correct: 2,
        explanation:
          "Pia mater is a delicate membrane that closely follows the brain surface, dipping into sulci and covering gyri.",
      },
      {
        text: "Which meningeal layer contains trabeculae connecting to the pia mater and forms the subarachnoid space?",
        options: [
          "Dura mater",
          "Arachnoid mater",
          "Pia mater",
          "Endosteal layer of dura",
        ],
        correct: 1,
        explanation:
          "The arachnoid mater sends trabeculae to the pia mater, forming the web-like subarachnoid space filled with CSF.",
      },
      {
        text: "Which layer of dura mater forms the falx cerebri?",
        options: [
          "Periosteal layer",
          "Meningeal layer",
          "Pia mater",
          "Arachnoid mater",
        ],
        correct: 1,
        explanation:
          "The falx cerebri is a dural fold formed by the meningeal layer, separating the two cerebral hemispheres.",
      },
      {
        text: "Which venous structure runs in the attached margins of the falx cerebri?",
        options: [
          "Cavernous sinus",
          "Superior sagittal sinus",
          "Sigmoid sinus",
          "Inferior petrosal sinus",
        ],
        correct: 1,
        explanation:
          "The superior sagittal sinus runs along the attached margin of the falx cerebri within the meningeal dura.",
      },
      {
        text: "Which meningeal layer is tightly fused to the inner surface of the skull in most areas?",
        options: [
          "Pia mater",
          "Arachnoid mater",
          "Periosteal dura",
          "Meningeal dura",
        ],
        correct: 2,
        explanation:
          "The periosteal layer of dura is adherent to the skull; it separates only at dural venous sinuses.",
      },
      {
        text: "Which structure allows CSF to drain from the subarachnoid space into the venous system?",
        options: [
          "Dural folds",
          "Arachnoid villi",
          "Pia mater",
          "Choroid plexus",
        ],
        correct: 1,
        explanation:
          "Arachnoid villi (granulations) protrude into dural venous sinuses, allowing CSF drainage into blood.",
      },
      {
        text: "The tentorium cerebelli separates which two structures?",
        options: [
          "Cerebellum and brainstem",
          "Cerebrum and cerebellum",
          "Cerebral hemispheres",
          "Brainstem and spinal cord",
        ],
        correct: 1,
        explanation:
          "Tentorium cerebelli is a horizontal dural fold separating occipital lobes of the cerebrum from the cerebellum.",
      },
      {
        text: "Which meningeal layer is pain-sensitive and responsible for headaches of intracranial origin?",
        options: [
          "Pia mater",
          "Arachnoid mater",
          "Dura mater",
          "Subarachnoid trabeculae",
        ],
        correct: 2,
        explanation:
          "Dura mater is highly innervated by trigeminal and cervical nerves, making it pain-sensitive.",
      },
      {
        text: "The diaphragma sellae is a dural fold that covers which structure?",
        options: [
          "Pituitary gland",
          "Optic chiasm",
          "Pineal gland",
          "Medulla oblongata",
        ],
        correct: 0,
        explanation:
          "The diaphragma sellae is a small dural fold forming a roof over the pituitary fossa (sella turcica).",
      },
      {
        text: "Which meningeal layer forms the lateral wall of the cavernous sinus?",
        options: [
          "Pia mater",
          "Periosteal dura",
          "Meningeal dura",
          "Arachnoid mater",
        ],
        correct: 2,
        explanation:
          "The lateral wall of the cavernous sinus is formed by splitting of the meningeal dura, not the periosteal layer.",
      },
      {
        text: "Which artery runs in the dura mater and is prone to epidural hematomas when ruptured?",
        options: [
          "Middle cerebral artery",
          "Middle meningeal artery",
          "Anterior cerebral artery",
          "Basilar artery",
        ],
        correct: 1,
        explanation:
          "The middle meningeal artery runs in the epidural space between the periosteal dura and skull; trauma can cause epidural hematoma.",
      },
      {
        text: "Which dural fold contains the occipital sinus in its attached margin?",
        options: [
          "Tentorium cerebelli",
          "Falx cerebri",
          "Falx cerebelli",
          "Diaphragma sellae",
        ],
        correct: 2,
        explanation:
          "Falx cerebelli separates the cerebellar hemispheres and houses the occipital sinus in its posterior attached margin.",
      },
      {
        text: "Which meningeal compartment is considered 'potential' rather than actual under normal conditions?",
        options: [
          "Subarachnoid space",
          "Subdural space",
          "Epidural space",
          "Subpial space",
        ],
        correct: 1,
        explanation:
          "The subdural space exists only when fluid, blood, or trauma separates the arachnoid from dura; normally it's virtual.",
      },
      {
        text: "Which of the following is not derived from mesenchyme in meninges development?",
        options: [
          "Dura mater",
          "Arachnoid mater",
          "Pia mater",
          "Choroid plexus epithelium",
        ],
        correct: 3,
        explanation:
          "The choroid plexus epithelium is neuroectodermal, while dura, arachnoid, and pia arise from mesenchyme.",
      },
      {
        text: "Which cranial nerve provides sensory innervation to the anterior cranial dura?",
        options: [
          "CN I (Olfactory)",
          "CN II (Optic)",
          "CN V (Trigeminal)",
          "CN VII (Facial)",
        ],
        correct: 2,
        explanation:
          "The trigeminal nerve branches (mainly V1 and V2) supply pain and touch sensation to the anterior and middle cranial fossa dura.",
      },
      {
        text: "The subarachnoid cisterns are formed by:",
        options: [
          "Separation of dura from skull",
          "Expansion of the subarachnoid space at specific locations",
          "Arachnoid villi protrusions",
          "Pia mater folding",
        ],
        correct: 1,
        explanation:
          "Cisterns like cisterna magna are widened areas of the subarachnoid space filled with CSF.",
      },
      {
        text: "Which dural venous sinus drains blood from the superficial cortex into the transverse sinus?",
        options: [
          "Superior sagittal sinus",
          "Inferior sagittal sinus",
          "Cavernous sinus",
          "Sigmoid sinus",
        ],
        correct: 0,
        explanation:
          "The superior sagittal sinus collects blood from cerebral veins and drains posteriorly into the confluence of sinuses, continuing into the transverse sinus.",
      },
      {
        text: "Which meningeal layer is penetrated by the perivascular Virchow-Robin spaces?",
        options: [
          "Pia mater",
          "Arachnoid mater",
          "Dura mater",
          "Endosteal dura",
        ],
        correct: 0,
        explanation:
          "Pia mater accompanies blood vessels into the brain parenchyma as perivascular (Virchow-Robin) spaces.",
      },
      {
        text: "Which sinus lies along the free edge of the falx cerebri?",
        options: [
          "Inferior sagittal sinus",
          "Superior sagittal sinus",
          "Straight sinus",
          "Transverse sinus",
        ],
        correct: 0,
        explanation:
          "The inferior sagittal sinus runs along the free, inferior edge of the falx cerebri above the corpus callosum.",
      },
      {
        text: "Which layer of meninges is primarily affected in a subarachnoid hemorrhage?",
        options: [
          "Dura mater",
          "Arachnoid mater",
          "Pia mater",
          "Endosteal dura",
        ],
        correct: 1,
      },
    ],

    Brain: [
      {
        text: "Which of the following structures is derived from the telencephalon?",
        options: ["Thalamus", "Cerebral cortex", "Midbrain", "Cerebellum"],
        correct: 1,
        explanation:
          "The telencephalon gives rise to the cerebral hemispheres, including the cortex, basal ganglia, and olfactory bulbs. The thalamus arises from the diencephalon, midbrain from mesencephalon, cerebellum from metencephalon.",
      },
      {
        text: "The transverse cerebral fissure separates which two structures?",
        options: [
          "Cerebrum and midbrain",
          "Cerebrum and cerebellum",
          "Frontal lobe and parietal lobe",
          "Temporal lobe and occipital lobe",
        ],
        correct: 1,
        explanation:
          "The transverse fissure (also called the cerebellar tentorial fissure) separates the cerebral hemispheres above from the cerebellum below.",
      },
      {
        text: "Which cranial nerve emerges from the pontomedullary junction?",
        options: ["CN III", "CN V", "CN VI", "CN VIII"],
        correct: 3,
        explanation:
          "CN VIII (vestibulocochlear) emerges laterally at the junction between pons and medulla. CN VI emerges medially from the pons, CN V from mid-pons, CN III from midbrain.",
      },
      {
        text: "The 'insula' of the brain is hidden by which structure?",
        options: [
          "Frontal lobe",
          "Temporal lobe",
          "Parietal lobe",
          "Occipital lobe",
        ],
        correct: 1,
        explanation:
          "The insula lies deep within the lateral sulcus and is covered by the opercula of the frontal, parietal, and temporal lobes.",
      },
      {
        text: "Which artery passes through the lateral sulcus to supply the insular cortex?",
        options: [
          "Anterior cerebral artery",
          "Middle cerebral artery",
          "Posterior cerebral artery",
          "Basilar artery",
        ],
        correct: 1,
        explanation:
          "The MCA courses through the lateral (Sylvian) fissure and supplies the insula, lateral frontal, parietal, and temporal lobes.",
      },
      {
        text: "The corpus callosum connects which of the following?",
        options: [
          "Cerebral cortex with thalamus",
          "Cerebellar hemispheres",
          "Right and left cerebral hemispheres",
          "Frontal lobe with temporal lobe of same hemisphere",
        ],
        correct: 2,
        explanation:
          "Corpus callosum is the largest commissural fiber connecting homologous cortical areas between hemispheres.",
      },
      {
        text: "The calcarine sulcus is primarily associated with which lobe?",
        options: ["Frontal", "Parietal", "Occipital", "Temporal"],
        correct: 2,
        explanation:
          "The calcarine sulcus runs on the medial surface of the occipital lobe and contains the primary visual cortex.",
      },
      {
        text: "Which of the following structures forms the roof of the fourth ventricle?",
        options: [
          "Superior medullary velum",
          "Inferior medullary velum",
          "Corpus callosum",
          "Fornix",
        ],
        correct: 0,
        explanation:
          "The superior medullary velum forms the dorsal roof of the upper part of the fourth ventricle; the inferior velum forms the lower part.",
      },
      {
        text: "The primary motor cortex is located in which gyrus?",
        options: [
          "Superior frontal gyrus",
          "Precentral gyrus",
          "Postcentral gyrus",
          "Cingulate gyrus",
        ],
        correct: 1,
        explanation:
          "The precentral gyrus in the frontal lobe contains Brodmann area 4, responsible for voluntary motor control.",
      },
      {
        text: "Which structure separates the frontal lobe from the parietal lobe?",
        options: [
          "Central sulcus",
          "Lateral sulcus",
          "Parieto-occipital sulcus",
          "Calcarine sulcus",
        ],
        correct: 0,
        explanation:
          "The central sulcus (Rolandic fissure) separates precentral (frontal) and postcentral (parietal) gyri.",
      },
      {
        text: "The mammillary bodies are part of which brain region?",
        options: [
          "Telencephalon",
          "Diencephalon",
          "Mesencephalon",
          "Metencephalon",
        ],
        correct: 1,
        explanation:
          "Mammillary bodies are part of the hypothalamus (diencephalon) and participate in memory circuits.",
      },
      {
        text: "Which of the following is NOT part of the basal ganglia?",
        options: [
          "Caudate nucleus",
          "Putamen",
          "Globus pallidus",
          "Substantia nigra",
        ],
        correct: 3,
        explanation:
          "The basal ganglia proper include the caudate, putamen, and globus pallidus. Substantia nigra is in the midbrain and functionally related but anatomically distinct.",
      },
      {
        text: "Which sinus runs along the superior border of the falx cerebri?",
        options: [
          "Cavernous sinus",
          "Superior sagittal sinus",
          "Inferior sagittal sinus",
          "Straight sinus",
        ],
        correct: 1,
        explanation:
          "The superior sagittal sinus is located in the superior margin of the falx cerebri and drains blood from the cerebral hemispheres.",
      },
      {
        text: "The internal capsule lies between which two structures?",
        options: [
          "Thalamus and caudate nucleus",
          "Thalamus and lentiform nucleus",
          "Caudate and putamen",
          "Cerebellum and pons",
        ],
        correct: 1,
        explanation:
          "The internal capsule is a white matter tract between the thalamus medially and lentiform nucleus laterally.",
      },
      {
        text: "Which cranial nerve fibers pass through the middle cerebellar peduncle?",
        options: [
          "Corticospinal fibers",
          "Corticopontine fibers",
          "Pontocerebellar fibers",
          "Spinothalamic fibers",
        ],
        correct: 2,
        explanation:
          "The middle cerebellar peduncle carries fibers from the contralateral pontine nuclei into the cerebellum.",
      },
      {
        text: "Which structure separates the cerebellar hemispheres?",
        options: [
          "Vermis",
          "Tentorium cerebelli",
          "Falx cerebri",
          "Corpus callosum",
        ],
        correct: 0,
        explanation:
          "The vermis is the midline structure connecting the two cerebellar hemispheres.",
      },
      {
        text: "Which lobe contains the primary auditory cortex?",
        options: ["Frontal", "Temporal", "Parietal", "Occipital"],
        correct: 1,
        explanation:
          "The transverse gyri of Heschl, in the superior temporal gyrus, house the primary auditory cortex.",
      },
      {
        text: "Which nerve emerges between the midbrain and pons?",
        options: ["CN III", "CN IV", "CN V", "CN VI"],
        correct: 0,
        explanation:
          "The oculomotor nerve emerges from the interpeduncular fossa, between cerebral peduncles of the midbrain. CN IV emerges dorsally from the midbrain.",
      },
      {
        text: "Which of the following is the lateral boundary of the third ventricle?",
        options: [
          "Thalamus",
          "Hypothalamus",
          "Pineal gland",
          "Superior colliculus",
        ],
        correct: 0,
        explanation:
          "The third ventricle lies in the midline between the two thalami.",
      },
      {
        text: "Which gyrus is primarily responsible for somatosensory processing?",
        options: [
          "Precentral gyrus",
          "Postcentral gyrus",
          "Superior frontal gyrus",
          "Cingulate gyrus",
        ],
        correct: 1,
        explanation:
          "The postcentral gyrus in the parietal lobe contains the primary somatosensory cortex (Brodmann areas 1, 2, 3).",
      },
    ],

    "Orbital Region and Eye": [
      {
        text: "The superior orbital fissure transmits all of the following EXCEPT:",
        options: [
          "Oculomotor nerve (CN III)",
          "Trochlear nerve (CN IV)",
          "Ophthalmic vein",
          "Optic nerve (CN II)",
        ],
        correct: 3,
        explanation:
          "The optic nerve passes through the optic canal, not the superior orbital fissure. The fissure transmits CN III, IV, V1, VI, and superior ophthalmic vein.",
      },
      {
        text: "The lacrimal gland receives parasympathetic fibers via which nerve?",
        options: [
          "Zygomatic nerve",
          "Greater petrosal nerve",
          "Lacrimal nerve",
          "Short ciliary nerves",
        ],
        correct: 1,
        explanation:
          "Parasympathetic fibers from the facial nerve reach the lacrimal gland via the greater petrosal nerve, then synapse in the pterygopalatine ganglion, and reach the gland through zygomatic and lacrimal nerves.",
      },
      {
        text: "Which structure forms the medial wall of the orbit?",
        options: [
          "Frontal bone",
          "Zygomatic bone",
          "Maxilla and ethmoid",
          "Sphenoid body",
        ],
        correct: 2,
        explanation:
          "The medial wall is mainly ethmoid (lamina papyracea), lacrimal, maxilla, and small portion of sphenoid. Frontal and zygomatic bones are lateral/superior.",
      },
      {
        text: "The central retinal artery enters the optic nerve approximately:",
        options: [
          "5 mm posterior to the globe",
          "At the optic disc",
          "Within the sclera near limbus",
          "Through the superior orbital fissure",
        ],
        correct: 1,
        explanation:
          "The central retinal artery pierces the optic nerve and enters at the optic disc to supply the inner retina.",
      },
      {
        text: "Which extraocular muscle is NOT supplied by the oculomotor nerve (CN III)?",
        options: [
          "Superior rectus",
          "Lateral rectus",
          "Medial rectus",
          "Inferior oblique",
        ],
        correct: 1,
        explanation:
          "Lateral rectus is supplied by abducens (CN VI). CN III supplies all other extraocular muscles except lateral rectus and superior oblique.",
      },
      {
        text: "The 'blowout fracture' of the orbit usually involves which bone?",
        options: [
          "Sphenoid",
          "Maxillary orbital floor",
          "Zygomatic lateral wall",
          "Frontal bone",
        ],
        correct: 1,
        explanation:
          "Orbital floor is thin, formed mainly by maxilla, prone to blowout fractures from blunt trauma.",
      },
      {
        text: "The ophthalmic artery is a branch of:",
        options: [
          "External carotid artery",
          "Internal carotid artery",
          "Facial artery",
          "Maxillary artery",
        ],
        correct: 1,
        explanation:
          "Ophthalmic artery arises from the internal carotid artery as it exits the cavernous sinus.",
      },
      {
        text: "The ciliary ganglion lies:",
        options: [
          "Above the superior rectus muscle",
          "Between lateral rectus and optic nerve",
          "Lateral to optic nerve near the posterior orbit",
          "Medial to the optic nerve near the apex",
        ],
        correct: 2,
        explanation:
          "The ciliary ganglion is located posterolateral to the optic nerve, close to the sphenoid bone.",
      },
      {
        text: "Which muscle of the eyelid is smooth and under sympathetic control?",
        options: [
          "Levator palpebrae superioris",
          "Orbicularis oculi",
          "Superior tarsal muscle",
          "Mueller's muscle",
        ],
        correct: 3,
        explanation:
          "The superior tarsal (Müller's) muscle is smooth muscle controlled by sympathetic fibers, assisting eyelid elevation.",
      },
      {
        text: "Which structure passes through both the optic canal and the superior orbital fissure?",
        options: [
          "Oculomotor nerve",
          "Ophthalmic artery",
          "Optic nerve",
          "None",
        ],
        correct: 3,
        explanation:
          "There is no structure that passes through both; optic nerve and ophthalmic artery pass only through the optic canal.",
      },
      {
        text: "The venous drainage of the orbit communicates with the cranial cavity via:",
        options: [
          "Facial vein",
          "Pterygoid plexus",
          "Cavernous sinus",
          "External jugular",
        ],
        correct: 2,
        explanation:
          "The superior ophthalmic vein communicates with the cavernous sinus, forming a potential route for intracranial infections.",
      },
      {
        text: "Which ligament forms the lateral orbital margin?",
        options: [
          "Check ligament of lateral rectus",
          "Lateral palpebral ligament",
          "Medial palpebral ligament",
          "Suspensory ligament of Lockwood",
        ],
        correct: 1,
        explanation:
          "The lateral palpebral ligament connects the orbital rim to lateral canthus, forming the lateral margin.",
      },
      {
        text: "The optic nerve sheath is an extension of:",
        options: [
          "Sclera",
          "Dura, arachnoid, and pia mater",
          "Conjunctiva",
          "Periosteum",
        ],
        correct: 1,
        explanation:
          "The optic nerve sheath is continuous with cranial meninges (dura, arachnoid, pia).",
      },
      {
        text: "Which of the following is a depressor of the eye in primary gaze?",
        options: [
          "Superior rectus",
          "Inferior rectus",
          "Superior oblique",
          "Lateral rectus",
        ],
        correct: 1,
        explanation:
          "Inferior rectus depresses the eye in primary position; superior oblique depresses when adducted.",
      },
      {
        text: "The annulus of Zinn gives origin to all EXCEPT:",
        options: [
          "Medial rectus",
          "Lateral rectus",
          "Superior rectus",
          "Superior oblique",
        ],
        correct: 3,
        explanation:
          "Superior oblique originates from the sphenoid above the annulus, not from the common tendinous ring.",
      },
      {
        text: "Which nerve supplies the cornea for the blink reflex?",
        options: ["CN II", "CN V1 (nasociliary branch)", "CN III", "CN VII"],
        correct: 1,
        explanation:
          "Corneal reflex afferent is via nasociliary branch of ophthalmic nerve (V1); efferent is facial nerve (orbicularis oculi).",
      },
      {
        text: "Which orbital wall is thinnest and most prone to fractures?",
        options: ["Lateral wall", "Floor", "Roof", "Medial wall"],
        correct: 1,
        explanation:
          "The orbital floor is thin and fragile (maxilla and palatine), commonly fractured.",
      },
      {
        text: "The optic disc lacks photoreceptors because:",
        options: [
          "Retinal layers are thickest there",
          "It contains the fovea",
          "It is where ganglion axons exit the eye",
          "Choroid is absent",
        ],
        correct: 2,
        explanation:
          "The optic disc (blind spot) lacks photoreceptors because it is the exit for optic nerve fibers.",
      },
      {
        text: "Which extraocular muscle produces intorsion of the eye?",
        options: [
          "Superior rectus",
          "Superior oblique",
          "Inferior rectus",
          "Lateral rectus",
        ],
        correct: 1,
        explanation:
          "Superior oblique intorts the eye (rotates top of eye medially); inferior oblique extorts.",
      },
      {
        text: "The lacrimal puncta open into which structure?",
        options: [
          "Lacrimal sac",
          "Nasolacrimal duct",
          "Canaliculi",
          "Conjunctival fornix",
        ],
        correct: 2,
        explanation:
          "Lacrimal puncta drain tears into the superior and inferior canaliculi, which lead to the lacrimal sac and then nasolacrimal duct.",
      },
    ],

    "Oral Region": [
      {
        text: "Which of the following muscles is NOT directly involved in the elevation of the upper lip?",
        options: [
          "Levator labii superioris",
          "Zygomaticus minor",
          "Levator anguli oris",
          "Depressor anguli oris",
        ],
        correct: 3,
        explanation:
          "The depressor anguli oris pulls the corner of the mouth downward; it does not elevate the upper lip. The others elevate or assist in lifting the upper lip.",
      },
      {
        text: "Which artery supplies the gingiva of the upper anterior teeth?",
        options: [
          "Superior alveolar branch of maxillary artery",
          "Inferior alveolar artery",
          "Buccal branch of facial artery",
          "Lingual artery",
        ],
        correct: 0,
        explanation:
          "The superior alveolar arteries (anterior, middle, posterior) supply the maxillary teeth and associated gingiva.",
      },
      {
        text: "The sublingual gland opens into the oral cavity through which duct?",
        options: [
          "Wharton's duct",
          "Bartholin's duct",
          "Stensen's duct",
          "Rivinus' ducts",
        ],
        correct: 3,
        explanation:
          "The sublingual gland has multiple small ducts (ducts of Rivinus) that open along the sublingual fold. Wharton's duct is for the submandibular gland.",
      },
      {
        text: "Which of the following nerves provides general sensation to the anterior two-thirds of the tongue?",
        options: [
          "Glossopharyngeal nerve",
          "Lingual nerve",
          "Hypoglossal nerve",
          "Chorda tympani",
        ],
        correct: 1,
        explanation:
          "The lingual nerve (branch of mandibular nerve, CN V3) carries general sensation. Chorda tympani carries taste, not general sensation.",
      },
      {
        text: "The parotid duct (Stensen's duct) opens into the oral cavity opposite which tooth?",
        options: [
          "Maxillary first premolar",
          "Maxillary second molar",
          "Mandibular first molar",
          "Mandibular canine",
        ],
        correct: 1,
        explanation:
          "Stensen's duct pierces the buccinator and opens opposite the maxillary second molar.",
      },
      {
        text: "Which structure forms the posterior boundary of the oral cavity proper?",
        options: ["Soft palate", "Hard palate", "Tongue", "Labial frenulum"],
        correct: 0,
        explanation:
          "The soft palate marks the boundary between the oral cavity proper and the oropharynx.",
      },
      {
        text: "Which of the following muscles is responsible for protrusion of the tongue?",
        options: [
          "Styloglossus",
          "Hyoglossus",
          "Genioglossus",
          "Palatoglossus",
        ],
        correct: 2,
        explanation:
          "Genioglossus fibers pull the tongue forward; styloglossus retracts and elevates, hyoglossus depresses, and palatoglossus elevates the posterior tongue.",
      },
      {
        text: "The lingual artery is a branch of which major artery?",
        options: [
          "Maxillary artery",
          "External carotid artery",
          "Facial artery",
          "Internal carotid artery",
        ],
        correct: 1,
        explanation:
          "The lingual artery arises from the external carotid and supplies the tongue and floor of the mouth.",
      },
      {
        text: "Which papillae of the tongue contain taste buds and are arranged in a V-shaped row?",
        options: [
          "Filiform papillae",
          "Fungiform papillae",
          "Circumvallate papillae",
          "Foliate papillae",
        ],
        correct: 2,
        explanation:
          "Circumvallate papillae, 8–12 in number, are located anterior to the sulcus terminalis and contain taste buds.",
      },
      {
        text: "Which cranial nerve innervates the intrinsic muscles of the tongue?",
        options: ["CN V", "CN VII", "CN IX", "CN XII"],
        correct: 3,
        explanation:
          "All intrinsic and most extrinsic tongue muscles are supplied by CN XII, except palatoglossus (CN X).",
      },
      {
        text: "The submandibular gland is located in which anatomical space?",
        options: [
          "Sublingual space",
          "Submandibular triangle",
          "Pterygopalatine fossa",
          "Buccal space",
        ],
        correct: 1,
        explanation:
          "The submandibular gland occupies the submandibular triangle, bordered by the mandible and digastric muscles.",
      },
      {
        text: "Which nerve carries taste sensation from the anterior two-thirds of the tongue?",
        options: [
          "Lingual nerve",
          "Chorda tympani",
          "Glossopharyngeal nerve",
          "Vagus nerve",
        ],
        correct: 1,
        explanation:
          "Chorda tympani (branch of CN VII) joins the lingual nerve to carry taste fibers.",
      },
      {
        text: "The pterygomandibular raphe serves as an attachment for which two muscles?",
        options: [
          "Buccinator and superior constrictor",
          "Orbicularis oris and masseter",
          "Styloglossus and palatoglossus",
          "Genioglossus and hyoglossus",
        ],
        correct: 0,
        explanation:
          "The pterygomandibular raphe is a fibrous band between the pterygoid hamulus and mandible serving as an origin for these muscles.",
      },
      {
        text: "Which vein forms the deep venous drainage of the tongue?",
        options: [
          "Lingual vein",
          "Facial vein",
          "Retromandibular vein",
          "Pharyngeal venous plexus",
        ],
        correct: 0,
        explanation:
          "Deep lingual veins drain the tongue and connect to the internal jugular vein.",
      },
      {
        text: "The anterior tonsillar pillar is formed by which muscle?",
        options: [
          "Palatopharyngeus",
          "Palatoglossus",
          "Tensor veli palatini",
          "Levator veli palatini",
        ],
        correct: 1,
        explanation:
          "The palatoglossus muscle forms the anterior faucial pillar; palatopharyngeus forms the posterior pillar.",
      },
      {
        text: "Which lymph nodes primarily drain the tip of the tongue?",
        options: [
          "Submandibular nodes",
          "Submental nodes",
          "Jugulodigastric nodes",
          "Retropharyngeal nodes",
        ],
        correct: 1,
        explanation:
          "The tip of the tongue drains mainly into submental lymph nodes; the rest primarily drains into submandibular nodes.",
      },
      {
        text: "Which structure separates the oral vestibule from the oral cavity proper?",
        options: [
          "Teeth and alveolar ridges",
          "Tongue",
          "Labial frenulum",
          "Soft palate",
        ],
        correct: 0,
        explanation:
          "The vestibule lies between the lips/cheeks and the alveolar processes/teeth.",
      },
      {
        text: "Which nerve passes through the submandibular gland but does not innervate it?",
        options: [
          "Lingual nerve",
          "Hypoglossal nerve",
          "Chorda tympani",
          "Glossopharyngeal nerve",
        ],
        correct: 2,
        explanation:
          "Chorda tympani runs through the gland, carrying parasympathetic fibers to the submandibular and sublingual glands but doesn't supply motor innervation.",
      },
      {
        text: "The frenulum of the tongue limits which movement?",
        options: ["Elevation", "Retraction", "Protrusion", "Lateral deviation"],
        correct: 2,
        explanation:
          "A short lingual frenulum (ankyloglossia) restricts protrusion of the tongue.",
      },
      {
        text: "Which artery is commonly used in flap surgery for the anterior floor of the mouth?",
        options: [
          "Submental artery",
          "Lingual artery",
          "Facial artery",
          "Inferior alveolar artery",
        ],
        correct: 0,
        explanation:
          "The submental artery (branch of facial artery) supplies the anterior floor of the mouth and is often used in reconstructive flaps.",
      },
    ],

    Nose: [
      {
        text: "The nasal septum receives contributions from all the following bones except:",
        options: ["Vomer", "Ethmoid", "Palatine", "Maxilla"],
        correct: 3,
        explanation:
          "The bony nasal septum is formed by the perpendicular plate of the ethmoid, the vomer, and the palatine (horizontal plate), but the maxilla contributes to the floor and lateral walls, not the septum.",
      },
      {
        text: "Which of the following is not a component of the lateral nasal wall?",
        options: [
          "Inferior concha",
          "Superior concha",
          "Middle concha",
          "Crista galli",
        ],
        correct: 3,
        explanation:
          "Crista galli is part of the ethmoid bone but is located in the anterior cranial fossa, not the lateral nasal wall.",
      },
      {
        text: "The sphenopalatine foramen transmits:",
        options: [
          "Nasopalatine nerve and sphenopalatine artery",
          "Olfactory nerve filaments",
          "Greater palatine nerve",
          "Infraorbital nerve",
        ],
        correct: 0,
        explanation:
          "The sphenopalatine foramen connects the pterygopalatine fossa with the nasal cavity, transmitting the nasopalatine nerve and sphenopalatine vessels.",
      },
      {
        text: "Which meatus receives the duct of the paranasal maxillary sinus?",
        options: [
          "Superior meatus",
          "Middle meatus",
          "Inferior meatus",
          "Nasopharyngeal meatus",
        ],
        correct: 1,
        explanation:
          "The maxillary sinus drains into the semilunar hiatus in the middle meatus.",
      },
      {
        text: "Which of the following is not a boundary of the nasal cavity?",
        options: [
          "Roof: nasal, frontal, and sphenoid bones",
          "Floor: palatine and maxilla",
          "Lateral wall: ethmoid, maxilla, palatine, inferior concha",
          "Posterior wall: cribriform plate of ethmoid",
        ],
        correct: 3,
        explanation:
          "The cribriform plate forms the roof, not the posterior wall. The posterior nasal aperture (choanae) forms the posterior boundary.",
      },
      {
        text: "The Kiesselbach's plexus is located:",
        options: [
          "Inferior meatus",
          "Superior concha",
          "Nasal septum",
          "Lateral wall of middle meatus",
        ],
        correct: 2,
        explanation:
          "Kiesselbach's area is on the anterior nasal septum, a common site for epistaxis due to arterial anastomosis.",
      },
      {
        text: "Which nerve provides general sensation to the anterior part of the nasal septum?",
        options: [
          "Olfactory nerve",
          "Nasopalatine nerve",
          "Anterior ethmoidal nerve",
          "Posterior superior lateral nasal nerve",
        ],
        correct: 2,
        explanation:
          "The anterior ethmoidal nerve (branch of V1) supplies the anterosuperior septum and lateral wall; the nasopalatine supplies the posteroinferior septum.",
      },
      {
        text: "The vomerine crest articulates with:",
        options: [
          "Palatine bone",
          "Maxilla",
          "Perpendicular plate of ethmoid",
          "Sphenoid bone",
        ],
        correct: 2,
        explanation:
          "The vomer's superior border has a sickle-shaped crest articulating with the ethmoid's perpendicular plate.",
      },
      {
        text: "Which sinus drains into the superior meatus?",
        options: [
          "Maxillary sinus",
          "Anterior ethmoidal sinus",
          "Sphenoidal sinus",
          "Frontal sinus",
        ],
        correct: 1,
        explanation:
          "The superior meatus mainly receives posterior ethmoidal air cells, though some anterior ethmoidal cells can also drain here.",
      },
      {
        text: "The nasolacrimal duct opens into which structure?",
        options: [
          "Superior meatus",
          "Inferior meatus",
          "Middle meatus",
          "Sphenoethmoidal recess",
        ],
        correct: 1,
        explanation:
          "The nasolacrimal duct drains tears into the inferior meatus below the inferior concha.",
      },
      {
        text: "Which of the following does not form part of the nasal roof?",
        options: ["Nasal bone", "Frontal bone", "Sphenoid bone", "Vomer"],
        correct: 3,
        explanation:
          "The vomer forms the septum, not the roof. The roof includes nasal, frontal, cribriform plate of ethmoid, and sphenoid bones.",
      },
      {
        text: "The olfactory epithelium is located:",
        options: [
          "Inferior concha",
          "Superior concha and upper septum",
          "Middle meatus",
          "Nasal vestibule",
        ],
        correct: 1,
        explanation:
          "The olfactory mucosa is in the superior nasal cavity, lining the superior concha and the superior portion of the septum.",
      },
      {
        text: "The posterior nasal apertures (choanae) open into:",
        options: ["Nasopharynx", "Oropharynx", "Laryngopharynx", "Middle ear"],
        correct: 0,
        explanation:
          "The choanae are the posterior openings of the nasal cavity, communicating with the nasopharynx.",
      },
      {
        text: "The middle meatus contains the semilunar hiatus. Which structures drain here?",
        options: [
          "Frontal, maxillary, anterior ethmoidal sinuses",
          "Sphenoidal sinus",
          "Posterior ethmoidal sinus",
          "Nasolacrimal duct",
        ],
        correct: 0,
        explanation:
          "The semilunar hiatus receives frontal sinus, maxillary sinus, and anterior ethmoid cells.",
      },
      {
        text: "The piriform aperture is formed by:",
        options: [
          "Nasal, maxilla, and frontal bones",
          "Maxilla and nasal bones",
          "Vomer and palatine bones",
          "Sphenoid and ethmoid bones",
        ],
        correct: 1,
        explanation:
          "The piriform aperture is the bony anterior opening of the nasal cavity, formed by the nasal bones and maxilla.",
      },
      {
        text: "The sphenopalatine artery is a branch of:",
        options: [
          "Facial artery",
          "Maxillary artery",
          "Ophthalmic artery",
          "Ascending pharyngeal artery",
        ],
        correct: 1,
        explanation:
          "The sphenopalatine artery, a branch of the maxillary artery, enters via the sphenopalatine foramen to supply the nasal cavity.",
      },
      {
        text: "Which structure forms the posterior part of the lateral wall?",
        options: ["Maxilla", "Palatine bone", "Lacrimal bone", "Nasal bone"],
        correct: 1,
        explanation:
          "The perpendicular plate of the palatine contributes to the posteroinferior lateral wall.",
      },
      {
        text: "Which nerve carries parasympathetic fibers to the nasal mucosa?",
        options: [
          "Anterior ethmoidal nerve",
          "Greater petrosal nerve",
          "Olfactory nerve",
          "Trigeminal nerve",
        ],
        correct: 1,
        explanation:
          "Parasympathetic fibers from the facial nerve via the greater petrosal nerve reach the nasal mucosa via the pterygopalatine ganglion.",
      },
      {
        text: "The inferior nasal concha is a separate bone. Which artery supplies it?",
        options: [
          "Anterior ethmoidal artery",
          "Sphenopalatine artery",
          "Facial artery",
          "Ophthalmic artery",
        ],
        correct: 1,
        explanation:
          "The inferior concha is supplied mainly by branches of the sphenopalatine artery.",
      },
      {
        text: "Which of the following is true regarding the nasal vestibule?",
        options: [
          "Lined by olfactory epithelium",
          "Contains vibrissae (hairs)",
          "Continuous with the nasopharynx",
          "Drains paranasal sinuses",
        ],
        correct: 1,
        explanation:
          "The nasal vestibule is lined by skin with coarse hairs (vibrissae) and guards against large particles; it does not contain olfactory mucosa.",
      },
    ],

    Ear: [
      {
        text: "Which structure forms the bony labyrinth of the inner ear?",
        options: [
          "Tympanic membrane",
          "Cochlea, vestibule, semicircular canals",
          "External auditory canal",
          "Eustachian tube",
        ],
        correct: 1,
        explanation:
          "The bony labyrinth consists of the cochlea, vestibule, and semicircular canals, housing the membranous labyrinth. Tympanic membrane and Eustachian tube are part of the middle ear.",
      },
      {
        text: "The tensor tympani muscle is innervated by which cranial nerve?",
        options: [
          "Facial nerve (CN VII)",
          "Mandibular nerve (CN V3)",
          "Glossopharyngeal nerve (CN IX)",
          "Vagus nerve (CN X)",
        ],
        correct: 1,
        explanation:
          "Tensor tympani is supplied by a branch of CN V3, which dampens sound by tensing the tympanic membrane.",
      },
      {
        text: "Which part of the cochlea is primarily responsible for detecting high-frequency sounds?",
        options: ["Apex", "Base", "Vestibule", "Semicircular canals"],
        correct: 1,
        explanation:
          "The base of the cochlea is stiff and responds to high-frequency sounds, whereas the apex responds to low-frequency sounds.",
      },
      {
        text: "The stapedius muscle functions to:",
        options: [
          "Transmit sound vibrations",
          "Dampen excessive movement of the stapes",
          "Open the Eustachian tube",
          "Vibrate the tympanic membrane",
        ],
        correct: 1,
        explanation:
          "The stapedius, innervated by CN VII, stabilizes the stapes to protect the inner ear from loud noises.",
      },
      {
        text: "Which structure connects the middle ear to the nasopharynx?",
        options: [
          "External acoustic meatus",
          "Auditory (Eustachian) tube",
          "Cochlear duct",
          "Oval window",
        ],
        correct: 1,
        explanation:
          "The Eustachian tube equalizes pressure between the middle ear and the nasopharynx.",
      },
      {
        text: "The promontory of the middle ear is formed by which structure?",
        options: ["Basal turn of cochlea", "Malleus", "Incus", "Stapes"],
        correct: 0,
        explanation:
          "The promontory is the bony eminence caused by the first turn of the cochlea projecting into the middle ear cavity.",
      },
      {
        text: "Which artery primarily supplies the inner ear?",
        options: [
          "Posterior auricular artery",
          "Labyrinthine artery",
          "Superficial temporal artery",
          "Maxillary artery",
        ],
        correct: 1,
        explanation:
          "The labyrinthine artery, usually a branch of the anterior inferior cerebellar artery, supplies the cochlea and vestibular apparatus.",
      },
      {
        text: "The oval window transmits vibrations from which ossicle?",
        options: ["Malleus", "Incus", "Stapes", "None of the above"],
        correct: 2,
        explanation:
          "The stapes footplate fits into the oval window, transmitting sound from the middle ear to the inner ear fluids.",
      },
      {
        text: "The bony canal transmitting the facial nerve through the temporal bone is called:",
        options: [
          "External auditory meatus",
          "Cochlear canal",
          "Facial canal",
          "Semicircular canal",
        ],
        correct: 2,
        explanation:
          "The facial canal (fallopian canal) houses CN VII as it passes through the temporal bone.",
      },
      {
        text: "Which structure separates the external ear from the middle ear?",
        options: [
          "Oval window",
          "Tympanic membrane",
          "Round window",
          "Cochlear duct",
        ],
        correct: 1,
        explanation:
          "The tympanic membrane is the boundary between the external auditory canal and middle ear.",
      },
      {
        text: "Which structure forms the lateral wall of the middle ear cavity?",
        options: [
          "Tegmen tympani",
          "Tympanic membrane",
          "Promontory",
          "Mastoid antrum",
        ],
        correct: 1,
        explanation:
          "The tympanic membrane is the lateral wall, while the tegmen tympani forms the roof.",
      },
      {
        text: "The cochlear duct lies within which part of the bony labyrinth?",
        options: [
          "Vestibule",
          "Cochlea",
          "Semicircular canals",
          "Tympanic cavity",
        ],
        correct: 1,
        explanation:
          "The cochlear duct is the membranous structure inside the cochlea, containing the organ of Corti.",
      },
      {
        text: "The apex of the cochlea points toward which structure?",
        options: [
          "Tympanic membrane",
          "Vestibule",
          "Helicotrema",
          "Oval window",
        ],
        correct: 2,
        explanation:
          "The apex ends at the helicotrema, which allows communication between the scala tympani and scala vestibuli.",
      },
      {
        text: "Which ossicle articulates with the incus laterally?",
        options: ["Stapes", "Malleus", "Tympanic membrane", "None"],
        correct: 1,
        explanation:
          "The malleus articulates with the incus; the incus then articulates medially with the stapes.",
      },
      {
        text: "The bony prominence on the medial wall of the middle ear caused by the facial nerve is called:",
        options: ["Pyramid", "Promontory", "Tegmen", "Cochlear crest"],
        correct: 0,
        explanation:
          "The pyramid (posterior wall) houses the stapedius muscle and is a landmark for the facial nerve in the middle ear.",
      },
      {
        text: "The auriculotemporal nerve supplies which part of the ear?",
        options: [
          "External auditory canal and auricle",
          "Tympanic membrane only",
          "Middle ear cavity",
          "Cochlea",
        ],
        correct: 0,
        explanation:
          "CN V3 branch (auriculotemporal nerve) supplies sensation to the external ear and lateral tympanic membrane.",
      },
      {
        text: "The round window is important because:",
        options: [
          "It transmits sound to ossicles",
          "It equalizes pressure in the cochlear fluid",
          "It forms the lateral wall of the middle ear",
          "It houses hair cells",
        ],
        correct: 1,
        explanation:
          "The round window bulges out to accommodate incompressible fluid movement within the cochlea.",
      },
      {
        text: "Which semicircular canal lies in the horizontal plane?",
        options: ["Anterior", "Posterior", "Lateral", "Cochlear"],
        correct: 2,
        explanation:
          "The lateral (horizontal) semicircular canal detects rotational movements in the horizontal plane.",
      },
      {
        text: "The roof of the tympanic cavity is called:",
        options: [
          "Tegmen tympani",
          "Promontory",
          "Mastoid antrum",
          "Pyramidal eminence",
        ],
        correct: 0,
        explanation:
          "The tegmen tympani forms a thin bony roof separating the middle ear from the middle cranial fossa.",
      },
      {
        text: "The chorda tympani nerve passes through which structure?",
        options: [
          "Cochlea",
          "Tympanic cavity",
          "External auditory canal",
          "Semicircular canals",
        ],
        correct: 1,
        explanation:
          "The chorda tympani (branch of CN VII) passes through the middle ear, running between the malleus and incus, carrying taste fibers from anterior 2/3 of the tongue.",
      },
    ],
  },
  neck: {
    "Bones of Neck": [
      {
        text: "Which of the following cervical vertebrae typically lacks a vertebral body?",
        options: ["C1", "C2", "C3", "C7"],
        correct: 0,
        explanation:
          "The atlas (C1) has no vertebral body; it consists of anterior and posterior arches and lateral masses to articulate with the occipital condyles.",
      },
      {
        text: "Which cervical vertebra is characterized by a bifid spinous process and a prominent transverse foramen?",
        options: ["C1", "C2", "C3-C6", "C7"],
        correct: 2,
        explanation:
          "Typical cervical vertebrae (C3-C6) have bifid spinous processes and transverse foramina for the vertebral artery.",
      },
      {
        text: "The dens (odontoid process) is a unique feature of which cervical vertebra?",
        options: ["C1", "C2", "C3", "C7"],
        correct: 1,
        explanation:
          "The axis (C2) has the dens, which articulates with the anterior arch of C1 to allow rotation of the head.",
      },
      {
        text: "Which ligament attaches to the posterior tubercle of the atlas?",
        options: [
          "Alar ligament",
          "Transverse ligament of atlas",
          "Nuchal ligament",
          "Cruciate ligament",
        ],
        correct: 1,
        explanation:
          "The transverse ligament passes behind the dens, attaching to the lateral masses of C1, stabilizing C1-C2.",
      },
      {
        text: "Which cervical vertebra is considered the vertebral prominens?",
        options: ["C5", "C6", "C7", "C2"],
        correct: 2,
        explanation:
          "C7 has a long, non-bifid spinous process that is easily palpable at the base of the neck.",
      },
      {
        text: "Which of the following is NOT transmitted through the transverse foramen of cervical vertebrae?",
        options: [
          "Vertebral artery",
          "Vertebral vein",
          "Sympathetic nerve fibers",
          "Spinal cord",
        ],
        correct: 3,
        explanation:
          "The spinal cord passes through the vertebral canal, not the transverse foramen.",
      },
      {
        text: "Which bone of the neck does NOT articulate with any other bone?",
        options: ["Hyoid", "C1", "C2", "Thyroid cartilage"],
        correct: 0,
        explanation:
          "The hyoid bone is free-floating; it is suspended by muscles and ligaments and does not form joints with other bones.",
      },
      {
        text: "The anterior tubercle of the atlas is a site of attachment for which structure?",
        options: [
          "Longus colli muscle",
          "Rectus capitis anterior muscle",
          "Alar ligament",
          "Nuchal ligament",
        ],
        correct: 1,
        explanation:
          "The anterior tubercle of C1 provides an attachment for rectus capitis anterior and the anterior longitudinal ligament.",
      },
      {
        text: "Which feature distinguishes C7 from C6 despite both having transverse foramina?",
        options: [
          "Bifid spinous process",
          "Vertebral artery passage",
          "Long, palpable spinous process",
          "Small body",
        ],
        correct: 2,
        explanation:
          "C7's spinous process is longer and not bifid; C6 is shorter and more typical of cervical vertebrae.",
      },
      {
        text: "Which of the following bones contributes to the bony boundaries of the pharynx?",
        options: ["Hyoid", "Atlas", "Axis", "Sternum"],
        correct: 0,
        explanation:
          "The hyoid supports the tongue and forms part of the floor of the mouth and pharynx.",
      },
      {
        text: "Which part of the axis articulates with the atlas to form the median atlanto-axial joint?",
        options: [
          "Spinous process",
          "Transverse process",
          "Dens (odontoid process)",
          "Body",
        ],
        correct: 2,
        explanation:
          "The dens projects superiorly into the atlas and is stabilized by the transverse ligament.",
      },
      {
        text: "Which cervical vertebrae have uncinate processes?",
        options: ["C1-C2", "C3-C7", "C5-C7", "Only C7"],
        correct: 1,
        explanation:
          "Uncinate processes on the lateral edges of the superior surface of the vertebral bodies form uncovertebral joints (of Luschka) for stability.",
      },
      {
        text: "Which of the following is a primary ossification center of the hyoid bone?",
        options: ["Greater horn", "Body", "Lesser horn", "All of the above"],
        correct: 3,
        explanation:
          "The hyoid develops from multiple centers: body, greater and lesser horns, which ossify independently.",
      },
      {
        text: "Which ligament prevents posterior displacement of the dens?",
        options: [
          "Cruciate ligament (transverse part)",
          "Alar ligament",
          "Apical ligament",
          "Nuchal ligament",
        ],
        correct: 0,
        explanation:
          "The transverse ligament of the atlas, part of the cruciate ligament, holds the dens against the anterior arch of C1.",
      },
      {
        text: "Which cervical vertebra typically shows the greatest variation in morphology?",
        options: ["C1", "C2", "C7", "C6"],
        correct: 2,
        explanation:
          "C7 often varies in the length and shape of its spinous process and presence of cervical ribs.",
      },
      {
        text: "Which cervical vertebra has a facet for articulation with the occipital condyles?",
        options: ["C1", "C2", "C3", "C7"],
        correct: 0,
        explanation:
          "The superior articular facets of the atlas articulate with the occipital condyles of the skull, forming the atlanto-occipital joint.",
      },
      {
        text: "The stylohyoid ligament extends from which structure to the hyoid bone?",
        options: [
          "Mastoid process",
          "Styloid process of temporal bone",
          "Occipital protuberance",
          "Thyroid cartilage",
        ],
        correct: 1,
        explanation:
          "The stylohyoid ligament runs from the temporal styloid process to the lesser horn of the hyoid.",
      },
      {
        text: "Which cervical vertebra has the largest vertebral foramen?",
        options: ["C1", "C2", "C3", "C7"],
        correct: 0,
        explanation:
          "The atlas has a large vertebral foramen to accommodate the medulla oblongata and vertebral arteries.",
      },
      {
        text: "Which bony landmark of the hyoid serves as the attachment for the middle pharyngeal constrictor?",
        options: ["Body", "Greater horn", "Lesser horn", "Superior border"],
        correct: 1,
        explanation:
          "The middle pharyngeal constrictor attaches to the greater horn and posterior border of the hyoid bone.",
      },
      {
        text: "Which cervical vertebra has a bifid spinous process that is usually most prominent and palpable in a living adult?",
        options: ["C3", "C4", "C5", "C7"],
        correct: 3,
        explanation:
          "Although bifid in some cases, C7's long spinous process (vertebra prominens) is the most palpable landmark at the base of the neck.",
      },
    ],

    "Fascia of Neck": [
      {
        text: "Which layer of the deep cervical fascia splits to enclose the sternocleidomastoid and trapezius muscles?",
        options: [
          "Pretracheal fascia",
          "Investing fascia",
          "Prevertebral fascia",
          "Carotid sheath",
        ],
        correct: 1,
        explanation:
          "The investing fascia is the most superficial layer of deep cervical fascia and splits to enclose SCM and trapezius, forming their muscular compartments.",
      },
      {
        text: "The alar fascia is a subdivision of which deep cervical fascia?",
        options: ["Pretracheal", "Prevertebral", "Investing", "Carotid sheath"],
        correct: 1,
        explanation:
          "Alar fascia lies anterior to the prevertebral fascia and posterior to the retropharyngeal space; it is a subdivision of prevertebral fascia.",
      },
      {
        text: "The retropharyngeal space is clinically significant because it:",
        options: [
          "Lies between investing and pretracheal fascia",
          "Extends from skull base to mediastinum",
          "Contains the carotid artery and jugular vein",
          "Encloses the thyroid gland",
        ],
        correct: 1,
        explanation:
          "Retropharyngeal space is a potential space between buccopharyngeal fascia and alar fascia, allowing spread of infections from neck to mediastinum.",
      },
      {
        text: "The carotid sheath contains all EXCEPT:",
        options: [
          "Internal jugular vein",
          "Vagus nerve",
          "Common carotid artery",
          "Sympathetic trunk",
        ],
        correct: 3,
        explanation:
          "Sympathetic trunk lies posterior to carotid sheath, not within it. The sheath contains carotid artery, jugular vein, and vagus nerve.",
      },
      {
        text: "The pretracheal fascia blends with which structure inferiorly?",
        options: [
          "Manubrium of sternum",
          "Pericardium",
          "Hyoid bone",
          "Thyroid cartilage",
        ],
        correct: 1,
        explanation:
          "Pretracheal fascia continues into thorax as fibrous pericardium, forming a pathway for potential infection spread.",
      },
      {
        text: "Which fascia forms the floor of the posterior triangle of the neck?",
        options: [
          "Investing fascia",
          "Prevertebral fascia",
          "Pretracheal fascia",
          "Carotid sheath",
        ],
        correct: 1,
        explanation:
          "Prevertebral fascia covers vertebral column and associated muscles, forming the deep floor of the posterior triangle.",
      },
      {
        text: "The danger space lies between which two fasciae?",
        options: [
          "Investing and pretracheal",
          "Alar and prevertebral",
          "Pretracheal and carotid sheath",
          "Investing and carotid sheath",
        ],
        correct: 1,
        explanation:
          "Danger space extends from skull base to diaphragm; infections can spread rapidly into posterior mediastinum.",
      },
      {
        text: "The buccopharyngeal fascia is a continuation of which cervical fascia?",
        options: [
          "Pretracheal fascia",
          "Prevertebral fascia",
          "Investing fascia",
          "Carotid sheath",
        ],
        correct: 0,
        explanation:
          "Buccopharyngeal fascia is the posterior part of pretracheal fascia covering pharyngeal muscles.",
      },
      {
        text: "Which structure pierces the investing fascia?",
        options: [
          "Thyroid gland",
          "External jugular vein",
          "Trachea",
          "Vagus nerve",
        ],
        correct: 1,
        explanation:
          "External jugular vein pierces the investing fascia to drain into the subclavian vein.",
      },
      {
        text: "Which fascia surrounds the scalene muscles?",
        options: [
          "Investing fascia",
          "Prevertebral fascia",
          "Pretracheal fascia",
          "Carotid sheath",
        ],
        correct: 1,
        explanation:
          "Prevertebral fascia encloses the vertebral column and muscles including scalene and deep neck muscles.",
      },
      {
        text: "The laryngotracheal part of pretracheal fascia encloses:",
        options: [
          "Thyroid and parathyroid glands",
          "Pharynx",
          "Esophagus only",
          "Sternocleidomastoid",
        ],
        correct: 0,
        explanation:
          "Pretracheal fascia splits into muscular and visceral parts; the visceral part surrounds thyroid, parathyroid, trachea, and esophagus.",
      },
      {
        text: "Which fascia is responsible for forming a continuous fascial compartment around the thyroid gland?",
        options: [
          "Investing fascia",
          "Prevertebral fascia",
          "Pretracheal fascia",
          "Carotid sheath",
        ],
        correct: 2,
        explanation:
          "Pretracheal fascia's visceral part forms the fascial compartment of the thyroid.",
      },
      {
        text: "The suprasternal space (space of Burns) lies between:",
        options: [
          "Investing fascia and platysma",
          "Pretracheal fascia and investing fascia",
          "Prevertebral fascia and alar fascia",
          "Carotid sheath and pretracheal fascia",
        ],
        correct: 1,
        explanation:
          "The suprasternal space allows free movement of trachea and thyroid superiorly.",
      },
      {
        text: "Which fascia forms a tubular sheath around the phrenic nerve?",
        options: [
          "Investing fascia",
          "Pretracheal fascia",
          "Prevertebral fascia",
          "Carotid sheath",
        ],
        correct: 2,
        explanation:
          "Prevertebral fascia extends laterally to form axillary sheath around brachial plexus and phrenic nerve.",
      },
      {
        text: "The posterior border of retropharyngeal space is formed by:",
        options: [
          "Alar fascia",
          "Prevertebral fascia",
          "Buccopharyngeal fascia",
          "Investing fascia",
        ],
        correct: 0,
        explanation:
          "Retropharyngeal space lies between buccopharyngeal fascia anteriorly and alar fascia posteriorly.",
      },
      {
        text: "The pretracheal fascia is absent at which level?",
        options: [
          "Superior to hyoid",
          "Inferior to thoracic inlet",
          "Lateral to carotid sheath",
          "Surrounding sternocleidomastoid",
        ],
        correct: 3,
        explanation:
          "SCM is enclosed by investing fascia, not pretracheal fascia.",
      },
      {
        text: "Which cervical fascia contributes to the formation of the carotid sheath?",
        options: [
          "Pretracheal only",
          "Prevertebral only",
          "Investing, pretracheal, and prevertebral",
          "Alar only",
        ],
        correct: 2,
        explanation:
          "Carotid sheath is a condensation of all three deep cervical fasciae.",
      },
      {
        text: "The prevertebral fascia extends laterally as:",
        options: [
          "Axillary sheath",
          "Carotid sheath",
          "Platysma",
          "Buccopharyngeal fascia",
        ],
        correct: 0,
        explanation:
          "Lateral extension of prevertebral fascia forms axillary sheath, enclosing brachial plexus and subclavian vessels.",
      },
      {
        text: "The submandibular space is bounded superiorly by:",
        options: [
          "Mylohyoid muscle",
          "Pretracheal fascia",
          "Investing fascia",
          "Prevertebral fascia",
        ],
        correct: 2,
        explanation:
          "Submandibular space lies between mandible and investing fascia covering suprahyoid muscles.",
      },
      {
        text: "Infections from lateral pharyngeal space can spread to mediastinum via:",
        options: [
          "Pretracheal fascia",
          "Retropharyngeal and danger spaces",
          "Investing fascia",
          "Carotid sheath",
        ],
        correct: 1,
        explanation:
          "Lateral pharyngeal space communicates with retropharyngeal space, which in turn communicates with danger space, allowing mediastinal spread.",
      },
    ],

    "Triangles of the Neck": [
      {
        text: "Which muscle forms the posterior boundary of the anterior triangle of the neck?",
        options: [
          "Sternohyoid",
          "Sternocleidomastoid",
          "Omohyoid (superior belly)",
          "Trapezius",
        ],
        correct: 1,
        explanation:
          "The anterior triangle is bounded posteriorly by the anterior border of the sternocleidomastoid, anteriorly by the midline, and superiorly by the inferior border of the mandible.",
      },
      {
        text: "The carotid triangle contains all of the following EXCEPT:",
        options: [
          "Common carotid artery",
          "Internal jugular vein",
          "Hypoglossal nerve",
          "Thoracic duct",
        ],
        correct: 3,
        explanation:
          "The thoracic duct is not present in the carotid triangle; it drains into the venous system near the junction of the internal jugular and subclavian veins (mostly left side).",
      },
      {
        text: "Which triangle is bounded by the inferior belly of omohyoid, anterior border of SCM, and clavicle?",
        options: [
          "Submandibular",
          "Carotid",
          "Omoclavicular (subclavian)",
          "Muscular",
        ],
        correct: 2,
        explanation:
          "The omoclavicular (or subclavian) triangle is the lower part of the posterior triangle.",
      },
      {
        text: "The floor of the posterior triangle is formed by which group of muscles?",
        options: [
          "Suprahyoid muscles",
          "Infrahyoid muscles",
          "Prevertebral muscles",
          "Scalene and levator scapulae muscles",
        ],
        correct: 3,
        explanation:
          "The posterior triangle floor is formed by splenius capitis, levator scapulae, and scalene muscles.",
      },
      {
        text: "Which nerve passes through the posterior triangle of the neck, superficial to the scalenus anterior?",
        options: [
          "Vagus nerve",
          "Phrenic nerve",
          "Accessory nerve (CN XI)",
          "Hypoglossal nerve",
        ],
        correct: 1,
        explanation:
          "The phrenic nerve runs on the anterior surface of the scalenus anterior, deep in the posterior triangle.",
      },
      {
        text: "The submandibular triangle contains which of the following structures deep to the submandibular gland?",
        options: [
          "Facial artery",
          "Lingual artery",
          "Subclavian artery",
          "Internal thoracic artery",
        ],
        correct: 1,
        explanation:
          "The lingual artery passes deep to the posterior part of the submandibular gland; facial artery runs superficially.",
      },
      {
        text: "Which triangle is pierced by the external jugular vein?",
        options: [
          "Carotid triangle",
          "Submental triangle",
          "Posterior triangle",
          "Muscular triangle",
        ],
        correct: 2,
        explanation:
          "The external jugular vein pierces the roof of the posterior triangle, draining into the subclavian vein.",
      },
      {
        text: "The muscular triangle contains all of the following structures EXCEPT:",
        options: [
          "Sternohyoid",
          "Thyroid gland",
          "Ansa cervicalis",
          "Vagus nerve",
        ],
        correct: 3,
        explanation:
          "The vagus nerve lies deeper in the carotid sheath, mostly in the carotid triangle.",
      },
      {
        text: "Which of the following muscles divides the posterior triangle into the occipital and omoclavicular triangles?",
        options: [
          "Trapezius",
          "Sternocleidomastoid",
          "Omohyoid (inferior belly)",
          "Levator scapulae",
        ],
        correct: 2,
        explanation:
          "The inferior belly of omohyoid runs across the posterior triangle, dividing it into two smaller triangles.",
      },
      {
        text: "Which triangle lies between the two anterior bellies of the digastric muscles and the hyoid bone?",
        options: [
          "Submental triangle",
          "Submandibular triangle",
          "Carotid triangle",
          "Muscular triangle",
        ],
        correct: 0,
        explanation:
          "The submental triangle is unpaired and located in the midline, under the chin.",
      },
      {
        text: "Which artery is the main supply to the submandibular triangle?",
        options: [
          "Superior thyroid artery",
          "Lingual artery",
          "Facial artery",
          "Occipital artery",
        ],
        correct: 2,
        explanation:
          "The facial artery passes deep to the submandibular gland, supplying it along with branches to the face.",
      },
      {
        text: "Which nerve is at risk during surgical excision of the submandibular gland?",
        options: [
          "Hypoglossal nerve (CN XII)",
          "Accessory nerve (CN XI)",
          "Vagus nerve (CN X)",
          "Phrenic nerve",
        ],
        correct: 0,
        explanation:
          "The hypoglossal nerve runs deep to the posterior belly of digastric and is vulnerable during gland excision.",
      },
      {
        text: "Which of the following triangles is NOT paired?",
        options: ["Carotid", "Submental", "Muscular", "Submandibular"],
        correct: 1,
        explanation:
          "The submental triangle is single and located in the midline; all other neck triangles are paired.",
      },
      {
        text: "The carotid sheath contains all of the following structures EXCEPT:",
        options: [
          "Internal jugular vein",
          "Common carotid artery",
          "Vagus nerve",
          "Ansa cervicalis",
        ],
        correct: 3,
        explanation:
          "The ansa cervicalis lies on the surface of the carotid sheath, not inside it.",
      },
      {
        text: "The roof of the posterior triangle is formed by which fascia?",
        options: [
          "Investing layer of deep cervical fascia",
          "Pretracheal fascia",
          "Buccopharyngeal fascia",
          "Carotid sheath",
        ],
        correct: 0,
        explanation:
          "The investing fascia covers the SCM and trapezius, forming the roof of the posterior triangle.",
      },
      {
        text: "Which triangle contains the thyroid gland?",
        options: [
          "Muscular triangle",
          "Carotid triangle",
          "Omoclavicular triangle",
          "Submandibular triangle",
        ],
        correct: 0,
        explanation:
          "The muscular triangle contains the infrahyoid muscles and thyroid gland in its floor.",
      },
      {
        text: "The spinal accessory nerve crosses which triangle superficially?",
        options: ["Carotid", "Posterior", "Submental", "Muscular"],
        correct: 1,
        explanation:
          "CN XI runs on the levator scapulae and trapezius in the posterior triangle and is superficial.",
      },
      {
        text: "The hypoglossal nerve is closely related to which artery in the submandibular region?",
        options: [
          "Facial artery",
          "Lingual artery",
          "Superior thyroid artery",
          "Occipital artery",
        ],
        correct: 1,
        explanation:
          "The hypoglossal nerve loops around and runs lateral to the lingual artery deep to the submandibular gland.",
      },
      {
        text: "Which of the following structures is NOT a boundary of the carotid triangle?",
        options: [
          "Posterior belly of digastric",
          "Superior belly of omohyoid",
          "Anterior border of SCM",
          "Clavicle",
        ],
        correct: 3,
        explanation:
          "The clavicle is part of the posterior triangle boundaries, not the carotid triangle.",
      },
      {
        text: "The venous angle, where the thoracic duct empties, is located near which triangle?",
        options: ["Carotid", "Subclavian", "Muscular", "Submandibular"],
        correct: 1,
        explanation:
          "The thoracic duct drains at the junction of the left internal jugular and subclavian veins, within the lower posterior triangle.",
      },
    ],

    "Muscles of the Neck": [
      {
        text: "Which of the following muscles is NOT derived from the second pharyngeal (hyoid) arch?",
        options: [
          "Stylohyoid",
          "Posterior belly of digastric",
          "Mylohyoid",
          "Platysma",
        ],
        correct: 2,
        explanation:
          "Mylohyoid is derived from the first pharyngeal arch, not the second. Stylohyoid, posterior belly of digastric, and platysma come from the second arch.",
      },
      {
        text: "Which neck muscle is innervated by the ansa cervicalis and contributes to swallowing by depressing the hyoid?",
        options: [
          "Omohyoid",
          "Sternocleidomastoid",
          "Digastric (anterior belly)",
          "Sternothyroid",
        ],
        correct: 0,
        explanation:
          "Omohyoid, along with sternohyoid and sternothyroid, is innervated by the ansa cervicalis and depresses the hyoid.",
      },
      {
        text: "The levator scapulae muscle receives fibers from which cervical nerves?",
        options: ["C1–C2", "C3–C5", "C4–C5", "C5–C6"],
        correct: 2,
        explanation:
          "Levator scapulae is innervated by dorsal scapular nerve (C5) and cervical nerves C3–C4 for proprioception.",
      },
      {
        text: "Which of the following muscles has a dual innervation from both cranial and cervical nerves?",
        options: [
          "Sternohyoid",
          "Thyrohyoid",
          "Omohyoid",
          "Sternocleidomastoid",
        ],
        correct: 1,
        explanation:
          "Thyrohyoid is innervated by C1 fibers traveling with the hypoglossal nerve (CN XII) — dual innervation pattern.",
      },
      {
        text: "The splenius capitis muscle primarily performs which action?",
        options: [
          "Flexion of the neck",
          "Contralateral rotation",
          "Ipsilateral rotation",
          "Depresses the mandible",
        ],
        correct: 2,
        explanation:
          "Splenius capitis rotates the head toward the same side (ipsilateral) and extends the neck.",
      },
      {
        text: "Which suprahyoid muscle forms a 'V' on the floor of the mouth and is important for tongue elevation?",
        options: [
          "Mylohyoid",
          "Stylohyoid",
          "Geniohyoid",
          "Digastric (posterior belly)",
        ],
        correct: 0,
        explanation:
          "Mylohyoid forms the mylohyoid raphe, creating a 'V' shape, supporting the floor of the mouth.",
      },
      {
        text: "Which scalene muscle is pierced by the brachial plexus?",
        options: [
          "Anterior scalene",
          "Middle scalene",
          "Posterior scalene",
          "None",
        ],
        correct: 1,
        explanation:
          "Brachial plexus roots pass between anterior and middle scalene, not through posterior.",
      },
      {
        text: "Which muscle forms the anterior boundary of the posterior triangle of the neck?",
        options: [
          "Sternocleidomastoid",
          "Trapezius",
          "Omohyoid (inferior belly)",
          "Levator scapulae",
        ],
        correct: 0,
        explanation:
          "The posterior triangle is bordered anteriorly by SCM, posteriorly by trapezius, and inferiorly by clavicle.",
      },
      {
        text: "The posterior belly of digastric is derived from which arch and innervated by which nerve?",
        options: [
          "First arch, mandibular nerve",
          "Second arch, facial nerve",
          "Second arch, trigeminal nerve",
          "First arch, hypoglossal nerve",
        ],
        correct: 1,
        explanation:
          "Posterior digastric is from 2nd pharyngeal arch, innervated by CN VII.",
      },
      {
        text: "Which deep cervical muscle is primarily responsible for lateral flexion and stabilization of cervical vertebrae?",
        options: [
          "Longus colli",
          "Longus capitis",
          "Scalene muscles",
          "Sternocleidomastoid",
        ],
        correct: 0,
        explanation:
          "Longus colli lies anterior to vertebrae, flexes, and stabilizes cervical spine laterally.",
      },
      {
        text: "The ansa cervicalis loop typically lies on top of which muscle?",
        options: [
          "Sternothyroid",
          "Sternohyoid",
          "Omohyoid (superior belly)",
          "Thyrohyoid",
        ],
        correct: 1,
        explanation:
          "Ansa cervicalis runs on the anterior surface of sternohyoid, supplying most infrahyoid muscles.",
      },
      {
        text: "The sternocleidomastoid muscle divides the neck into anterior and posterior triangles. Which action is unique when acting unilaterally?",
        options: [
          "Neck flexion",
          "Contralateral rotation",
          "Ipsilateral rotation",
          "Elevation of scapula",
        ],
        correct: 1,
        explanation:
          "SCM turns the head to the opposite side when acting unilaterally.",
      },
      {
        text: "Which muscle is often considered part of the prevertebral group and helps in cervical flexion?",
        options: [
          "Scalenes",
          "Longus colli",
          "Splenius capitis",
          "Levator scapulae",
        ],
        correct: 1,
        explanation:
          "Longus colli lies anterior to cervical vertebrae, aiding flexion and stabilization.",
      },
      {
        text: "The infrahyoid muscles are collectively known as strap muscles. Which of these is NOT innervated by the ansa cervicalis?",
        options: ["Sternohyoid", "Omohyoid", "Thyrohyoid", "Sternothyroid"],
        correct: 2,
        explanation:
          "Thyrohyoid is innervated by C1 via hypoglossal nerve, unlike the other strap muscles.",
      },
      {
        text: "Which muscle forms the roof of the lateral cervical region?",
        options: ["Platysma", "Trapezius", "Sternocleidomastoid", "Omohyoid"],
        correct: 0,
        explanation:
          "Platysma is superficial, forming the roof of lateral neck, covering SCM and triangles.",
      },
      {
        text: "Which prevertebral muscle assists in head flexion and contralateral rotation?",
        options: [
          "Longus capitis",
          "Longus colli",
          "Scalene anterior",
          "Splenius cervicis",
        ],
        correct: 2,
        explanation:
          "Anterior scalene flexes the cervical spine and assists in contralateral rotation slightly.",
      },
      {
        text: "Which muscle originates from the styloid process and inserts onto the hyoid bone?",
        options: [
          "Stylohyoid",
          "Digastric (anterior belly)",
          "Mylohyoid",
          "Omohyoid",
        ],
        correct: 0,
        explanation:
          "Stylohyoid runs from styloid process to hyoid, elevating and retracting the hyoid.",
      },
      {
        text: "The suboccipital muscles are innervated by which nerve?",
        options: [
          "CN XI",
          "C1 (suboccipital nerve)",
          "CN XII",
          "Dorsal rami C2",
        ],
        correct: 1,
        explanation:
          "Suboccipital muscles are innervated by C1 dorsal ramus, controlling fine head movements.",
      },
      {
        text: "Which posterior triangle muscle helps form the floor of the triangle?",
        options: [
          "Trapezius",
          "Levator scapulae",
          "Omohyoid (inferior belly)",
          "Platysma",
        ],
        correct: 1,
        explanation:
          "Floor of posterior triangle includes splenius capitis, levator scapulae, scalenes; trapezius is posterior border.",
      },
      {
        text: "Which suprahyoid muscle has two bellies connected by an intermediate tendon that passes through a fibrous loop on the hyoid?",
        options: ["Digastric", "Stylohyoid", "Mylohyoid", "Geniohyoid"],
        correct: 0,
        explanation:
          "Digastric has anterior and posterior bellies connected by an intermediate tendon anchored to the hyoid.",
      },
    ],

    "Thyroid and Parathyroid Gland": [
      {
        text: "Which structure lies posterior to the left lobe of the thyroid gland?",
        options: [
          "Right recurrent laryngeal nerve",
          "Left recurrent laryngeal nerve",
          "Superior thyroid artery",
          "Inferior thyroid artery",
        ],
        correct: 1,
        explanation:
          "The left recurrent laryngeal nerve ascends in the tracheoesophageal groove posterior to the thyroid gland, whereas the right nerve loops differently around the subclavian artery.",
      },
      {
        text: "The pyramidal lobe of the thyroid gland is a remnant of which embryological structure?",
        options: [
          "Lateral thyroid buds",
          "Thyroglossal duct",
          "Ultimobranchial body",
          "Pharyngeal pouch 3",
        ],
        correct: 1,
        explanation:
          "The pyramidal lobe represents a persistent portion of the thyroglossal duct, which normally involutes.",
      },
      {
        text: "Which artery provides the major blood supply to the inferior thyroid pole?",
        options: [
          "Superior thyroid artery",
          "Inferior thyroid artery",
          "Thyroidea ima artery",
          "Lingual artery",
        ],
        correct: 1,
        explanation:
          "The inferior thyroid artery, usually a branch of the thyrocervical trunk, supplies the lower poles and posterior aspect of the thyroid.",
      },
      {
        text: "Which parathyroid glands are most consistently found in a variable position?",
        options: [
          "Superior parathyroids",
          "Inferior parathyroids",
          "Both equally",
          "None; they are fixed",
        ],
        correct: 1,
        explanation:
          "Inferior parathyroids are more variable due to their longer embryologic migration from the third pharyngeal pouch.",
      },
      {
        text: "The thyroid gland receives venous drainage via all except:",
        options: [
          "Superior thyroid vein",
          "Middle thyroid vein",
          "Inferior thyroid vein",
          "External jugular vein directly",
        ],
        correct: 3,
        explanation:
          "The thyroid veins drain into the internal jugular and brachiocephalic veins, not directly into the external jugular vein.",
      },
      {
        text: "Which nerve is most at risk during ligation of the inferior thyroid artery?",
        options: [
          "Hypoglossal nerve",
          "Superior laryngeal nerve",
          "Recurrent laryngeal nerve",
          "Vagus nerve",
        ],
        correct: 2,
        explanation:
          "The recurrent laryngeal nerve lies closely posterior to the inferior thyroid artery, making it vulnerable during surgery.",
      },
      {
        text: "The isthmus of the thyroid gland overlies which tracheal rings?",
        options: ["1st–2nd", "2nd–4th", "5th–6th", "6th–7th"],
        correct: 1,
        explanation:
          "The thyroid isthmus crosses anterior to the 2nd, 3rd, and sometimes 4th tracheal rings.",
      },
      {
        text: "Which structure contributes C cells (parafollicular cells) to the thyroid?",
        options: [
          "Lateral thyroid buds",
          "Thyroglossal duct",
          "Ultimobranchial body",
          "First pharyngeal pouch",
        ],
        correct: 2,
        explanation:
          "The ultimobranchial body from the 4th/5th pharyngeal pouch integrates into the thyroid and differentiates into parafollicular (C) cells.",
      },
      {
        text: "Which parathyroid gland is more likely to be located within the thymus?",
        options: [
          "Superior",
          "Inferior",
          "Both equally",
          "Rarely; they are always in thyroid",
        ],
        correct: 1,
        explanation:
          "Inferior parathyroids descend with the thymus, occasionally ending up in the mediastinum.",
      },
      {
        text: "The thyroidea ima artery, when present, usually arises from:",
        options: [
          "Subclavian artery",
          "Brachiocephalic trunk",
          "Common carotid artery",
          "External carotid artery",
        ],
        correct: 1,
        explanation:
          "The thyroidea ima artery is an anatomical variant that can arise from the brachiocephalic trunk and ascend to the thyroid isthmus.",
      },
      {
        text: "The ligament of Berry attaches the thyroid gland to:",
        options: [
          "Cricoid cartilage",
          "Thyroid cartilage",
          "Trachea",
          "Cricothyroid membrane",
        ],
        correct: 2,
        explanation:
          "The ligament of Berry secures the thyroid to the upper tracheal rings and protects the recurrent laryngeal nerve posteriorly.",
      },
      {
        text: "Which nerve is responsible for sensation to the superior part of the thyroid capsule?",
        options: [
          "External branch of superior laryngeal nerve",
          "Recurrent laryngeal nerve",
          "Cervical sympathetic chain",
          "Vagus nerve",
        ],
        correct: 0,
        explanation:
          "The external branch provides motor innervation to cricothyroid but also conveys some sensory fibers to the thyroid capsule.",
      },
      {
        text: "Which vein is most important for thyroid gland drainage into the brachiocephalic vein?",
        options: [
          "Superior thyroid vein",
          "Middle thyroid vein",
          "Inferior thyroid vein",
          "Thyroidea ima vein",
        ],
        correct: 2,
        explanation:
          "The inferior thyroid veins drain directly into the left and right brachiocephalic veins.",
      },
      {
        text: "Which anatomical relationship explains why thyroid surgery can cause Horner's syndrome?",
        options: [
          "Proximity to cervical sympathetic chain",
          "Ligation of superior thyroid artery",
          "Damage to recurrent laryngeal nerve",
          "Compression of trachea",
        ],
        correct: 0,
        explanation:
          "The cervical sympathetic trunk runs posterior and lateral to the thyroid; injury can produce ptosis, miosis, and anhidrosis.",
      },
      {
        text: "The superior parathyroid gland develops from which pharyngeal pouch?",
        options: ["2nd", "3rd", "4th", "1st"],
        correct: 2,
        explanation:
          "Superior parathyroids arise from the dorsal wing of the 4th pharyngeal pouch and migrate less than inferior glands.",
      },
      {
        text: "The pyramidal lobe, if present, is most commonly attached to:",
        options: [
          "Isthmus",
          "Right lobe",
          "Left lobe",
          "Thyroglossal duct remnant only",
        ],
        correct: 0,
        explanation:
          "The pyramidal lobe extends superiorly from the isthmus in most individuals.",
      },
      {
        text: "Which ligament is crucial for identifying the recurrent laryngeal nerve during thyroidectomy?",
        options: [
          "Suspensory ligament of Berry",
          "Anterior longitudinal ligament",
          "Cricothyroid ligament",
          "Thyrohyoid membrane",
        ],
        correct: 0,
        explanation:
          "The ligament of Berry anchors the thyroid and the recurrent laryngeal nerve passes immediately posterior to it.",
      },
      {
        text: "Which parathyroid gland is more commonly located posterior to the thyroid?",
        options: ["Superior", "Inferior", "Both equally", "Neither"],
        correct: 0,
        explanation:
          "Superior parathyroids remain close to the posterior aspect of the upper thyroid poles; inferior glands migrate more variably.",
      },
      {
        text: "Which variant vessel can complicate tracheostomy due to its anterior location?",
        options: [
          "Superior thyroid artery",
          "Thyroidea ima artery",
          "Inferior thyroid artery",
          "Middle thyroid vein",
        ],
        correct: 1,
        explanation:
          "The thyroidea ima artery can cross the anterior trachea and be injured during midline neck procedures.",
      },
      {
        text: "Which embryological origin explains ectopic thyroid tissue along the midline of the neck?",
        options: [
          "Ultimobranchial body",
          "Lateral thyroid bud",
          "Thyroglossal duct",
          "Pharyngeal pouch 2",
        ],
        correct: 2,
        explanation:
          "Persistent portions of the thyroglossal duct can give rise to ectopic thyroid tissue anywhere from the foramen cecum to the mediastinum.",
      },
    ],

    Larynx: [
      {
        text: "Which of the following laryngeal cartilages is paired and contains a vocal process for vocal ligament attachment?",
        options: ["Thyroid", "Cricoid", "Arytenoid", "Epiglottis"],
        correct: 2,
        explanation:
          "Arytenoid cartilages are paired, pyramidal, and have vocal processes for attachment of the vocal ligaments, crucial for phonation.",
      },
      {
        text: "The cricothyroid muscle is primarily responsible for:",
        options: [
          "Abduction of vocal cords",
          "Adduction of vocal cords",
          "Tensing the vocal cords",
          "Relaxing the vocal cords",
        ],
        correct: 2,
        explanation:
          "Cricothyroid tilts the thyroid cartilage forward, increasing vocal cord tension for higher pitch.",
      },
      {
        text: "Which laryngeal ligament forms the inferior boundary of the laryngeal vestibule?",
        options: [
          "Quadrangular membrane",
          "Cricothyroid ligament",
          "Vocal ligament",
          "Thyrohyoid membrane",
        ],
        correct: 0,
        explanation:
          "The quadrangular membrane extends from arytenoid to epiglottis, forming the vestibular (false vocal) ligament inferiorly.",
      },
      {
        text: "The only intrinsic laryngeal muscle not innervated by the recurrent laryngeal nerve is:",
        options: [
          "Posterior cricoarytenoid",
          "Lateral cricoarytenoid",
          "Thyroarytenoid",
          "Cricothyroid",
        ],
        correct: 3,
        explanation:
          "Cricothyroid is supplied by the external branch of the superior laryngeal nerve; all others are by the recurrent laryngeal nerve.",
      },
      {
        text: "The laryngeal inlet is bounded posteriorly by:",
        options: [
          "Aryepiglottic folds",
          "Epiglottis",
          "Arytenoid cartilages",
          "Thyroid cartilage",
        ],
        correct: 1,
        explanation:
          "The epiglottis forms the posterior boundary of the laryngeal inlet, protecting the airway during swallowing.",
      },
      {
        text: "Which of the following statements regarding the cricoid cartilage is TRUE?",
        options: [
          "It is C-shaped and open posteriorly",
          "It is complete and forms a full ring",
          "It articulates with the hyoid via a synovial joint",
          "It has superior and inferior cornua",
        ],
        correct: 1,
        explanation:
          "Cricoid cartilage is the only complete laryngeal cartilage, forming a full ring around the airway.",
      },
      {
        text: "Damage to the external branch of the superior laryngeal nerve would most likely cause:",
        options: [
          "Hoarseness due to vocal cord paralysis",
          "Difficulty in high-pitch phonation",
          "Stridor due to airway obstruction",
          "Loss of cough reflex",
        ],
        correct: 1,
        explanation:
          "The external branch innervates cricothyroid, which tenses vocal cords for high-pitch sounds.",
      },
      {
        text: "The thyrohyoid membrane is pierced by all of the following EXCEPT:",
        options: [
          "Internal branch of superior laryngeal nerve",
          "Superior laryngeal artery",
          "Inferior laryngeal vein",
          "None of the above",
        ],
        correct: 2,
        explanation:
          "Inferior laryngeal vessels enter below the thyroid cartilage, not through the thyrohyoid membrane.",
      },
      {
        text: "The laryngeal ventricle is located between which structures?",
        options: [
          "True and false vocal cords",
          "Epiglottis and arytenoids",
          "Thyroid and cricoid cartilages",
          "Aryepiglottic fold and vestibular fold",
        ],
        correct: 0,
        explanation:
          "The laryngeal ventricle is a lateral recess between the vestibular (false) and vocal (true) cords.",
      },
      {
        text: "Which intrinsic muscle abducts the vocal cords, thus opening the rima glottidis?",
        options: [
          "Lateral cricoarytenoid",
          "Posterior cricoarytenoid",
          "Thyroarytenoid",
          "Transverse arytenoid",
        ],
        correct: 1,
        explanation:
          "Posterior cricoarytenoid is the only abductor of the vocal cords, allowing respiration.",
      },
      {
        text: "The superior thyroid artery gives off which branch that enters the larynx?",
        options: [
          "Inferior laryngeal artery",
          "Superior laryngeal artery",
          "Ascending pharyngeal branch",
          "Thyromental artery",
        ],
        correct: 1,
        explanation:
          "The superior laryngeal artery accompanies the internal branch of the superior laryngeal nerve through the thyrohyoid membrane.",
      },
      {
        text: "Which cartilage has both muscular and vocal processes for muscle and ligament attachment?",
        options: ["Thyroid", "Cricoid", "Arytenoid", "Corniculate"],
        correct: 2,
        explanation:
          "Arytenoid cartilages have vocal processes (vocal ligament) and muscular processes (muscle attachment).",
      },
      {
        text: "The fibroelastic membrane of the larynx consists of:",
        options: [
          "Quadrangular membrane and conus elasticus",
          "Thyrohyoid and cricothyroid membranes",
          "Thyroepiglottic ligament only",
          "Aryepiglottic folds only",
        ],
        correct: 0,
        explanation:
          "The larynx's fibroelastic membrane includes the quadrangular membrane (supraglottic) and conus elasticus (subglottic).",
      },
      {
        text: 'The "Adam\'s apple" corresponds anatomically to:',
        options: [
          "Thyroid notch of thyroid cartilage",
          "Superior border of cricoid cartilage",
          "Posterior surface of thyroid cartilage",
          "Laryngeal prominence of thyroid cartilage",
        ],
        correct: 3,
        explanation:
          "The laryngeal prominence (especially in males) is the externally visible thyroid cartilage projection.",
      },
      {
        text: "The posterior cricoarytenoid muscle is essential for:",
        options: [
          "Swallowing",
          "Phonation",
          "Abduction of vocal cords",
          "Closing the vestibule",
        ],
        correct: 2,
        explanation:
          "It rotates arytenoids laterally, opening the rima glottidis for breathing.",
      },
      {
        text: "The recurrent laryngeal nerve loops differently on the right and left sides. Which of the following is TRUE regarding the left nerve?",
        options: [
          "Loops around the subclavian artery",
          "Loops around the aortic arch",
          "Loops around the common carotid artery",
          "Loops around the brachiocephalic vein",
        ],
        correct: 1,
        explanation:
          "The left recurrent laryngeal nerve hooks under the aortic arch, while the right loops under the subclavian artery.",
      },
      {
        text: "Which of the following muscles relaxes the vocal cords to lower pitch?",
        options: [
          "Cricothyroid",
          "Thyroarytenoid",
          "Posterior cricoarytenoid",
          "Lateral cricoarytenoid",
        ],
        correct: 1,
        explanation:
          "The thyroarytenoid shortens and relaxes vocal cords, lowering voice pitch.",
      },
      {
        text: "The rima glottidis is widest during:",
        options: ["Whispering", "Phonation", "Deep inspiration", "Swallowing"],
        correct: 2,
        explanation:
          "Vocal cords abduct maximally to allow maximal airflow during deep inspiration.",
      },
      {
        text: "The epiglottis attaches to the thyroid cartilage via:",
        options: [
          "Hyoepiglottic ligament",
          "Thyroepiglottic ligament",
          "Quadrangular membrane",
          "Cricotracheal ligament",
        ],
        correct: 1,
        explanation:
          "The thyroepiglottic ligament anchors the epiglottis to the posterior thyroid cartilage.",
      },
      {
        text: "Which statement is CORRECT regarding the aryepiglottic folds?",
        options: [
          "Contain the vocal ligaments",
          "Contain the vestibular ligaments and muscles",
          "Form the posterior wall of laryngeal ventricle",
          "Connect the cricoid to the thyroid cartilage",
        ],
        correct: 1,
        explanation:
          "Aryepiglottic folds contain the vestibular (false vocal) ligaments and supporting muscles forming the laryngeal inlet border.",
      },
    ],

    Pharynx: [
      {
        text: "The upper limit of the pharynx corresponds anatomically to the:",
        options: [
          "Lower border of the sphenoid body",
          "Base of the skull at the pharyngeal tubercle",
          "Posterior edge of the vomer",
          "Upper border of the atlas",
        ],
        correct: 1,
        explanation:
          "The pharynx begins at the base of the skull, specifically at the pharyngeal tubercle on the occipital bone, not the sphenoid or cervical vertebrae.",
      },
      {
        text: "Which structure pierces the pharyngobasilar fascia but not the superior constrictor muscle?",
        options: [
          "Glossopharyngeal nerve",
          "Internal carotid artery",
          "Auditory tube",
          "Ascending palatine artery",
        ],
        correct: 2,
        explanation:
          "The auditory (Eustachian) tube passes through the pharyngobasilar fascia in the nasopharynx without piercing the superior constrictor.",
      },
      {
        text: "The gap between the superior and middle constrictor muscles transmits all EXCEPT:",
        options: [
          "Stylopharyngeus muscle",
          "Glossopharyngeal nerve",
          "Internal laryngeal nerve",
          "Stylohyoid ligament",
        ],
        correct: 2,
        explanation:
          "The internal laryngeal nerve passes between middle and inferior constrictors, not superior and middle.",
      },
      {
        text: "The pharyngeal plexus is primarily formed by branches from all EXCEPT:",
        options: [
          "Vagus nerve",
          "Glossopharyngeal nerve",
          "Sympathetic trunk",
          "Hypoglossal nerve",
        ],
        correct: 3,
        explanation:
          "The hypoglossal nerve does not contribute to the pharyngeal plexus; it supplies tongue muscles directly.",
      },
      {
        text: "Which muscle of the pharynx is longitudinal in orientation?",
        options: [
          "Palatopharyngeus",
          "Middle constrictor",
          "Inferior constrictor",
          "Superior constrictor",
        ],
        correct: 0,
        explanation:
          "Palatopharyngeus (along with stylopharyngeus and salpingopharyngeus) is a longitudinal muscle, elevating the pharynx.",
      },
      {
        text: "The motor supply to all pharyngeal muscles EXCEPT one is via the:",
        options: [
          "Glossopharyngeal nerve",
          "Vagus nerve",
          "Spinal accessory nerve",
          "Pharyngeal plexus",
        ],
        correct: 1,
        explanation:
          "Stylopharyngeus is the exception and is supplied directly by the glossopharyngeal nerve (CN IX).",
      },
      {
        text: "Killian's dehiscence is located between which muscle parts?",
        options: [
          "Superior and middle constrictors",
          "Thyropharyngeus and cricopharyngeus",
          "Middle and inferior constrictors",
          "Pharyngobasilar fascia and constrictors",
        ],
        correct: 1,
        explanation:
          "Killian's dehiscence lies between the thyropharyngeus and cricopharyngeus parts of the inferior constrictor — a site of Zenker's diverticulum.",
      },
      {
        text: "The internal carotid artery is closest to which part of the pharynx?",
        options: [
          "Nasopharynx",
          "Oropharynx",
          "Laryngopharynx",
          "Posterolateral pharyngeal wall",
        ],
        correct: 3,
        explanation:
          "The internal carotid artery lies posterolateral to the pharyngeal wall, a critical consideration during tonsillectomy.",
      },
      {
        text: "Which tonsil is located in the fossa of Rosenmüller?",
        options: ["Palatine", "Lingual", "Tubal", "Pharyngeal"],
        correct: 2,
        explanation:
          "The tubal tonsil lies near the opening of the auditory tube in the fossa of Rosenmüller.",
      },
      {
        text: "The sensory innervation of the nasopharynx is mainly from:",
        options: [
          "Maxillary nerve",
          "Mandibular nerve",
          "Glossopharyngeal nerve",
          "Vagus nerve",
        ],
        correct: 0,
        explanation:
          "Sensory supply of the nasopharynx comes from the maxillary nerve (V2) via the pharyngeal branch.",
      },
      {
        text: "The lower limit of the pharynx corresponds to the level of:",
        options: [
          "C4 vertebra",
          "Upper border of thyroid cartilage",
          "Lower border of cricoid cartilage",
          "C7 vertebra",
        ],
        correct: 2,
        explanation:
          "The pharynx ends at the lower border of the cricoid cartilage (C6) where it continues as the esophagus.",
      },
      {
        text: "Which structure forms the fibrous framework replacing muscle in the nasopharynx?",
        options: [
          "Buccopharyngeal fascia",
          "Pharyngobasilar fascia",
          "Prevertebral fascia",
          "Carotid sheath",
        ],
        correct: 1,
        explanation:
          "The pharyngobasilar fascia compensates for absent muscle in the upper pharynx.",
      },
      {
        text: "During tonsillectomy, bleeding most commonly arises from injury to the:",
        options: [
          "Ascending palatine artery",
          "Facial artery",
          "Ascending pharyngeal artery",
          "Tonsillar branch of facial artery",
        ],
        correct: 3,
        explanation:
          "The tonsillar branch of the facial artery is the chief source of bleeding.",
      },
      {
        text: "Which nerve is most likely injured in a peritonsillar abscess?",
        options: [
          "Vagus nerve",
          "Glossopharyngeal nerve",
          "Hypoglossal nerve",
          "Facial nerve",
        ],
        correct: 1,
        explanation:
          "The glossopharyngeal nerve runs close to the tonsillar bed and is vulnerable.",
      },
      {
        text: "Which muscle forms Passavant's ridge?",
        options: [
          "Palatoglossus",
          "Palatopharyngeus",
          "Superior constrictor",
          "Salpingopharyngeus",
        ],
        correct: 2,
        explanation:
          "Passavant's ridge is formed by fibers of the superior constrictor, aiding closure of the nasopharynx during swallowing.",
      },
      {
        text: "The cricopharyngeus muscle acts physiologically as the:",
        options: [
          "Upper esophageal sphincter",
          "Lower esophageal sphincter",
          "Pharyngeal elevator",
          "Vocal cord tensor",
        ],
        correct: 0,
        explanation:
          "Cricopharyngeus functions as the upper esophageal sphincter, remaining tonically contracted.",
      },
      {
        text: "Which artery is the only branch of the external carotid that ascends between the pharynx and cervical vertebrae?",
        options: [
          "Ascending palatine",
          "Ascending pharyngeal",
          "Lingual",
          "Occipital",
        ],
        correct: 1,
        explanation:
          "The ascending pharyngeal artery uniquely ascends along the pharyngeal wall.",
      },
      {
        text: "Failure of relaxation of cricopharyngeus during swallowing results in:",
        options: [
          "Achalasia",
          "Dysphagia lusoria",
          "Zenker's diverticulum",
          "Hiatus hernia",
        ],
        correct: 2,
        explanation:
          "Persistent contraction leads to increased pressure and Zenker's diverticulum at Killian's dehiscence.",
      },
      {
        text: "Which pharyngeal muscle is derived from the third pharyngeal arch?",
        options: [
          "Superior constrictor",
          "Stylopharyngeus",
          "Palatopharyngeus",
          "Salpingopharyngeus",
        ],
        correct: 1,
        explanation:
          "Stylopharyngeus is the only muscle from the 3rd arch, supplied by CN IX.",
      },
      {
        text: "The vallecula is anatomically located between the:",
        options: [
          "Tongue and soft palate",
          "Tongue and epiglottis",
          "Epiglottis and hyoid bone",
          "Pharynx and larynx",
        ],
        correct: 1,
        explanation:
          "The vallecula is the depression between the base of tongue and epiglottis, important during intubation.",
      },
    ],
  },

  // --- 5. EMBRYOLOGY ---
  "gen-embryo": {
    Gametogenesis: [
      {
        text: "Which of the following statements about spermatogenesis is correct?",
        options: [
          "A. Primary spermatocytes are diploid and undergo the first meiotic division to form secondary spermatocytes.",
          "B. Spermatogonia are haploid cells that undergo meiosis I.",
          "C. Spermatids are diploid and differentiate into spermatozoa by meiosis II.",
          "D. Sertoli cells are derived from germ cells.",
        ],
        correct: 0,
        explanation:
          "Primary spermatocytes are diploid (2n) and enter meiosis I to produce haploid secondary spermatocytes. Spermatogonia are diploid stem cells, spermatids are haploid, and Sertoli cells are somatic, not germ cells.",
      },
      {
        text: "Which phase of meiosis in oogenesis is arrested until ovulation?",
        options: [
          "A. Prophase I",
          "B. Metaphase I",
          "C. Prophase II",
          "D. Metaphase II",
        ],
        correct: 3,
        explanation:
          "Oocytes are arrested in metaphase II until fertilization. Prophase I arrest occurs during fetal life.",
      },
      {
        text: "Which of the following is true regarding primordial germ cells (PGCs)?",
        options: [
          "A. They originate in the epiblast and migrate to the yolk sac.",
          "B. They originate in the yolk sac endoderm and migrate to the gonadal ridge.",
          "C. They are somatic precursors of gametes.",
          "D. They complete meiosis during migration.",
        ],
        correct: 1,
        explanation:
          "PGCs originate in the yolk sac endoderm near the allantois and migrate to the gonadal ridge. They are not somatic and meiosis begins later in gametogenesis.",
      },
      {
        text: "During spermiogenesis, which of the following occurs last?",
        options: [
          "A. Formation of acrosome",
          "B. Condensation of nuclear chromatin",
          "C. Formation of the flagellum",
          "D. Shedding of excess cytoplasm",
        ],
        correct: 3,
        explanation:
          "Shedding of excess cytoplasm occurs last during spermiogenesis, producing mature spermatozoa.",
      },
      {
        text: "Which of the following statements is correct about oogonia?",
        options: [
          "A. Oogonia are diploid cells that proliferate during fetal life.",
          "B. Oogonia begin meiosis II immediately after birth.",
          "C. Oogonia differentiate directly into ovum without meiosis.",
          "D. Oogonia undergo spermatogenesis in the female.",
        ],
        correct: 0,
        explanation:
          "Oogonia are diploid (2n) and proliferate in the fetal ovary. They enter meiosis I but arrest at prophase I until puberty.",
      },
      {
        text: "What is the chromosome number of a secondary spermatocyte?",
        options: ["A. 46, 2n", "B. 46, n", "C. 23, n", "D. 23, 2n"],
        correct: 2,
        explanation:
          "Secondary spermatocytes are haploid (23, n) after meiosis I.",
      },
      {
        text: "Which enzyme is critical for sperm penetration of the zona pellucida?",
        options: [
          "A. Hyaluronidase",
          "B. Acrosin",
          "C. Protease K",
          "D. DNA polymerase",
        ],
        correct: 1,
        explanation:
          "Acrosin, an enzyme in the acrosome, digests the zona pellucida during fertilization.",
      },
      {
        text: "Which of the following is true about the first polar body?",
        options: [
          "A. It is diploid and has equal cytoplasm as the oocyte.",
          "B. It is haploid and usually degenerates.",
          "C. It forms after fertilization.",
          "D. It participates in zygote formation.",
        ],
        correct: 1,
        explanation:
          "The first polar body is haploid, small, and usually degenerates. It is a byproduct of asymmetric meiosis I.",
      },
      {
        text: "Which statement best describes the difference between spermatogenesis and oogenesis?",
        options: [
          "A. Spermatogenesis produces one sperm per spermatogonium; oogenesis produces four ova per oogonium.",
          "B. Spermatogenesis begins in fetal life; oogenesis begins at puberty.",
          "C. Spermatogenesis is continuous; oogenesis has long meiotic arrest periods.",
          "D. Spermatogenesis produces diploid gametes; oogenesis produces haploid gametes.",
        ],
        correct: 2,
        explanation:
          "Spermatogenesis is continuous from puberty; oogenesis has meiotic arrest at prophase I (fetal) and metaphase II (pre-fertilization).",
      },
      {
        text: "Which type of division increases genetic variability in gametes?",
        options: [
          "A. Mitosis",
          "B. Meiosis I",
          "C. Meiosis II",
          "D. Cytokinesis",
        ],
        correct: 1,
        explanation:
          "Meiosis I involves homologous recombination and independent assortment, increasing genetic variability.",
      },
      {
        text: "What is the role of Sertoli cells in spermatogenesis?",
        options: [
          "A. Produce testosterone",
          "B. Provide structural and nutritional support to developing sperm",
          "C. Differentiate into Leydig cells",
          "D. Form the blood-testis barrier after puberty only",
        ],
        correct: 1,
        explanation:
          "Sertoli cells support and nourish developing germ cells and form the blood-testis barrier. Leydig cells produce testosterone.",
      },
      {
        text: "Which hormone surge triggers the resumption of meiosis in the oocyte?",
        options: ["A. FSH", "B. LH", "C. HCG", "D. Estrogen"],
        correct: 1,
        explanation:
          "The LH surge triggers the oocyte to resume meiosis I and progress to metaphase II prior to ovulation.",
      },
      {
        text: "Which of the following best explains why spermatogenesis produces four sperm from one spermatogonium while oogenesis produces only one ovum?",
        options: [
          "A. Due to unequal cytokinesis in oogenesis",
          "B. Oogenesis lacks meiosis II",
          "C. Spermatogenesis is faster",
          "D. Oogenesis occurs in males",
        ],
        correct: 0,
        explanation:
          "Unequal cytokinesis in oogenesis preserves cytoplasm in the ovum, producing one viable ovum and polar bodies.",
      },
      {
        text: "When do primary oocytes enter meiosis I?",
        options: [
          "A. During puberty",
          "B. During fetal development",
          "C. At ovulation",
          "D. After fertilization",
        ],
        correct: 1,
        explanation:
          "Primary oocytes enter meiosis I during fetal life and arrest at prophase I until puberty.",
      },
      {
        text: "Which structure is formed by the fusion of the acrosome and plasma membrane of sperm during fertilization?",
        options: [
          "A. Midpiece",
          "B. Zona reaction",
          "C. Pronucleus",
          "D. Cortical granules",
        ],
        correct: 1,
        explanation:
          "The zona reaction is triggered by acrosomal enzymes, preventing polyspermy.",
      },
      {
        text: "Which of the following is true about Leydig cells?",
        options: [
          "A. Located in seminiferous tubules and produce inhibin",
          "B. Located in interstitial tissue and produce testosterone",
          "C. Derived from germ cells",
          "D. Support spermatid maturation",
        ],
        correct: 1,
        explanation:
          "Leydig cells are interstitial cells producing testosterone, essential for spermatogenesis.",
      },
      {
        text: "Which of the following is NOT a characteristic of mature sperm?",
        options: [
          "A. Motile flagellum",
          "B. Dense acrosome",
          "C. Large cytoplasmic volume",
          "D. Haploid nucleus",
        ],
        correct: 2,
        explanation:
          "Mature sperm shed most cytoplasm during spermiogenesis, leaving a small head and midpiece.",
      },
      {
        text: "Which process ensures genetic recombination during gametogenesis?",
        options: [
          "A. DNA replication",
          "B. Crossing-over during prophase I",
          "C. Cytokinesis",
          "D. Polar body extrusion",
        ],
        correct: 1,
        explanation:
          "Crossing-over during prophase I of meiosis exchanges genetic material between homologous chromosomes.",
      },
      {
        text: "In females, which event immediately precedes ovulation?",
        options: [
          "A. Completion of meiosis II",
          "B. First polar body extrusion",
          "C. Formation of secondary oocyte from oogonium",
          "D. Sperm entry",
        ],
        correct: 1,
        explanation:
          "Just before ovulation, the primary oocyte completes meiosis I, forming a secondary oocyte and the first polar body.",
      },
      {
        text: "Which of the following statements correctly compares polar bodies and spermatids?",
        options: [
          "A. Both are haploid, but polar bodies usually degenerate while spermatids develop into sperm",
          "B. Both are diploid, but spermatids undergo meiosis II",
          "C. Polar bodies are larger than spermatids",
          "D. Spermatids are somatic cells, polar bodies are germ cells",
        ],
        correct: 0,
        explanation:
          "Both are haploid, but polar bodies degenerate, whereas spermatids mature into spermatozoa.",
      },
    ],
    "First Week: Ovulation to Implantation": [
      {
        text: "Which structure is primarily responsible for preventing polyspermy immediately after sperm–oocyte fusion?",
        options: [
          "A. Zona pellucida hardening",
          "B. Fusion of pronuclei",
          "C. Cortical granule exocytosis",
          "D. Completion of meiosis II",
        ],
        correct: 2,
        explanation:
          "The cortical reaction releases enzymes from cortical granules that modify the zona pellucida, blocking additional sperm. Zona hardening (A) is a result, not the initiating event.",
      },
      {
        text: "The oocyte is arrested in which phase at the time of ovulation?",
        options: [
          "A. Prophase I",
          "B. Metaphase I",
          "C. Metaphase II",
          "D. Telophase II",
        ],
        correct: 2,
        explanation:
          "Primary oocytes arrest in prophase I, but ovulated secondary oocytes are arrested in metaphase II until fertilization.",
      },
      {
        text: "Which event directly triggers completion of meiosis II in the oocyte?",
        options: [
          "A. Capacitation of sperm",
          "B. Penetration of corona radiata",
          "C. Fusion of sperm and oocyte membranes",
          "D. Formation of male pronucleus",
        ],
        correct: 2,
        explanation:
          "Only membrane fusion triggers calcium oscillations that allow meiosis II to complete.",
      },
      {
        text: "Which statement about capacitation is TRUE?",
        options: [
          "A. It occurs in the epididymis",
          "B. It involves removal of glycoproteins from the sperm head",
          "C. It enables penetration of the corona radiata only",
          "D. It is complete before ejaculation",
        ],
        correct: 1,
        explanation:
          "Capacitation occurs in the female reproductive tract and removes inhibitory coatings, exposing receptors for zona pellucida binding.",
      },
      {
        text: "The acrosome reaction is initiated by binding to which zona pellucida protein?",
        options: ["A. ZP1", "B. ZP2", "C. ZP3", "D. ZP4"],
        correct: 2,
        explanation:
          "ZP3 is the primary sperm receptor that triggers the acrosome reaction.",
      },
      {
        text: "Which structure contributes genetic material but not cytoplasm to the zygote?",
        options: [
          "A. Secondary oocyte",
          "B. Spermatozoon",
          "C. Male pronucleus",
          "D. Female pronucleus",
        ],
        correct: 1,
        explanation:
          "The sperm contributes nuclear DNA and centriole, but almost no cytoplasm.",
      },
      {
        text: "The earliest stage at which embryonic cells are considered totipotent is the:",
        options: [
          "A. Blastocyst",
          "B. Morula",
          "C. 2-cell stage",
          "D. Inner cell mass",
        ],
        correct: 2,
        explanation:
          "Blastomeres up to the 8-cell stage are totipotent; the 2-cell stage is the earliest example.",
      },
      {
        text: "Which factor primarily determines the polarity of the blastocyst?",
        options: [
          "A. Site of sperm entry",
          "B. Distribution of yolk",
          "C. Inner cell mass position",
          "D. Orientation of the uterine tube",
        ],
        correct: 2,
        explanation:
          "The inner cell mass (embryoblast) establishes embryonic polarity.",
      },
      {
        text: "During cleavage, the overall size of the embryo:",
        options: [
          "A. Increases",
          "B. Decreases",
          "C. Remains unchanged",
          "D. Doubles",
        ],
        correct: 2,
        explanation:
          "Cleavage consists of mitotic divisions without growth, constrained by the zona pellucida.",
      },
      {
        text: "Failure of zona pellucida degeneration would most directly result in:",
        options: [
          "A. Failure of fertilization",
          "B. Failure of cleavage",
          "C. Failure of implantation",
          "D. Abnormal gastrulation",
        ],
        correct: 2,
        explanation: "The blastocyst must shed the zona pellucida to implant.",
      },
      {
        text: "Which structure gives rise to the placenta?",
        options: [
          "A. Embryoblast",
          "B. Cytotrophoblast",
          "C. Syncytiotrophoblast",
          "D. Both B and C",
        ],
        correct: 3,
        explanation:
          "Both trophoblastic layers contribute to placental formation.",
      },
      {
        text: "Implantation normally begins at approximately:",
        options: ["A. Day 3", "B. Day 4", "C. Day 6", "D. Day 8"],
        correct: 2,
        explanation:
          "Implantation typically begins around day 6–7 post-fertilization.",
      },
      {
        text: "Which trophoblastic layer is responsible for invasion of the endometrium?",
        options: [
          "A. Cytotrophoblast",
          "B. Syncytiotrophoblast",
          "C. Epiblast",
          "D. Hypoblast",
        ],
        correct: 1,
        explanation:
          "The syncytiotrophoblast erodes maternal tissues and establishes implantation.",
      },
      {
        text: "The embryoblast differentiates into epiblast and hypoblast at the:",
        options: [
          "A. Morula stage",
          "B. Early blastocyst stage",
          "C. Late blastocyst stage",
          "D. Bilaminar disc stage",
        ],
        correct: 2,
        explanation:
          "This differentiation occurs in the late blastocyst, forming the bilaminar disc.",
      },
      {
        text: "Which hormone maintains the corpus luteum during early implantation?",
        options: ["A. Estrogen", "B. Progesterone", "C. hCG", "D. LH"],
        correct: 2,
        explanation:
          "Human chorionic gonadotropin (hCG) is secreted by syncytiotrophoblast.",
      },
      {
        text: "Ectopic pregnancy most commonly occurs due to:",
        options: [
          "A. Failure of fertilization",
          "B. Abnormal cleavage",
          "C. Delayed transport of the blastocyst",
          "D. Premature zona shedding",
        ],
        correct: 2,
        explanation:
          "Delayed movement through the uterine tube leads to tubal implantation.",
      },
      {
        text: "Which event occurs first chronologically?",
        options: [
          "A. Formation of blastocyst cavity",
          "B. Fusion of pronuclei",
          "C. Completion of meiosis II",
          "D. Acrosome reaction",
        ],
        correct: 3,
        explanation:
          "The acrosome reaction precedes membrane fusion and meiosis completion.",
      },
      {
        text: "The blastocyst cavity forms due to:",
        options: [
          "A. Apoptosis of inner cells",
          "B. Active sodium transport",
          "C. Liquefaction of cytoplasm",
          "D. Maternal secretions",
        ],
        correct: 1,
        explanation:
          "Na⁺ transport draws water inward, forming the blastocoel.",
      },
      {
        text: "Which structure first establishes contact with maternal blood supply?",
        options: [
          "A. Cytotrophoblast",
          "B. Embryoblast",
          "C. Syncytiotrophoblast",
          "D. Hypoblast",
        ],
        correct: 2,
        explanation:
          "Syncytiotrophoblast erodes maternal capillaries → lacunae formation.",
      },
      {
        text: "A genetically abnormal embryo most commonly fails during which stage?",
        options: [
          "A. Fertilization",
          "B. Cleavage",
          "C. Implantation",
          "D. Gastrulation",
        ],
        correct: 1,
        explanation:
          "Severe chromosomal abnormalities often arrest during early cleavage, before implantation.",
      },
    ],

    "Second Week: Bilaminar Disc": [
      {
        text: "The bilaminar germ disc is formed primarily as a result of:",
        options: [
          "A. Differentiation of the inner cell mass into epiblast and hypoblast",
          "B. Cleavage of the zygote into blastomeres",
          "C. Gastrulation and primitive streak formation",
          "D. Splitting of the trophoblast into cytotrophoblast and syncytiotrophoblast",
        ],
        correct: 0,
        explanation:
          "The bilaminar germ disc arises when the inner cell mass differentiates into epiblast and hypoblast. Gastrulation occurs later (week 3).",
      },
      {
        text: "Which structure is directly derived from the epiblast during the second week?",
        options: [
          "A. Primary yolk sac",
          "B. Extraembryonic mesoderm",
          "C. Amniotic cavity",
          "D. Cytotrophoblast",
        ],
        correct: 2,
        explanation:
          "The amniotic cavity forms within the epiblast, lined by amnioblasts derived from epiblast cells.",
      },
      {
        text: "The hypoblast contributes mainly to the formation of:",
        options: [
          "A. All three germ layers",
          "B. Definitive endoderm",
          "C. Extraembryonic endoderm",
          "D. Amniotic ectoderm",
        ],
        correct: 2,
        explanation:
          "The hypoblast forms extraembryonic endoderm lining the yolk sac and does not contribute to the embryo proper.",
      },
      {
        text: "Which event marks the beginning of the second week of development?",
        options: [
          "A. Implantation completion",
          "B. Formation of lacunae",
          "C. Differentiation of trophoblast",
          "D. Formation of the bilaminar disc",
        ],
        correct: 3,
        explanation:
          "Although implantation is ongoing, the hallmark of week 2 is formation of the bilaminar germ disc.",
      },
      {
        text: "The Heuser’s membrane is associated with:",
        options: [
          "A. Formation of the amniotic cavity",
          "B. Lining of the primary yolk sac",
          "C. Development of the chorionic plate",
          "D. Separation of cytotrophoblast and syncytiotrophoblast",
        ],
        correct: 1,
        explanation:
          "Heuser’s membrane is derived from hypoblast cells and lines the primary yolk sac (exocoelomic cavity).",
      },
      {
        text: "Which structure disappears as the secondary (definitive) yolk sac forms?",
        options: [
          "A. Amniotic cavity",
          "B. Extraembryonic mesoderm",
          "C. Primary yolk sac",
          "D. Chorionic cavity",
        ],
        correct: 2,
        explanation:
          "The primary yolk sac is pinched off and replaced by the smaller secondary yolk sac.",
      },
      {
        text: "The extraembryonic mesoderm is located:",
        options: [
          "A. Between epiblast and hypoblast",
          "B. Between cytotrophoblast and syncytiotrophoblast",
          "C. Between trophoblast and exocoelomic membrane",
          "D. Within the bilaminar disc",
        ],
        correct: 2,
        explanation:
          "Extraembryonic mesoderm forms between trophoblast and the yolk sac lining.",
      },
      {
        text: "The formation of the chorionic cavity results from:",
        options: [
          "A. Degeneration of cytotrophoblast",
          "B. Cavitation within extraembryonic mesoderm",
          "C. Expansion of the amniotic cavity",
          "D. Fusion of yolk sac cavities",
        ],
        correct: 1,
        explanation:
          "Spaces appear and coalesce within the extraembryonic mesoderm, forming the chorionic cavity.",
      },
      {
        text: "Which structure connects the embryo to the trophoblast?",
        options: [
          "A. Amnion",
          "B. Chorionic plate",
          "C. Connecting stalk",
          "D. Yolk sac",
        ],
        correct: 2,
        explanation:
          "The connecting stalk later develops into the umbilical cord.",
      },
      {
        text: "The syncytiotrophoblast plays a key role in:",
        options: [
          "A. Formation of embryonic germ layers",
          "B. Hormone secretion and invasion of endometrium",
          "C. Formation of the amniotic cavity",
          "D. Development of extraembryonic mesoderm",
        ],
        correct: 1,
        explanation:
          "Syncytiotrophoblast is invasive and secretes hCG, maintaining pregnancy.",
      },
      {
        text: "Which structure defines the embryonic pole?",
        options: [
          "A. Presence of the yolk sac",
          "B. Site of implantation",
          "C. Attachment of the connecting stalk",
          "D. Location of the bilaminar disc",
        ],
        correct: 3,
        explanation:
          "The bilaminar disc lies at the embryonic pole, opposite the abembryonic pole.",
      },
      {
        text: "Failure of proper development of the syncytiotrophoblast would most directly affect:",
        options: [
          "A. Gastrulation",
          "B. Placental circulation",
          "C. Neural tube closure",
          "D. Somite formation",
        ],
        correct: 1,
        explanation:
          "Syncytiotrophoblast establishes maternal blood flow via lacunae.",
      },
      {
        text: "The amnioblasts originate from:",
        options: [
          "A. Hypoblast",
          "B. Cytotrophoblast",
          "C. Epiblast",
          "D. Extraembryonic mesoderm",
        ],
        correct: 2,
        explanation: "Amnioblasts differentiate from epiblast cells.",
      },
      {
        text: "Which structure contributes to the formation of the chorion?",
        options: [
          "A. Hypoblast only",
          "B. Epiblast only",
          "C. Trophoblast + extraembryonic mesoderm",
          "D. Amnion + yolk sac",
        ],
        correct: 2,
        explanation: "Chorion = trophoblast + extraembryonic mesoderm.",
      },
      {
        text: "During the second week, the embryo is best described as:",
        options: [
          "A. Triploblastic",
          "B. Diploblastic",
          "C. Unilaminar",
          "D. Mesenchymal",
        ],
        correct: 1,
        explanation:
          "The embryo has two layers (epiblast and hypoblast) → diploblastic.",
      },
      {
        text: "The lacunar stage of implantation is characterized by:",
        options: [
          "A. Formation of primary yolk sac",
          "B. Maternal blood filling trophoblastic spaces",
          "C. Differentiation of epiblast",
          "D. Formation of extraembryonic mesoderm",
        ],
        correct: 1,
        explanation:
          "Lacunae in syncytiotrophoblast fill with maternal blood, initiating uteroplacental circulation.",
      },
      {
        text: "Which structure ultimately gives rise to the umbilical cord?",
        options: [
          "A. Chorionic cavity",
          "B. Amniotic stalk",
          "C. Connecting stalk",
          "D. Yolk sac stalk",
        ],
        correct: 2,
        explanation:
          "The connecting stalk elongates to form the umbilical cord.",
      },
      {
        text: "The bilaminar disc lies between:",
        options: [
          "A. Amniotic cavity and chorionic cavity",
          "B. Amniotic cavity and yolk sac",
          "C. Yolk sac and chorionic plate",
          "D. Extraembryonic mesoderm layers",
        ],
        correct: 1,
        explanation:
          "Epiblast faces the amniotic cavity, hypoblast faces the yolk sac.",
      },
      {
        text: "Which event occurs last during the second week?",
        options: [
          "A. Formation of bilaminar disc",
          "B. Appearance of lacunae",
          "C. Development of chorionic cavity",
          "D. Differentiation of trophoblast",
        ],
        correct: 2,
        explanation:
          "The chorionic cavity forms after extraembryonic mesoderm develops, making it a later event.",
      },
      {
        text: "A defect in hypoblast formation would most directly affect development of the:",
        options: [
          "A. Amniotic cavity",
          "B. Yolk sac",
          "C. Chorion",
          "D. Placenta",
        ],
        correct: 1,
        explanation:
          "Hypoblast contributes to yolk sac formation; epiblast forms the embryo proper.",
      },
    ],

    "Third Week: Trilaminar Disc": [
      {
        text: "The earliest morphological evidence of gastrulation in humans is the:",
        options: [
          "A. Appearance of the primitive pit",
          "B. Formation of the primitive streak",
          "C. Ingression of epiblast cells",
          "D. Formation of the trilaminar germ disc",
        ],
        correct: 1,
        explanation:
          "The primitive streak is the first visible sign of gastrulation; cell migration follows its formation.",
      },
      {
        text: "Cells that replace the hypoblast during gastrulation primarily give rise to:",
        options: [
          "A. Ectoderm",
          "B. Mesoderm",
          "C. Endoderm",
          "D. Extraembryonic mesoderm",
        ],
        correct: 2,
        explanation:
          "The definitive endoderm forms when epiblast cells displace the hypoblast.",
      },
      {
        text: "Failure of regression of the primitive streak is most directly associated with:",
        options: [
          "A. Caudal regression syndrome",
          "B. Sirenomelia",
          "C. Sacrococcygeal teratoma",
          "D. VACTERL association",
        ],
        correct: 2,
        explanation:
          "Persistent pluripotent cells in the primitive streak can give rise to sacrococcygeal teratomas.",
      },
      {
        text: "The notochordal process initially forms as a:",
        options: [
          "A. Solid rod of cells",
          "B. Hollow tube with a lumen",
          "C. Flat plate of cells",
          "D. Mesenchymal condensation",
        ],
        correct: 1,
        explanation:
          "It begins as the notochordal canal, which later flattens and reforms into the definitive notochord.",
      },
      {
        text: "Which structure establishes the cranio-caudal axis of the embryo?",
        options: [
          "A. Primitive node",
          "B. Prechordal plate",
          "C. Notochord",
          "D. Primitive streak",
        ],
        correct: 3,
        explanation:
          "The primitive streak defines the body axes, including cranio-caudal orientation.",
      },
      {
        text: "The primitive node is functionally significant because it:",
        options: [
          "A. Forms somites",
          "B. Controls left–right asymmetry",
          "C. Produces extraembryonic mesoderm",
          "D. Separates ectoderm from mesoderm",
        ],
        correct: 1,
        explanation:
          "The node secretes signaling molecules (e.g., Nodal) crucial for left–right patterning.",
      },
      {
        text: "Epiblast cells that migrate cranially from the primitive node form the:",
        options: [
          "A. Prechordal plate",
          "B. Paraxial mesoderm",
          "C. Intermediate mesoderm",
          "D. Lateral plate mesoderm",
        ],
        correct: 0,
        explanation:
          "The prechordal plate contributes to forebrain and facial development.",
      },
      {
        text: "Which germ layer does not contribute to the formation of the umbilical cord?",
        options: [
          "A. Ectoderm",
          "B. Endoderm",
          "C. Mesoderm",
          "D. All contribute",
        ],
        correct: 0,
        explanation:
          "The umbilical cord contains mesoderm (Wharton’s jelly) and endoderm-derived structures, but no ectoderm.",
      },
      {
        text: "During gastrulation, mesoderm fails to form at the:",
        options: [
          "A. Primitive streak",
          "B. Primitive node",
          "C. Oropharyngeal membrane",
          "D. Cloacal membrane",
        ],
        correct: 2,
        explanation:
          "The oropharyngeal membrane lacks mesoderm and later forms the mouth opening.",
      },
      {
        text: "Which structure is derived from paraxial mesoderm?",
        options: [
          "A. Kidney tubules",
          "B. Limb bones",
          "C. Somites",
          "D. Heart tube",
        ],
        correct: 2,
        explanation:
          "Paraxial mesoderm segments into somites, which form vertebrae, ribs, and skeletal muscle.",
      },
      {
        text: "The notochord primarily functions to:",
        options: [
          "A. Form the vertebral column",
          "B. Induce neural plate formation",
          "C. Establish body cavities",
          "D. Produce mesenchyme",
        ],
        correct: 1,
        explanation:
          "The notochord releases inductive signals that trigger neurulation.",
      },
      {
        text: "Which event occurs last during the third week?",
        options: [
          "A. Primitive streak formation",
          "B. Appearance of the trilaminar disc",
          "C. Formation of the notochord",
          "D. Regression of the primitive streak",
        ],
        correct: 3,
        explanation:
          "Regression of the primitive streak occurs toward the end of the third week.",
      },
      {
        text: "Intermediate mesoderm gives rise to:",
        options: [
          "A. Heart and blood vessels",
          "B. Vertebrae",
          "C. Urogenital system",
          "D. Dermis of skin",
        ],
        correct: 2,
        explanation: "Intermediate mesoderm forms kidneys and gonads.",
      },
      {
        text: "The primitive pit is best described as:",
        options: [
          "A. A depression in the epiblast at the node",
          "B. A remnant of the hypoblast",
          "C. A cavity within the notochord",
          "D. A space between mesoderm layers",
        ],
        correct: 0,
        explanation:
          "The primitive pit is a small depression within the primitive node.",
      },
      {
        text: "Which germ layer gives rise to the epithelium of the gastrointestinal tract?",
        options: [
          "A. Ectoderm",
          "B. Mesoderm",
          "C. Endoderm",
          "D. Neural crest",
        ],
        correct: 2,
        explanation:
          "The endoderm forms the epithelial lining of the gut and respiratory tract.",
      },
      {
        text: "Failure of mesoderm formation in the caudal region results in:",
        options: [
          "A. Anencephaly",
          "B. Caudal dysgenesis",
          "C. Spina bifida",
          "D. Holoprosencephaly",
        ],
        correct: 1,
        explanation: "Deficient caudal mesoderm leads to caudal dysgenesis.",
      },
      {
        text: "Which cell population is pluripotent during gastrulation?",
        options: [
          "A. Hypoblast cells",
          "B. Epiblast cells",
          "C. Trophoblast cells",
          "D. Endodermal cells",
        ],
        correct: 1,
        explanation: "The epiblast gives rise to all three germ layers.",
      },
      {
        text: "The trilaminar germ disc consists of:",
        options: [
          "A. Epiblast, hypoblast, mesoderm",
          "B. Ectoderm, mesoderm, endoderm",
          "C. Amnion, yolk sac, mesoderm",
          "D. Neural plate, mesoderm, endoderm",
        ],
        correct: 1,
        explanation:
          "After gastrulation, the embryo is composed of ectoderm, mesoderm, and endoderm.",
      },
      {
        text: "Which signaling center is essential for head development?",
        options: [
          "A. Primitive streak",
          "B. Notochord",
          "C. Prechordal plate",
          "D. Neural crest",
        ],
        correct: 2,
        explanation:
          "The prechordal plate induces forebrain and facial structures.",
      },
      {
        text: "The lateral plate mesoderm eventually splits to form:",
        options: [
          "A. Somites",
          "B. Amnion and chorion",
          "C. Intraembryonic coelom",
          "D. Neural folds",
        ],
        correct: 2,
        explanation:
          "Splitting of the lateral plate mesoderm creates the body cavities.",
      },
    ],

    "Third to Eighth Weeks: Embryonic Period": [
      {
        text: "The embryonic period is most critical because it is characterized primarily by:",
        options: [
          "A. Rapid increase in fetal weight",
          "B. Maturation of organ systems",
          "C. Establishment of the basic body plan",
          "D. Functional differentiation of tissues",
        ],
        correct: 2,
        explanation:
          "Weeks 3–8 involve organogenesis and body patterning; defects here lead to major congenital anomalies.",
      },
      {
        text: "Failure of cranial neuropore closure during the 4th week most directly results in:",
        options: [
          "A. Spina bifida occulta",
          "B. Anencephaly",
          "C. Meningocele",
          "D. Syringomyelia",
        ],
        correct: 1,
        explanation:
          "Cranial neuropore closure failure causes anencephaly; caudal neuropore defects cause spina bifida.",
      },
      {
        text: "Which germ layer gives rise to the adrenal medulla?",
        options: [
          "A. Mesoderm",
          "B. Endoderm",
          "C. Neural crest cells",
          "D. Surface ectoderm",
        ],
        correct: 2,
        explanation:
          "The adrenal medulla derives from neural crest cells, a frequent exam trap.",
      },
      {
        text: "During embryonic folding, the foregut is primarily formed as a result of:",
        options: [
          "A. Lateral folding only",
          "B. Cephalocaudal folding only",
          "C. Differential growth of somites",
          "D. Combined cephalocaudal and lateral folding",
        ],
        correct: 1,
        explanation:
          "Cephalocaudal folding incorporates endoderm into the embryo forming the foregut.",
      },
      {
        text: "The septum transversum contributes significantly to the development of the:",
        options: [
          "A. Ventricular septum",
          "B. Liver",
          "C. Diaphragm",
          "D. Pericardium",
        ],
        correct: 2,
        explanation:
          "The septum transversum forms the central tendon of the diaphragm.",
      },
      {
        text: "The most critical time for teratogenic exposure affecting limb development is:",
        options: ["A. Week 2", "B. Week 3", "C. Weeks 4–5", "D. Weeks 7–8"],
        correct: 2,
        explanation:
          "Limb buds appear in week 4; disruption here causes major limb anomalies.",
      },
      {
        text: "Which structure is responsible for left–right axis determination during the embryonic period?",
        options: [
          "A. Primitive streak",
          "B. Notochord",
          "C. Primitive node",
          "D. Neural plate",
        ],
        correct: 2,
        explanation:
          "The primitive node secretes signaling molecules (e.g., Nodal) establishing laterality.",
      },
      {
        text: "The failure of fusion of medial nasal prominences results in:",
        options: [
          "A. Cleft lip",
          "B. Oblique facial cleft",
          "C. Cleft palate",
          "D. Macrostomia",
        ],
        correct: 0,
        explanation:
          "Cleft lip results from failure of fusion between medial nasal and maxillary prominences.",
      },
      {
        text: "The heart begins to beat during which week of embryonic development?",
        options: [
          "A. End of 2nd week",
          "B. Middle of 3rd week",
          "C. Beginning of 4th week",
          "D. End of 4th week",
        ],
        correct: 1,
        explanation: "Cardiac activity begins around day 22, in the 3rd week.",
      },
      {
        text: "Which of the following best explains why the embryonic gut tube initially communicates with the yolk sac?",
        options: [
          "A. Persistence of vitelline duct",
          "B. Rapid elongation of the embryo",
          "C. Incomplete lateral folding",
          "D. Delayed mesodermal differentiation",
        ],
        correct: 2,
        explanation:
          "Until lateral folding is complete, the midgut remains open to the yolk sac.",
      },
      {
        text: "Neural crest cells contribute to all EXCEPT:",
        options: [
          "A. Schwann cells",
          "B. Melanocytes",
          "C. Odontoblasts",
          "D. Oligodendrocytes",
        ],
        correct: 3,
        explanation:
          "Oligodendrocytes arise from neuroectoderm, not neural crest.",
      },
      {
        text: "The primary reason the embryonic head appears disproportionately large between weeks 4–8 is:",
        options: [
          "A. Delayed limb growth",
          "B. Early development of the brain",
          "C. Excessive mesoderm proliferation",
          "D. Lack of body cavity formation",
        ],
        correct: 1,
        explanation:
          "Rapid brain and neural tube expansion dominates early embryonic growth.",
      },
      {
        text: "Which event marks the transition from trilaminar disc to a recognizable human form?",
        options: [
          "A. Gastrulation",
          "B. Neurulation",
          "C. Embryonic folding",
          "D. Organ differentiation",
        ],
        correct: 2,
        explanation:
          "Embryonic folding converts the flat disc into a cylindrical body form.",
      },
      {
        text: "The notochord primarily functions to:",
        options: [
          "A. Form the vertebral bodies",
          "B. Induce neural tube formation",
          "C. Produce somites",
          "D. Separate ectoderm and mesoderm",
        ],
        correct: 1,
        explanation:
          "The notochord acts as an inductive organizer for neural plate formation.",
      },
      {
        text: "Failure of partitioning of the truncus arteriosus results in:",
        options: [
          "A. Tetralogy of Fallot",
          "B. Persistent truncus arteriosus",
          "C. Transposition of great vessels",
          "D. Coarctation of aorta",
        ],
        correct: 1,
        explanation:
          "Lack of aorticopulmonary septum leads to persistent truncus arteriosus.",
      },
      {
        text: "Which structure temporarily anchors the embryo to the chorion during early development?",
        options: [
          "A. Vitelline duct",
          "B. Connecting stalk",
          "C. Allantois",
          "D. Amniotic membrane",
        ],
        correct: 1,
        explanation: "The connecting stalk later forms the umbilical cord.",
      },
      {
        text: "The embryonic period ends at 8 weeks because:",
        options: [
          "A. Organ systems become functional",
          "B. Fetal circulation begins",
          "C. Major organ primordia are established",
          "D. Growth rate decreases",
        ],
        correct: 2,
        explanation:
          "By 8 weeks, all major organs are present in rudimentary form.",
      },
      {
        text: "Which anomaly results from failure of lateral body wall folding?",
        options: [
          "A. Omphalocele",
          "B. Gastroschisis",
          "C. Meckel diverticulum",
          "D. Diaphragmatic hernia",
        ],
        correct: 0,
        explanation:
          "Omphalocele arises from failure of ventral body wall closure.",
      },
      {
        text: "The pharyngeal arches primarily develop during:",
        options: [
          "A. Weeks 2–3",
          "B. Weeks 3–4",
          "C. Weeks 4–5",
          "D. Weeks 6–7",
        ],
        correct: 2,
        explanation: "Pharyngeal arches are most prominent in weeks 4–5.",
      },
      {
        text: "The most common cause of severe congenital malformations during the embryonic period is:",
        options: [
          "A. Genetic mutations alone",
          "B. Mechanical forces",
          "C. Teratogenic exposure during organogenesis",
          "D. Placental insufficiency",
        ],
        correct: 2,
        explanation:
          "Teratogens during weeks 3–8 disrupt organogenesis, causing major anomalies.",
      },
    ],

    "Third Month to Birth: Fetus": [
      {
        text: "During the fetal period, the most rapid increase in body length occurs primarily due to growth of which structure?",
        options: [
          "A. Vertebral column",
          "B. Long bones of limbs",
          "C. Skull base",
          "D. Intervertebral discs",
        ],
        correct: 0,
        explanation:
          "In the fetal period, crown–heel length increases mainly due to elongation of the vertebral column, not limb bones. Limb growth contributes later but is not the main driver.",
      },
      {
        text: "At the beginning of the third month, the placenta is primarily responsible for which function that the embryo previously relied on the yolk sac for?",
        options: [
          "A. Gas exchange",
          "B. Hematopoiesis",
          "C. Nutrient absorption",
          "D. Waste elimination",
        ],
        correct: 1,
        explanation:
          "Early hematopoiesis occurs in the yolk sac, but by the third month, the placenta and liver assume this role before bone marrow dominance later.",
      },
      {
        text: "Which placental layer is absent at term but present earlier in gestation?",
        options: [
          "A. Syncytiotrophoblast",
          "B. Cytotrophoblast",
          "C. Endothelium of fetal capillaries",
          "D. Connective tissue of villus core",
        ],
        correct: 1,
        explanation:
          "The cytotrophoblast layer progressively disappears, thinning the placental membrane to enhance diffusion efficiency near term.",
      },
      {
        text: "The fetal surface of the placenta is derived embryologically from which structure?",
        options: [
          "A. Decidua basalis",
          "B. Chorion frondosum",
          "C. Amnion",
          "D. Yolk sac",
        ],
        correct: 1,
        explanation:
          "The chorion frondosum forms the fetal component of the placenta, while decidua basalis is maternal.",
      },
      {
        text: "Which event marks the transition from embryonic to fetal period?",
        options: [
          "A. Completion of organogenesis",
          "B. Appearance of external genitalia",
          "C. Formation of placenta",
          "D. Initiation of ossification",
        ],
        correct: 0,
        explanation:
          "The fetal period begins at week 9, marked by completion of organogenesis, after which growth and maturation dominate.",
      },
      {
        text: "Which statement regarding fetal circulation is TRUE?",
        options: [
          "A. Blood entering the inferior vena cava is fully oxygenated",
          "B. Ductus arteriosus connects left atrium to aorta",
          "C. Most oxygenated blood bypasses the liver",
          "D. Umbilical arteries carry oxygenated blood",
        ],
        correct: 2,
        explanation:
          "The ductus venosus allows oxygenated blood to bypass the liver, directing it toward the heart.",
      },
      {
        text: "The umbilical vein ultimately drains into which fetal vessel?",
        options: [
          "A. Portal vein",
          "B. Inferior vena cava",
          "C. Hepatic veins",
          "D. Ductus arteriosus",
        ],
        correct: 1,
        explanation:
          "The umbilical vein → ductus venosus → inferior vena cava, ensuring oxygen-rich blood reaches the heart efficiently.",
      },
      {
        text: "Which placental hormone is essential for maintaining the corpus luteum in early pregnancy?",
        options: ["A. Progesterone", "B. Estrogen", "C. hPL", "D. hCG"],
        correct: 3,
        explanation:
          "Human chorionic gonadotropin (hCG) maintains the corpus luteum until the placenta can synthesize progesterone independently.",
      },
      {
        text: "Which factor most significantly reduces placental membrane thickness near term?",
        options: [
          "A. Loss of villous connective tissue",
          "B. Fusion of fetal capillaries with syncytiotrophoblast",
          "C. Disappearance of cytotrophoblast",
          "D. Reduction in amniotic fluid",
        ],
        correct: 2,
        explanation:
          "The loss of cytotrophoblast is the key structural change that thins the placental membrane and improves diffusion.",
      },
      {
        text: "Fetal hemoglobin differs from adult hemoglobin primarily because it:",
        options: [
          "A. Has lower affinity for oxygen",
          "B. Binds carbon dioxide preferentially",
          "C. Binds oxygen more tightly",
          "D. Is resistant to degradation",
        ],
        correct: 2,
        explanation:
          "Fetal hemoglobin (HbF) has higher oxygen affinity, enabling effective extraction from maternal blood.",
      },
      {
        text: "Which structure prevents mixing of maternal and fetal blood under normal conditions?",
        options: [
          "A. Decidua basalis",
          "B. Intervillous space",
          "C. Placental membrane",
          "D. Chorionic plate",
        ],
        correct: 2,
        explanation:
          "The placental membrane separates maternal blood in intervillous spaces from fetal capillaries.",
      },
      {
        text: "At which fetal age does the skin lose its transparent appearance due to keratinization?",
        options: ["A. 12 weeks", "B. 16 weeks", "C. 20 weeks", "D. 28 weeks"],
        correct: 2,
        explanation:
          "By 20 weeks, keratinization thickens the skin, reducing transparency.",
      },
      {
        text: "Which of the following contributes MOST to fetal immunological protection?",
        options: [
          "A. IgM transfer",
          "B. Placental macrophages",
          "C. IgG transfer",
          "D. Amniotic fluid antibodies",
        ],
        correct: 2,
        explanation:
          "IgG antibodies cross the placenta, providing passive immunity to the fetus.",
      },
      {
        text: "Which placental abnormality results from implantation over the internal cervical os?",
        options: [
          "A. Placenta accreta",
          "B. Placenta previa",
          "C. Abruptio placentae",
          "D. Placental infarction",
        ],
        correct: 1,
        explanation:
          "Placenta previa occurs when the placenta covers the cervical opening, risking bleeding.",
      },
      {
        text: "Vernix caseosa primarily functions to:",
        options: [
          "A. Facilitate thermoregulation",
          "B. Prevent amniotic fluid absorption",
          "C. Protect fetal skin",
          "D. Aid lung maturation",
        ],
        correct: 2,
        explanation:
          "Vernix caseosa protects fetal skin from maceration and infection.",
      },
      {
        text: "Which fetal organ system shows the LEAST functional maturity at birth?",
        options: [
          "A. Cardiovascular",
          "B. Digestive",
          "C. Respiratory",
          "D. Renal",
        ],
        correct: 2,
        explanation:
          "The lungs are structurally formed but functionally immature, relying on surfactant near term.",
      },
      {
        text: "Which vessel becomes the ligamentum teres of the liver after birth?",
        options: [
          "A. Umbilical artery",
          "B. Umbilical vein",
          "C. Ductus arteriosus",
          "D. Ductus venosus",
        ],
        correct: 1,
        explanation: "The umbilical vein becomes the ligamentum teres hepatis.",
      },
      {
        text: "Which hormone produced by the placenta alters maternal metabolism to favor fetal glucose availability?",
        options: [
          "A. Estrogen",
          "B. Progesterone",
          "C. hPL",
          "D. Human placental lactogen",
        ],
        correct: 3,
        explanation:
          "hPL induces maternal insulin resistance, increasing glucose availability to the fetus.",
      },
      {
        text: "Which fetal reflex indicates neurological maturity near term?",
        options: [
          "A. Moro reflex",
          "B. Grasp reflex",
          "C. Rooting reflex",
          "D. Sucking reflex",
        ],
        correct: 3,
        explanation:
          "The sucking reflex indicates advanced neuromuscular coordination essential for postnatal feeding.",
      },
      {
        text: "Which statement best explains why placental gas exchange is efficient despite low fetal oxygen tension?",
        options: [
          "A. Large maternal blood volume",
          "B. High fetal cardiac output",
          "C. Thin placental membrane and HbF",
          "D. Slow fetal metabolism",
        ],
        correct: 2,
        explanation:
          "Efficiency is due to thin placental membrane and high oxygen affinity of fetal hemoglobin, not high oxygen pressure.",
      },
    ],
  },

  "neuro-embryo": {
    "Development of Head": [
      {
        text: "Which pharyngeal arch contributes most significantly to the formation of the maxilla?",
        options: ["A. First", "B. Second", "C. Third", "D. Fourth"],
        correct: 0,
        explanation:
          "The first pharyngeal (mandibular) arch gives rise to the maxilla, mandible, malleus, incus, and muscles of mastication.",
      },
      {
        text: "The ectodermal placodes of the head primarily give rise to:",
        options: [
          "A. Bones of the skull",
          "B. Cranial nerves’ sensory ganglia",
          "C. Pharyngeal arch cartilage",
          "D. Connective tissue of the face",
        ],
        correct: 1,
        explanation:
          "Ectodermal placodes, such as the otic and olfactory placodes, differentiate into sensory ganglia of cranial nerves and special sensory structures.",
      },
      {
        text: "The cranial neural crest cells do NOT contribute to which of the following?",
        options: [
          "A. Frontal bone",
          "B. Dentin of teeth",
          "C. Muscles of mastication",
          "D. Connective tissue of the face",
        ],
        correct: 2,
        explanation:
          "Muscles of mastication derive from mesoderm of the first pharyngeal arch; neural crest contributes to bones, cartilage, and connective tissue.",
      },
      {
        text: "Which pharyngeal arch cartilage forms the stapes of the middle ear?",
        options: ["A. First", "B. Second", "C. Third", "D. Fourth"],
        correct: 1,
        explanation:
          "The second arch (Reichert’s cartilage) forms the stapes, styloid process, and lesser horn of hyoid.",
      },
      {
        text: "The forebrain (prosencephalon) gives rise to which of the following structures?",
        options: [
          "A. Midbrain",
          "B. Cerebellum",
          "C. Cerebral hemispheres",
          "D. Medulla oblongata",
        ],
        correct: 2,
        explanation:
          "The prosencephalon differentiates into the telencephalon (cerebral hemispheres) and diencephalon (thalamus, hypothalamus).",
      },
      {
        text: "The branchial arch responsible for forming the greater horn of the hyoid bone is:",
        options: ["A. First", "B. Second", "C. Third", "D. Fourth"],
        correct: 2,
        explanation:
          "The third pharyngeal arch forms the greater horn of the hyoid and contributes to the stylopharyngeus muscle.",
      },
      {
        text: "Which cranial nerve is associated with the second pharyngeal arch?",
        options: [
          "A. Trigeminal (V)",
          "B. Facial (VII)",
          "C. Glossopharyngeal (IX)",
          "D. Vagus (X)",
        ],
        correct: 1,
        explanation:
          "The facial nerve innervates muscles of facial expression, which derive from the second arch.",
      },
      {
        text: "Which placode contributes to the formation of the lens of the eye?",
        options: [
          "A. Otic placode",
          "B. Lens placode",
          "C. Nasal placode",
          "D. Trigeminal placode",
        ],
        correct: 1,
        explanation:
          "The lens placode is a thickened ectoderm that invaginates to form the lens of the eye.",
      },
      {
        text: "The first pharyngeal pouch forms which adult structure?",
        options: [
          "A. Middle ear cavity",
          "B. Palatine tonsil",
          "C. Thyroid gland",
          "D. Parathyroid gland",
        ],
        correct: 0,
        explanation:
          "The first pouch forms the tubotympanic recess, which develops into the middle ear cavity and Eustachian tube.",
      },
      {
        text: "The cranial neural crest contributes to which cranial ganglia?",
        options: [
          "A. Trigeminal, facial, glossopharyngeal, and vagus sensory ganglia",
          "B. Optic and olfactory only",
          "C. Spinal dorsal root ganglia",
          "D. All cranial motor nuclei",
        ],
        correct: 0,
        explanation:
          "Neural crest cells migrate into the head to form sensory ganglia of cranial nerves, but motor nuclei are derived from neural tube.",
      },
      {
        text: "Which arch contributes to the thyroid cartilage?",
        options: ["A. First", "B. Second", "C. Third", "D. Fourth"],
        correct: 3,
        explanation:
          "The fourth arch (and partly sixth) gives rise to laryngeal cartilages such as the thyroid, cricoid, and arytenoid.",
      },
      {
        text: "The nasal placode develops into:",
        options: [
          "A. Olfactory epithelium",
          "B. Retina",
          "C. Cochlea",
          "D. Tongue taste buds",
        ],
        correct: 0,
        explanation:
          "Nasal placodes invaginate to form olfactory pits and ultimately the olfactory epithelium.",
      },
      {
        text: "Which of the following is NOT derived from pharyngeal arch mesoderm?",
        options: [
          "A. Muscles of facial expression",
          "B. Muscles of mastication",
          "C. Stylopharyngeus",
          "D. Dentin of teeth",
        ],
        correct: 3,
        explanation:
          "Dentin is formed from neural crest-derived ectomesenchyme, not arch mesoderm.",
      },
      {
        text: "The “frontonasal prominence” gives rise to:",
        options: [
          "A. Mandible",
          "B. Upper lip and nose",
          "C. Hyoid bone",
          "D. Stapes",
        ],
        correct: 1,
        explanation:
          "The frontonasal prominence forms the forehead, bridge of the nose, and medial/lateral nasal prominences contributing to the upper lip and nose.",
      },
      {
        text: "Failure of fusion between the maxillary prominence and medial nasal prominence results in:",
        options: [
          "A. Cleft lip",
          "B. Micrognathia",
          "C. Ankyloglossia",
          "D. Thyroglossal cyst",
        ],
        correct: 0,
        explanation:
          "Proper fusion of maxillary and medial nasal prominences is essential for formation of the upper lip.",
      },
      {
        text: "The otic placode contributes to:",
        options: [
          "A. Inner ear structures",
          "B. Middle ear ossicles",
          "C. Auditory nerve ganglia only",
          "D. Tympanic membrane",
        ],
        correct: 0,
        explanation:
          "The otic placode invaginates to form the otic vesicle, which differentiates into cochlea, vestibule, and semicircular canals.",
      },
      {
        text: "The cranial neural crest is essential for the formation of:",
        options: [
          "A. Calvarial bones",
          "B. Spinal vertebrae",
          "C. Skeletal muscles of the back",
          "D. Brain neurons",
        ],
        correct: 0,
        explanation:
          "Cranial neural crest migrates into the head to form craniofacial bones and connective tissue, but axial skeleton and muscles derive from mesoderm.",
      },
      {
        text: "The parathyroid glands are derived from which pharyngeal pouches?",
        options: [
          "A. First and second",
          "B. Third and fourth",
          "C. Second and third",
          "D. Fourth and fifth",
        ],
        correct: 1,
        explanation:
          "The dorsal part of the third pouch forms inferior parathyroids, the dorsal part of the fourth forms superior parathyroids.",
      },
      {
        text: "Which of the following cranial nerves is NOT associated with a specific pharyngeal arch?",
        options: [
          "A. Vagus (X)",
          "B. Facial (VII)",
          "C. Trigeminal (V)",
          "D. Olfactory (I)",
        ],
        correct: 3,
        explanation:
          "Olfactory nerve arises from olfactory placode, not pharyngeal arches.",
      },
      {
        text: "The anterior pituitary (adenohypophysis) develops from:",
        options: [
          "A. Neuroectoderm of diencephalon",
          "B. Oral ectoderm of Rathke’s pouch",
          "C. Neural crest cells",
          "D. Mesoderm of first arch",
        ],
        correct: 1,
        explanation:
          "Rathke’s pouch is an ectodermal diverticulum from the roof of the stomodeum, forming the adenohypophysis.",
      },
    ],
    "Development of Neck": [
      {
        text: "Which pharyngeal arch gives rise to the greater horn of the hyoid bone?",
        options: ["A. 1st arch", "B. 2nd arch", "C. 3rd arch", "D. 4th arch"],
        correct: 2,
        explanation:
          "The 3rd pharyngeal arch cartilage forms the greater horn and lower part of the hyoid bone, while the 2nd arch forms the lesser horn.",
      },
      {
        text: "The stylopharyngeus muscle is derived from which pharyngeal arch?",
        options: ["A. 2nd", "B. 3rd", "C. 4th", "D. 1st"],
        correct: 1,
        explanation:
          "The 3rd pharyngeal arch gives rise to the stylopharyngeus, innervated by the glossopharyngeal nerve (CN IX).",
      },
      {
        text: "Which cranial nerve is associated with the second pharyngeal arch?",
        options: ["A. CN V", "B. CN VII", "C. CN IX", "D. CN X"],
        correct: 1,
        explanation:
          "The 2nd arch is innervated by the facial nerve (CN VII) and forms muscles like the stapedius and facial expression muscles.",
      },
      {
        text: "Failure of the second pharyngeal arch to overgrow the third and fourth arches can lead to:",
        options: [
          "A. Branchial cysts",
          "B. Thyroglossal cyst",
          "C. Cervical sinus obliteration",
          "D. DiGeorge syndrome",
        ],
        correct: 0,
        explanation:
          "Incomplete overgrowth of the 2nd arch leaves cervical cysts along the lateral neck (commonly anterior to the SCM).",
      },
      {
        text: "The thymus develops from which pharyngeal pouch?",
        options: ["A. 1st", "B. 2nd", "C. 3rd", "D. 4th"],
        correct: 2,
        explanation:
          "The 3rd pharyngeal pouch forms the thymus and inferior parathyroid glands.",
      },
      {
        text: "The superior parathyroid glands originate from which structure?",
        options: [
          "A. 1st pharyngeal pouch",
          "B. 2nd pharyngeal pouch",
          "C. 3rd pharyngeal pouch",
          "D. 4th pharyngeal pouch",
        ],
        correct: 3,
        explanation:
          "Superior parathyroids develop from the dorsal wings of the 4th pharyngeal pouch, whereas inferior parathyroids are from the 3rd pouch.",
      },
      {
        text: "Which anomaly results from the persistence of the thyroglossal duct?",
        options: [
          "A. Lateral neck cyst",
          "B. Median neck cyst",
          "C. Branchial fistula",
          "D. DiGeorge anomaly",
        ],
        correct: 1,
        explanation:
          "The thyroglossal duct connects the foramen cecum to the thyroid gland; failure to regress results in a midline neck cyst.",
      },
      {
        text: "The thyroid gland originates from which embryological structure?",
        options: [
          "A. 1st pharyngeal pouch",
          "B. Foramen cecum",
          "C. 2nd pharyngeal arch",
          "D. Ultimobranchial body",
        ],
        correct: 1,
        explanation:
          "The thyroid primordium forms at the foramen cecum at the tongue base and migrates anteriorly to the neck.",
      },
      {
        text: "The ultimobranchial body contributes to which cells in the thyroid?",
        options: [
          "A. Follicular cells",
          "B. C-cells (parafollicular)",
          "C. Chief cells",
          "D. Thyrocytes",
        ],
        correct: 1,
        explanation:
          "The ultimobranchial body (from 4th pouch) forms calcitonin-secreting parafollicular (C) cells.",
      },
      {
        text: "Which pharyngeal arch forms the muscles of mastication?",
        options: ["A. 1st", "B. 2nd", "C. 3rd", "D. 4th"],
        correct: 0,
        explanation:
          "The 1st arch gives rise to the muscles of mastication, mylohyoid, anterior digastric, and is innervated by CN V3.",
      },
      {
        text: "The lateral cervical cyst is usually located:",
        options: [
          "A. Midline at hyoid level",
          "B. Anterior border of SCM",
          "C. Posterior border of SCM",
          "D. Near thyroid cartilage",
        ],
        correct: 1,
        explanation:
          "Branchial cysts (from 2nd pouch remnants) are typically along the anterior border of the sternocleidomastoid muscle.",
      },
      {
        text: "A cervical sinus forms temporarily during development from which pharyngeal arches?",
        options: ["A. 1st–2nd", "B. 2nd–4th", "C. 3rd–4th", "D. 1st–4th"],
        correct: 1,
        explanation:
          "The cervical sinus is formed by the 2nd arch overgrowing the 3rd and 4th arches and usually obliterates later.",
      },
      {
        text: "Which pharyngeal arch contributes to the epiglottis?",
        options: ["A. 2nd", "B. 3rd", "C. 4th and 6th", "D. 1st"],
        correct: 2,
        explanation:
          "The 4th and 6th arches form laryngeal cartilages including the epiglottis.",
      },
      {
        text: "Persistence of a pharyngeal pouch derivative in the neck can lead to:",
        options: [
          "A. Thyroglossal fistula",
          "B. Branchial fistula",
          "C. Goiter",
          "D. Cervical rib",
        ],
        correct: 1,
        explanation:
          "If pharyngeal pouch structures fail to regress or properly migrate, lateral neck fistulas may form.",
      },
      {
        text: "The hyoid bone lesser horn arises from which arch?",
        options: ["A. 1st", "B. 2nd", "C. 3rd", "D. 4th"],
        correct: 1,
        explanation:
          "The 2nd pharyngeal arch (Reichert’s cartilage) forms the lesser horn and upper body of the hyoid.",
      },
      {
        text: "Which abnormality is most commonly located at the midline of the neck and moves on tongue protrusion?",
        options: [
          "A. Branchial cyst",
          "B. Thyroglossal cyst",
          "C. Cervical rib",
          "D. Dermoid cyst",
        ],
        correct: 1,
        explanation:
          "Thyroglossal cysts are attached to the hyoid or thyroglossal duct remnants and move with tongue movement.",
      },
      {
        text: "Which pharyngeal arch contributes to the cricothyroid muscle?",
        options: ["A. 3rd", "B. 4th", "C. 6th", "D. 2nd"],
        correct: 1,
        explanation:
          "The cricothyroid muscle develops from the 4th arch, innervated by the superior laryngeal branch of CN X.",
      },
      {
        text: "The glossopharyngeal nerve is associated with which pharyngeal arch derivatives?",
        options: ["A. 1st", "B. 2nd", "C. 3rd", "D. 4th"],
        correct: 2,
        explanation:
          "CN IX innervates derivatives of the 3rd pharyngeal arch (stylopharyngeus) and contributes to pharyngeal sensation.",
      },
      {
        text: "DiGeorge syndrome is caused by defective development of which pharyngeal pouches?",
        options: [
          "A. 1st and 2nd",
          "B. 3rd and 4th",
          "C. 2nd and 3rd",
          "D. 4th and 6th",
        ],
        correct: 1,
        explanation:
          "The 3rd and 4th pharyngeal pouches fail to develop, leading to absent thymus and parathyroid hypoplasia.",
      },
      {
        text: "Which muscle of the pharynx is derived from the 4th arch?",
        options: [
          "A. Stylopharyngeus",
          "B. Cricothyroid",
          "C. Mylohyoid",
          "D. Levator veli palatini",
        ],
        correct: 3,
        explanation:
          "Muscles of the pharynx from the 4th arch (like levator veli palatini, constrictors) are innervated by the superior laryngeal nerve (CN X).",
      },
    ],
    "Development of Ear": [
      {
        text: "The auditory (Eustachian) tube and the middle ear cavity are primarily derived from which embryonic structure?",
        options: [
          "A. First pharyngeal arch",
          "B. First pharyngeal pouch",
          "C. Second pharyngeal pouch",
          "D. Second pharyngeal arch",
        ],
        correct: 1,
        explanation:
          "The first pharyngeal pouch forms the tubotympanic recess, which gives rise to the middle ear cavity and auditory tube.",
      },
      {
        text: "Which structure gives rise to the ossicles of the middle ear?",
        options: [
          "A. First and second pharyngeal arches",
          "B. First pharyngeal pouch",
          "C. Otic placode",
          "D. Second pharyngeal pouch",
        ],
        correct: 0,
        explanation:
          "Malleus and incus develop from the first arch (Meckel’s cartilage), stapes from the second arch (Reichert’s cartilage).",
      },
      {
        text: "The inner ear develops from which embryonic origin?",
        options: [
          "A. Endoderm of the first pharyngeal pouch",
          "B. Mesoderm of the head region",
          "C. Ectoderm of the otic placode",
          "D. Neural crest cells",
        ],
        correct: 2,
        explanation:
          "The otic placode thickens in the surface ectoderm near the hindbrain and invaginates to form the otic vesicle, which becomes the membranous labyrinth.",
      },
      {
        text: "The semicircular canals are formed from which part of the otic vesicle?",
        options: [
          "A. Saccule",
          "B. Utricle",
          "C. Cochlear duct",
          "D. Endolymphatic duct",
        ],
        correct: 1,
        explanation:
          "The utricle gives rise to the semicircular canals, which are responsible for balance.",
      },
      {
        text: "Which structure develops from the distal part of the otic vesicle?",
        options: ["A. Cochlear duct", "B. Saccule", "C. Utricle", "D. Stapes"],
        correct: 0,
        explanation:
          "The cochlear duct, responsible for hearing, develops from the ventral/distal portion of the otic vesicle.",
      },
      {
        text: "The hair cells of the organ of Corti originate from:",
        options: [
          "A. Neural crest cells",
          "B. Otic placode ectoderm",
          "C. First pharyngeal pouch endoderm",
          "D. Mesoderm of the head",
        ],
        correct: 1,
        explanation:
          "Hair cells are specialized epithelial cells derived from the otic placode, which forms the sensory epithelium of the inner ear.",
      },
      {
        text: "The stapes of the middle ear arises from which cartilage?",
        options: [
          "A. Meckel’s cartilage",
          "B. Reichert’s cartilage",
          "C. Otic capsule",
          "D. Sclerotome of occipital somites",
        ],
        correct: 1,
        explanation:
          "Reichert’s cartilage is from the second pharyngeal arch and forms the stapes.",
      },
      {
        text: "The tympanic membrane has contributions from which germ layers?",
        options: [
          "A. Ectoderm only",
          "B. Endoderm only",
          "C. Ectoderm, mesoderm, and endoderm",
          "D. Mesoderm only",
        ],
        correct: 2,
        explanation:
          "The outer layer from ectoderm, middle fibrous layer from mesoderm, and inner layer from endoderm of the first pharyngeal pouch.",
      },
      {
        text: "The spiral ganglion is derived from:",
        options: [
          "A. Neural crest cells",
          "B. Otic vesicle neuroblasts",
          "C. First pharyngeal pouch",
          "D. Mesoderm",
        ],
        correct: 1,
        explanation:
          "The spiral ganglion contains sensory neurons from otic placode neuroblasts, connecting the cochlear hair cells to the brainstem.",
      },
      {
        text: "Which of the following structures is NOT derived from the otic placode?",
        options: [
          "A. Cochlear duct",
          "B. Semicircular canals",
          "C. Malleus",
          "D. Vestibule",
        ],
        correct: 2,
        explanation:
          "Malleus is from Meckel’s cartilage of the first pharyngeal arch, not the otic placode.",
      },
      {
        text: "Which nerve carries sensory input from the cochlea?",
        options: [
          "A. Vestibulocochlear nerve (CN VIII)",
          "B. Facial nerve (CN VII)",
          "C. Glossopharyngeal nerve (CN IX)",
          "D. Trigeminal nerve (CN V)",
        ],
        correct: 0,
        explanation:
          "The cochlear division of CN VIII carries auditory signals; the vestibular division carries balance information.",
      },
      {
        text: "The endolymphatic sac is an extension of which part of the otic vesicle?",
        options: [
          "A. Dorsal part",
          "B. Ventral part",
          "C. Lateral wall",
          "D. Medial wall",
        ],
        correct: 0,
        explanation:
          "The dorsal portion of the otic vesicle forms the utricle and endolymphatic duct/sac.",
      },
      {
        text: "The round and oval windows develop from which embryonic process?",
        options: [
          "A. Mesenchyme resorption",
          "B. Direct otic vesicle differentiation",
          "C. Neural crest ossification",
          "D. Endodermal proliferation",
        ],
        correct: 0,
        explanation:
          "Surrounding mesenchyme condenses to form the otic capsule, and selective resorption forms the round and oval windows.",
      },
      {
        text: "The first pharyngeal cleft forms:",
        options: [
          "A. External auditory meatus",
          "B. Tympanic cavity",
          "C. Cochlea",
          "D. Semicircular canals",
        ],
        correct: 0,
        explanation:
          "The first pharyngeal cleft forms the external ear canal; the first pouch forms the middle ear cavity.",
      },
      {
        text: "The auricle (pinna) develops from:",
        options: [
          "A. Six auricular hillocks on the first and second arches",
          "B. Otic placode ectoderm",
          "C. First pharyngeal pouch",
          "D. Neural crest mesenchyme of the third arch",
        ],
        correct: 0,
        explanation:
          "Hillocks 1–3 are from the first arch, 4–6 from the second arch.",
      },
      {
        text: "Which statement about the cochlear duct is correct?",
        options: [
          "A. It contains perilymph",
          "B. It contains endolymph",
          "C. It originates from Reichert’s cartilage",
          "D. It forms the malleus",
        ],
        correct: 1,
        explanation:
          "The cochlear duct (scala media) contains endolymph; scala vestibuli and tympani contain perilymph.",
      },
      {
        text: "Defective fusion of the first pharyngeal cleft and pouch can result in:",
        options: [
          "A. Preauricular sinus",
          "B. Sensorineural deafness",
          "C. Otosclerosis",
          "D. Meniere’s disease",
        ],
        correct: 0,
        explanation:
          "Failure of cleft–pouch fusion can leave epithelial-lined cysts or sinuses near the ear.",
      },
      {
        text: "Which of the following gives rise to the cochlear nerve?",
        options: [
          "A. Neuroblasts from the otic vesicle",
          "B. Neural crest of the second arch",
          "C. Mesoderm of the first arch",
          "D. Endoderm of the first pouch",
        ],
        correct: 0,
        explanation:
          "Spiral ganglion neurons differentiate from otic vesicle neuroblasts and form the cochlear nerve.",
      },
      {
        text: "Which signaling molecule is critical for otic placode induction?",
        options: [
          "A. FGF3 and FGF10",
          "B. Sonic hedgehog (SHH) only",
          "C. BMP4 only",
          "D. Wnt1 only",
        ],
        correct: 0,
        explanation:
          "FGF signaling from hindbrain and mesenchyme induces otic placode formation.",
      },
      {
        text: "The vestibular apparatus (utricle and semicircular canals) is primarily derived from which part of the otic vesicle?",
        options: [
          "A. Dorsal portion",
          "B. Ventral portion",
          "C. Lateral portion",
          "D. Medial portion",
        ],
        correct: 0,
        explanation:
          "Dorsal otic vesicle forms utricle, semicircular canals, and endolymphatic duct/sac; ventral forms saccule and cochlear duct.",
      },
    ],
    "Development of Eye": [
      {
        text: "The optic vesicle is an evagination of which brain vesicle?",
        options: [
          "A. Telencephalon",
          "B. Diencephalon",
          "C. Mesencephalon",
          "D. Rhombencephalon",
        ],
        correct: 1,
        explanation: "The optic vesicle arises from the diencephalon.",
      },
      {
        text: "The lens placode develops from:",
        options: [
          "A. Neural ectoderm",
          "B. Surface ectoderm",
          "C. Mesoderm",
          "D. Endoderm",
        ],
        correct: 1,
        explanation:
          "The lens placode is formed by thickening of surface ectoderm overlying the optic vesicle.",
      },
      {
        text: "Which structure invaginates to form the optic cup?",
        options: [
          "A. Optic vesicle",
          "B. Lens placode",
          "C. Surface ectoderm",
          "D. Neural crest",
        ],
        correct: 0,
        explanation:
          "The distal part of the optic vesicle invaginates to form the double-layered optic cup.",
      },
      {
        text: "The outer layer of the optic cup gives rise to:",
        options: [
          "A. Retina",
          "B. Pigmented epithelium",
          "C. Lens",
          "D. Cornea",
        ],
        correct: 1,
        explanation:
          "The outer layer becomes the pigmented epithelium; the inner layer forms the neural retina.",
      },
      {
        text: "The choroid and sclera are derived from:",
        options: [
          "A. Neural ectoderm",
          "B. Surface ectoderm",
          "C. Mesoderm",
          "D. Endoderm",
        ],
        correct: 2,
        explanation:
          "Mesenchymal cells from neural crest and mesoderm form the choroid and sclera.",
      },
      {
        text: "The hyaloid artery is a branch of:",
        options: [
          "A. Ophthalmic artery",
          "B. Internal carotid",
          "C. External carotid",
          "D. Basilar artery",
        ],
        correct: 0,
        explanation:
          "The hyaloid artery branches from the ophthalmic artery to supply the developing eye.",
      },
      {
        text: "Which of the following is NOT a derivative of the surface ectoderm in eye development?",
        options: ["A. Lens", "B. Cornea", "C. Conjunctiva", "D. Iris"],
        correct: 3,
        explanation:
          "The iris is derived from the optic cup; lens, cornea, and conjunctiva are from surface ectoderm.",
      },
      {
        text: "The optic nerve develops from:",
        options: [
          "A. Axons of ganglion cells",
          "B. Neural crest cells",
          "C. Mesenchymal cells",
          "D. Surface ectoderm",
        ],
        correct: 0,
        explanation:
          "The optic nerve is formed by axons of retinal ganglion cells.",
      },
      {
        text: "Coloboma of the iris results from failure of:",
        options: [
          "A. Optic vesicle formation",
          "B. Lens induction",
          "C. Optic cup closure",
          "D. Neural crest migration",
        ],
        correct: 2,
        explanation:
          "Incomplete closure of the optic cup ventrally leads to coloboma.",
      },
      {
        text: "The ciliary body develops from:",
        options: [
          "A. Outer optic cup",
          "B. Inner optic cup",
          "C. Lens",
          "D. Surface ectoderm",
        ],
        correct: 1,
        explanation:
          "The inner layer of the optic cup forms the ciliary body and iris.",
      },
      {
        text: "Which signaling molecule is essential for lens induction?",
        options: ["A. FGF", "B. SHH", "C. BMP4", "D. Wnt"],
        correct: 0,
        explanation:
          "FGF from the optic vesicle induces lens placode formation.",
      },
      {
        text: "The vitreous body is derived from:",
        options: [
          "A. Neural ectoderm",
          "B. Mesoderm",
          "C. Endoderm",
          "D. Surface ectoderm",
        ],
        correct: 1,
        explanation:
          "Mesenchymal cells from neural crest form the vitreous body.",
      },
      {
        text: "The cornea develops from:",
        options: [
          "A. Optic cup",
          "B. Lens placode",
          "C. Surface ectoderm and mesenchyme",
          "D. Neural crest only",
        ],
        correct: 2,
        explanation:
          "Cornea forms from surface ectoderm (epithelium) and underlying mesenchyme.",
      },
      {
        text: "Retinoblastoma is associated with mutation in:",
        options: [
          "A. RB1 gene",
          "B. TP53 gene",
          "C. BRCA1 gene",
          "D. APC gene",
        ],
        correct: 0,
        explanation:
          "Retinoblastoma results from mutations in the RB1 tumor suppressor gene.",
      },
      {
        text: "The fovea centralis develops from:",
        options: [
          "A. Macula",
          "B. Optic disc",
          "C. Peripheral retina",
          "D. Ciliary body",
        ],
        correct: 0,
        explanation:
          "The fovea is a specialized area within the macula for high visual acuity.",
      },
      {
        text: "Which structure prevents the lens from regressing?",
        options: [
          "A. Tunica vasculosa lentis",
          "B. Hyaloid artery",
          "C. Optic cup",
          "D. Surface ectoderm",
        ],
        correct: 0,
        explanation:
          "The tunica vasculosa lentis is a vascular network that supports lens development.",
      },
      {
        text: "The eyelids develop from:",
        options: [
          "A. Neural ectoderm",
          "B. Surface ectoderm",
          "C. Mesoderm",
          "D. Endoderm",
        ],
        correct: 1,
        explanation: "Eyelids form from folds of surface ectoderm.",
      },
      {
        text: "The lacrimal gland develops from:",
        options: [
          "A. Optic vesicle",
          "B. Lens placode",
          "C. Surface ectoderm",
          "D. Neural crest",
        ],
        correct: 2,
        explanation:
          "Lacrimal gland arises from buds of surface ectoderm in the conjunctival sac.",
      },
      {
        text: "Persistent hyperplastic primary vitreous (PHPV) is due to failure of:",
        options: [
          "A. Lens induction",
          "B. Optic cup formation",
          "C. Regression of hyaloid vessels",
          "D. Neural crest migration",
        ],
        correct: 2,
        explanation:
          "PHPV results from failure of the hyaloid vascular system to regress.",
      },
      {
        text: "The optic chiasm forms at the junction of:",
        options: [
          "A. Telencephalon and diencephalon",
          "B. Diencephalon and mesencephalon",
          "C. Mesencephalon and rhombencephalon",
          "D. Rhombencephalon and spinal cord",
        ],
        correct: 1,
        explanation:
          "The optic chiasm develops at the diencephalon-mesencephalon junction.",
      },
    ],
    "Development of Central Nervous System": [
      {
        text: "The neural tube closure begins at which somite level in the human embryo?",
        options: ["1st somite", "5th somite", "10th somite", "15th somite"],
        correct: 1,
        explanation:
          "Neural tube closure starts in the cervical region around the 5th somite (~day 22), then proceeds both cranially and caudally.",
      },
      {
        text: "The rhombencephalon gives rise to which adult brain structures?",
        options: [
          "Cerebral hemispheres",
          "Midbrain and pons",
          "Pons, medulla, and cerebellum",
          "Thalamus and hypothalamus",
        ],
        correct: 2,
        explanation:
          "The rhombencephalon (hindbrain) differentiates into metencephalon (pons + cerebellum) and myelencephalon (medulla).",
      },
      {
        text: "The sulcus limitans separates which regions in the developing neural tube?",
        options: [
          "Roof plate and floor plate",
          "Alar plate and basal plate",
          "Prosencephalon and mesencephalon",
          "Neural crest and neural tube",
        ],
        correct: 1,
        explanation:
          "The sulcus limitans divides the dorsal sensory (alar) and ventral motor (basal) regions of the neural tube.",
      },
      {
        text: "The notochord induces the overlying ectoderm to form:",
        options: [
          "Neural crest",
          "Neural tube",
          "Surface ectoderm",
          "Mesoderm",
        ],
        correct: 1,
        explanation:
          "The notochord secretes SHH and other signals to induce neural plate formation, which folds to form the neural tube.",
      },
      {
        text: "Which brain vesicle is associated with the third ventricle?",
        options: [
          "Prosencephalon",
          "Mesencephalon",
          "Rhombencephalon",
          "Spinal cord",
        ],
        correct: 0,
        explanation:
          "The prosencephalon (forebrain) forms the telencephalon and diencephalon; the third ventricle develops within the diencephalon.",
      },
      {
        text: "The cranial neuropore closes at approximately:",
        options: ["Day 18", "Day 24", "Day 26", "Day 30"],
        correct: 2,
        explanation:
          "The cranial (anterior) neuropore closes around day 25–26; failure leads to anencephaly.",
      },
      {
        text: "Which signaling molecule is critical for ventral neural tube patterning?",
        options: ["BMP", "FGF", "SHH", "WNT"],
        correct: 2,
        explanation:
          "Sonic hedgehog (SHH) from the notochord and floor plate specifies ventral neural tube fates, including motor neurons.",
      },
      {
        text: "Neural crest cells give rise to all of the following EXCEPT:",
        options: [
          "Dorsal root ganglia",
          "Schwann cells",
          "Microglia",
          "Melanocytes",
        ],
        correct: 2,
        explanation:
          "Microglia are derived from yolk sac mesoderm, not neural crest. Neural crest forms peripheral neurons, glia, and melanocytes.",
      },
      {
        text: "The mesencephalon develops into which adult structure?",
        options: ["Cerebral hemispheres", "Midbrain", "Pons", "Medulla"],
        correct: 1,
        explanation:
          "The midbrain is derived from the mesencephalon, which does not further subdivide.",
      },
      {
        text: "The ventricular zone of the neural tube primarily contains:",
        options: [
          "Migrating neurons",
          "Progenitor neuroepithelial cells",
          "Mature oligodendrocytes",
          "Microglia",
        ],
        correct: 1,
        explanation:
          "Neuroepithelial cells in the ventricular zone proliferate to produce neurons and glia.",
      },
      {
        text: "The rhombic lip is important for development of:",
        options: ["Cerebral cortex", "Cerebellum", "Hippocampus", "Thalamus"],
        correct: 1,
        explanation:
          "The rhombic lip, located at the dorsal metencephalon, generates cerebellar granule neurons.",
      },
      {
        text: "Which structure forms the central canal of the spinal cord?",
        options: [
          "Neural crest",
          "Alar plate",
          "Basal plate",
          "Lumen of neural tube",
        ],
        correct: 3,
        explanation:
          "The neural tube lumen becomes the ventricular system in the brain and the central canal in the spinal cord.",
      },
      {
        text: "Which embryonic brain structure is associated with the aqueduct of Sylvius?",
        options: [
          "Telencephalon",
          "Diencephalon",
          "Mesencephalon",
          "Metencephalon",
        ],
        correct: 2,
        explanation:
          "The cerebral aqueduct connects the third and fourth ventricles and develops in the mesencephalon.",
      },
      {
        text: "Radial glial cells serve as:",
        options: [
          "Motor neurons",
          "Guides for migrating neurons",
          "Microglia precursors",
          "Schwann cell precursors",
        ],
        correct: 1,
        explanation:
          "Radial glia extend from the ventricular zone to the pial surface, guiding neuron migration during cortical development.",
      },
      {
        text: "The floor plate is primarily involved in:",
        options: [
          "Dorsal sensory neuron development",
          "Ventral patterning of motor neurons",
          "Formation of neural crest",
          "Myelination of axons",
        ],
        correct: 1,
        explanation:
          "The floor plate secretes SHH, specifying ventral cell fates in the neural tube.",
      },
      {
        text: "Spina bifida occulta results from:",
        options: [
          "Failure of cranial neuropore closure",
          "Failure of caudal neuropore closure",
          "Neural crest migration defect",
          "Abnormal SHH signaling",
        ],
        correct: 1,
        explanation:
          "The caudal neuropore closes around day 28; its failure causes spina bifida.",
      },
      {
        text: "The marginal zone of the developing neural tube contains:",
        options: [
          "Cell bodies of neurons",
          "Axonal projections and neuropil",
          "Neural progenitor cells",
          "Microglia",
        ],
        correct: 1,
        explanation:
          "The marginal zone is the outer layer of the neural tube where axons extend and synapse.",
      },
      {
        text: "Holoprosencephaly results from abnormal development of:",
        options: [
          "Neural crest",
          "Prosencephalon",
          "Rhombencephalon",
          "Mesencephalon",
        ],
        correct: 1,
        explanation:
          "Holoprosencephaly is a failure of the forebrain (prosencephalon) to divide properly, often due to SHH pathway defects.",
      },
      {
        text: "Which structure is the origin of cranial sensory ganglia?",
        options: [
          "Neural tube floor plate",
          "Neural crest",
          "Roof plate",
          "Radial glia",
        ],
        correct: 1,
        explanation:
          "Neural crest cells migrate to form cranial sensory (e.g., trigeminal) ganglia.",
      },
      {
        text: "The choroid plexus is derived from:",
        options: [
          "Ependymal cells and vascular mesenchyme",
          "Neural crest",
          "Radial glial cells only",
          "Alar plate only",
        ],
        correct: 0,
        explanation:
          "The choroid plexus develops from invaginating ependymal cells of the ventricles plus adjacent mesenchyme forming vasculature.",
      },
    ],
  },

  // --- 6. HISTOLOGY ---
  "special-senses": {
    "Spinal Cord, Brainstem": [
      {
        text: "Which of the following neurons in the spinal cord is multipolar and primarily involved in inhibitory signaling via GABA?",
        options: [
          "Alpha motor neurons",
          "Renshaw cells",
          "Clarke’s column neurons",
          "Intermediolateral neurons",
        ],
        correct: 1,
        explanation:
          "Renshaw cells are inhibitory interneurons in the ventral horn that modulate alpha motor neuron activity using GABA/glycine.",
      },
      {
        text: "Which layer of the spinal cord meninges contains the largest number of fibroblasts and elastic fibers?",
        options: ["Pia mater", "Arachnoid mater", "Dura mater", "Ependyma"],
        correct: 2,
        explanation:
          "The dura mater is dense fibrous connective tissue with fibroblasts and elastic fibers, providing tensile strength.",
      },
      {
        text: "The primary afferent fibers that terminate in the nucleus dorsalis (Clarke’s column) are mostly:",
        options: [
          "Ia proprioceptive fibers",
          "Ib Golgi tendon fibers",
          "A-delta pain fibers",
          "C fibers",
        ],
        correct: 0,
        explanation:
          "Clarke’s column receives proprioceptive input from muscle spindles via Ia fibers for the spinocerebellar tract.",
      },
      {
        text: "Which of the following brainstem nuclei is exclusively parasympathetic in function?",
        options: [
          "Dorsal motor nucleus of vagus",
          "Nucleus ambiguus",
          "Facial motor nucleus",
          "Trigeminal motor nucleus",
        ],
        correct: 0,
        explanation:
          "This nucleus provides parasympathetic preganglionic fibers to thoracic and abdominal viscera.",
      },
      {
        text: "In the spinal cord, which tract is located in the lateral funiculus and carries unconscious proprioceptive information to the cerebellum?",
        options: [
          "Lateral corticospinal tract",
          "Posterior spinocerebellar tract",
          "Anterior spinothalamic tract",
          "Medial lemniscus",
        ],
        correct: 1,
        explanation:
          "The posterior spinocerebellar tract ascends ipsilaterally in the lateral funiculus carrying proprioceptive signals.",
      },
      {
        text: "Which type of glial cell forms the myelin in the brainstem?",
        options: [
          "Schwann cells",
          "Oligodendrocytes",
          "Astrocytes",
          "Ependymal cells",
        ],
        correct: 1,
        explanation:
          "CNS axons in the brainstem are myelinated by oligodendrocytes, unlike peripheral nerves (Schwann cells).",
      },
      {
        text: "The central canal of the spinal cord is lined by:",
        options: [
          "Simple cuboidal epithelium",
          "Ciliated columnar ependymal cells",
          "Pseudostratified epithelium",
          "Squamous epithelium",
        ],
        correct: 1,
        explanation:
          "Ependymal cells line the central canal and aid in CSF circulation via cilia.",
      },
      {
        text: "Which brainstem structure contains the origin of the trochlear nerve (CN IV)?",
        options: [
          "Midbrain at the level of inferior colliculus",
          "Pons at the level of facial colliculus",
          "Medulla near the pyramids",
          "Midbrain at the level of superior colliculus",
        ],
        correct: 0,
        explanation:
          "The trochlear nerve is unique as it emerges dorsally from the midbrain just below the inferior colliculus.",
      },
      {
        text: "Which tract decussates in the medullary pyramids?",
        options: [
          "Spinothalamic tract",
          "Lateral corticospinal tract",
          "Dorsal column-medial lemniscus",
          "Rubrospinal tract",
        ],
        correct: 1,
        explanation:
          "The majority of corticospinal fibers cross in the pyramidal decussation to control contralateral voluntary movement.",
      },
      {
        text: "In the medulla oblongata, which nucleus is responsible for sensory input from the carotid body and sinus?",
        options: [
          "Solitary nucleus",
          "Spinal trigeminal nucleus",
          "Nucleus ambiguus",
          "Vestibular nucleus",
        ],
        correct: 0,
        explanation:
          "The solitary nucleus processes visceral sensory information including baroreceptors and chemoreceptors.",
      },
      {
        text: "Which spinal cord interneurons mediate recurrent inhibition of motor neurons?",
        options: [
          "Ia inhibitory interneurons",
          "Renshaw cells",
          "Ib inhibitory interneurons",
          "Golgi tendon interneurons",
        ],
        correct: 1,
        explanation:
          "Renshaw cells inhibit alpha motor neurons through a negative feedback loop to prevent excessive contraction.",
      },
      {
        text: "The periaqueductal gray of the midbrain primarily contains neurons involved in:",
        options: ["Pain modulation", "Eye movement", "Hearing", "Taste"],
        correct: 0,
        explanation:
          "Periaqueductal gray activates descending inhibitory pathways that suppress nociceptive transmission.",
      },
      {
        text: "Which fiber type predominates in the lateral funiculus of the spinal cord?",
        options: [
          "Ascending sensory fibers only",
          "Descending motor fibers only",
          "Both ascending and descending fibers",
          "Commissural fibers only",
        ],
        correct: 2,
        explanation:
          "The lateral funiculus contains lateral corticospinal (descending) and spinocerebellar (ascending) tracts.",
      },
      {
        text: "The inferior olivary nucleus is involved in:",
        options: [
          "Cerebellar motor coordination",
          "Vestibular reflexes",
          "Pain modulation",
          "Autonomic regulation",
        ],
        correct: 0,
        explanation:
          "Inferior olivary neurons send climbing fibers to Purkinje cells for fine motor control.",
      },
      {
        text: "Which cells form the blood–brain barrier in the spinal cord and brainstem?",
        options: [
          "Astrocytes",
          "Microglia",
          "Oligodendrocytes",
          "Ependymal cells",
        ],
        correct: 0,
        explanation:
          "Astrocytic end-feet envelop capillaries to regulate permeability of the BBB.",
      },
      {
        text: "Which brainstem nucleus gives rise to parasympathetic fibers to the lacrimal and salivary glands?",
        options: [
          "Superior salivatory nucleus",
          "Dorsal motor nucleus of vagus",
          "Nucleus ambiguus",
          "Inferior salivatory nucleus",
        ],
        correct: 0,
        explanation:
          "This nucleus supplies preganglionic parasympathetic fibers to lacrimal, submandibular, and sublingual glands.",
      },
      {
        text: "In the spinal cord, lateral horn neurons are primarily found at which levels?",
        options: [
          "Cervical and lumbar",
          "Thoracic and upper lumbar",
          "Sacral only",
          "Entire cord",
        ],
        correct: 1,
        explanation:
          "The intermediolateral cell column houses preganglionic sympathetic neurons from T1–L2.",
      },
      {
        text: "Which spinal tract mediates fast pain and temperature sensation?",
        options: [
          "Dorsal column",
          "Lateral spinothalamic tract",
          "Spinocerebellar tract",
          "Corticospinal tract",
        ],
        correct: 1,
        explanation:
          "The lateral spinothalamic tract transmits sharp pain and temperature signals to the thalamus.",
      },
      {
        text: "Which brainstem structure contains the nuclei for CN IX, X, and XI?",
        options: ["Medulla", "Pons", "Midbrain", "Cerebellum"],
        correct: 0,
        explanation:
          "The medulla houses the nucleus ambiguus and other motor nuclei of glossopharyngeal, vagus, and accessory nerves.",
      },
      {
        text: "Which of the following is TRUE regarding the substantia gelatinosa of the spinal cord?",
        options: [
          "It is part of the dorsal horn involved in pain modulation",
          "It contains only motor neurons",
          "It is located in the ventral horn",
          "It directly sends fibers to the cerebellum",
        ],
        correct: 0,
        explanation:
          "The substantia gelatinosa (Rexed lamina II) modulates nociceptive input before it ascends via spinothalamic tracts.",
      },
    ],
    "Cerebrum and Cerebellum": [
      {
        text: "Which cortical layer of the cerebrum primarily contains pyramidal neurons responsible for corticospinal projections?",
        options: [
          "Molecular layer (I)",
          "External granular layer (II)",
          "Internal pyramidal layer (V)",
          "Multiform layer (VI)",
        ],
        correct: 2,
        explanation:
          "Layer V (internal pyramidal layer) contains large pyramidal neurons, such as Betz cells, which project to the spinal cord (corticospinal tract).",
      },
      {
        text: "Which type of glial cell is most abundant in the cerebellar cortex and forms a physical barrier around Purkinje neurons?",
        options: [
          "Astrocytes",
          "Oligodendrocytes",
          "Bergmann glia",
          "Microglia",
        ],
        correct: 2,
        explanation:
          "Bergmann glia are specialized astrocytes in the cerebellum that closely associate with Purkinje cells, supporting their structure and signaling.",
      },
      {
        text: "In the cerebellar cortex, the granule cell layer is primarily composed of:",
        options: [
          "Large multipolar neurons",
          "Small excitatory neurons with T-shaped axons",
          "Inhibitory interneurons only",
          "Myelinated projection fibers",
        ],
        correct: 1,
        explanation:
          "Granule cells are small excitatory neurons; their axons ascend to the molecular layer and bifurcate as parallel fibers, synapsing with Purkinje dendrites.",
      },
      {
        text: "Which layer of the cerebral cortex contains densely packed small neurons and receives thalamocortical input?",
        options: [
          "Molecular layer (I)",
          "External granular layer (II)",
          "Internal granular layer (IV)",
          "Multiform layer (VI)",
        ],
        correct: 2,
        explanation:
          "Layer IV (internal granular) is rich in small granule neurons and is the primary target for thalamic sensory inputs.",
      },
      {
        text: "Which of the following statements about Purkinje cells is INCORRECT?",
        options: [
          "They are inhibitory neurons releasing GABA",
          "Their dendrites extend into the molecular layer",
          "They are found in the cerebrum",
          "They receive excitatory input from parallel fibers",
        ],
        correct: 2,
        explanation:
          "Purkinje cells are unique to the cerebellum, not the cerebrum.",
      },
      {
        text: "Which fiber type in the cerebellum forms climbing fibers that wrap around Purkinje cell dendrites?",
        options: [
          "Parallel fibers",
          "Mossy fibers",
          "Climbing fibers",
          "Association fibers",
        ],
        correct: 2,
        explanation:
          "Climbing fibers originate from the inferior olivary nucleus and form powerful excitatory synapses on Purkinje dendrites.",
      },
      {
        text: "In the cerebral cortex, which cells are primarily responsible for lateral inhibition and shaping cortical output?",
        options: [
          "Pyramidal neurons",
          "Basket cells and chandelier cells",
          "Granule cells",
          "Betz cells",
        ],
        correct: 1,
        explanation:
          "Basket and chandelier interneurons are inhibitory GABAergic neurons that modulate pyramidal neuron activity via lateral inhibition.",
      },
      {
        text: "Which of the following best describes the input to cerebellar Purkinje cells?",
        options: [
          "Exclusively from mossy fibers",
          "Exclusively from climbing fibers",
          "From mossy fibers via granule cells and directly from climbing fibers",
          "Only from parallel fibers",
        ],
        correct: 2,
        explanation:
          "Purkinje cells integrate input from both climbing fibers (direct) and mossy fibers (indirectly via granule cells and parallel fibers).",
      },
      {
        text: "Which layer of the cerebellar cortex contains Golgi type II inhibitory interneurons?",
        options: [
          "Molecular layer",
          "Purkinje layer",
          "Granule layer",
          "White matter",
        ],
        correct: 2,
        explanation:
          "Golgi cells are inhibitory interneurons located in the granule cell layer, regulating granule cell excitatory output.",
      },
      {
        text: "Betz cells in the primary motor cortex are:",
        options: [
          "Small interneurons in layer II",
          "Large pyramidal neurons in layer V",
          "Inhibitory neurons in layer IV",
          "Granule cells in layer III",
        ],
        correct: 1,
        explanation:
          "Betz cells are giant pyramidal neurons in layer V of the motor cortex responsible for direct corticospinal projections.",
      },
      {
        text: "Which cortical layer of the cerebrum is most developed in sensory areas?",
        options: ["Layer I", "Layer IV", "Layer V", "Layer VI"],
        correct: 1,
        explanation:
          "Layer IV (internal granular) is thick in sensory areas (e.g., visual cortex) to receive thalamic input, known as the 'granular cortex'.",
      },
      {
        text: "The molecular layer of the cerebellum contains all EXCEPT:",
        options: [
          "Dendritic trees of Purkinje cells",
          "Parallel fibers of granule cells",
          "Soma of Purkinje cells",
          "Basket and stellate interneurons",
        ],
        correct: 2,
        explanation:
          "Purkinje somata lie in the Purkinje layer, not in the molecular layer, which contains dendrites and axons.",
      },
      {
        text: "Which cells are the principal output neurons of the cerebellum?",
        options: [
          "Granule cells",
          "Purkinje cells",
          "Basket cells",
          "Stellate cells",
        ],
        correct: 1,
        explanation:
          "Purkinje cells send inhibitory GABAergic output to the deep cerebellar nuclei, which then project to other CNS regions.",
      },
      {
        text: "Which feature distinguishes the internal pyramidal layer (V) of the motor cortex from sensory cortical areas?",
        options: [
          "Abundant granule cells",
          "Presence of giant Betz pyramidal neurons",
          "Thin and poorly defined layer",
          "Absence of pyramidal cells",
        ],
        correct: 1,
        explanation:
          "Layer V in the motor cortex has giant Betz cells, which are much larger than neurons in sensory areas.",
      },
      {
        text: "In the cerebellum, mossy fibers originate from all EXCEPT:",
        options: [
          "Spinocerebellar tracts",
          "Vestibular nuclei",
          "Inferior olivary nucleus",
          "Pontine nuclei",
        ],
        correct: 2,
        explanation:
          "Mossy fibers come from multiple sources (spinal cord, vestibular system, pons), while climbing fibers arise specifically from the inferior olive.",
      },
      {
        text: "Which interneuron of the molecular layer of the cerebellum is inhibitory?",
        options: [
          "Granule cell",
          "Golgi cell",
          "Basket cell",
          "Climbing fiber",
        ],
        correct: 2,
        explanation:
          "Basket cells are inhibitory interneurons that modulate Purkinje cell activity in the molecular layer.",
      },
      {
        text: "Which cerebral cortical layer is most prominent in association areas and has many pyramidal neurons projecting to other cortical regions?",
        options: [
          "Layer II (External granular)",
          "Layer III (External pyramidal)",
          "Layer IV (Internal granular)",
          "Layer VI (Multiform)",
        ],
        correct: 1,
        explanation:
          "Layer III (external pyramidal) contains pyramidal neurons that primarily send corticocortical projections.",
      },
      {
        text: "Which of the following statements about cerebellar white matter is TRUE?",
        options: [
          "It contains Purkinje cell bodies",
          "It forms the arbor vitae",
          "It receives output directly from mossy fibers",
          "It is not myelinated",
        ],
        correct: 1,
        explanation:
          "Cerebellar white matter forms the arbor vitae, a branching pattern connecting cortical layers to deep cerebellar nuclei.",
      },
      {
        text: "Which cortical layer is thickest in motor areas and thinnest in primary sensory cortex?",
        options: ["Layer II", "Layer III", "Layer IV", "Layer V"],
        correct: 3,
        explanation:
          "Layer V (internal pyramidal) is thick in motor cortex due to large pyramidal neurons (e.g., Betz cells) and thinner in sensory areas.",
      },
      {
        text: "Which statement best describes Golgi type I vs. Golgi type II neurons in the cerebellum?",
        options: [
          "Both are projection neurons",
          "Type I are local interneurons, Type II are projection neurons",
          "Type I are projection neurons, Type II are local interneurons",
          "Both are glial cells",
        ],
        correct: 2,
        explanation:
          "Golgi type I neurons are long-axon projection neurons (e.g., pyramidal, Purkinje), while Golgi type II neurons are short-axon inhibitory interneurons (e.g., Golgi cells, basket cells).",
      },
    ],
    "Histology of Ear": [
      {
        text: "The organ of Corti is located on which membrane of the cochlea?",
        options: [
          "Reissner’s membrane",
          "Basilar membrane",
          "Tectorial membrane",
          "Vestibular membrane",
        ],
        correct: 1,
        explanation:
          "The organ of Corti rests on the basilar membrane, while the tectorial membrane overlies the hair cells. ",
      },
      {
        text: "Which cells in the cochlea are primarily responsible for maintaining the ionic composition of endolymph?",
        options: [
          "Inner hair cells",
          "Outer hair cells",
          "Marginal cells of stria vascularis",
          "Supporting cells of spiral ligament",
        ],
        correct: 2,
        explanation:
          "Marginal cells of the stria vascularis secrete potassium-rich endolymph essential for hair cell depolarization.",
      },
      {
        text: "Which type of epithelium lines the endolymphatic sac?",
        options: [
          "Stratified squamous",
          "Simple squamous",
          "Simple cuboidal with microvilli",
          "Pseudostratified columnar",
        ],
        correct: 2,
        explanation:
          "The endolymphatic sac is lined by cuboidal cells with microvilli for absorption and secretion of endolymph.",
      },
      {
        text: "What is the main distinguishing histological feature of outer hair cells compared to inner hair cells?",
        options: [
          "Stereocilia arranged in a U-shape",
          "Stereocilia arranged in a V-shape",
          "More afferent innervation",
          "Less motility",
        ],
        correct: 1,
        explanation:
          "Outer hair cells have V-shaped stereocilia bundles and are mainly efferent-innervated for cochlear amplification.",
      },
      {
        text: "The spiral ganglion contains the cell bodies of which fibers?",
        options: [
          "Efferent fibers to outer hair cells",
          "Afferent fibers from inner hair cells",
          "Fibers from the vestibular apparatus",
          "Parasympathetic fibers to cochlea",
        ],
        correct: 1,
        explanation:
          "Spiral ganglion neurons are primary sensory neurons transmitting auditory information from hair cells to the CNS.",
      },
      {
        text: "Which structure in the vestibular system detects linear acceleration?",
        options: [
          "Crista ampullaris",
          "Macula of utricle and saccule",
          "Organ of Corti",
          "Basilar membrane",
        ],
        correct: 1,
        explanation:
          "Maculae contain hair cells with otoliths to sense linear acceleration and gravity. ",
      },
      {
        text: "The stereocilia of vestibular hair cells are embedded in:",
        options: [
          "Tectorial membrane",
          "Otolithic membrane",
          "Basilar membrane",
          "Cupula",
        ],
        correct: 1,
        explanation:
          "The otolithic membrane contains calcium carbonate crystals (otoconia) that bend hair cell stereocilia in response to linear motion.",
      },
      {
        text: "Cupula is associated with which sensory organ?",
        options: [
          "Organ of Corti",
          "Macula of saccule",
          "Crista ampullaris",
          "Spiral ligament",
        ],
        correct: 2,
        explanation:
          "Cupula is a gelatinous structure in the ampullae of semicircular canals that deflects stereocilia during angular motion. ",
      },
      {
        text: "Which type of fibers innervates outer hair cells predominantly?",
        options: [
          "Type I afferent fibers",
          "Type II afferent fibers",
          "Efferent fibers from olivocochlear bundle",
          "Parasympathetic fibers",
        ],
        correct: 2,
        explanation:
          "Outer hair cells receive mostly efferent fibers that modulate cochlear sensitivity.",
      },
      {
        text: "Stria vascularis is composed of which cell types?",
        options: [
          "Marginal, intermediate, and basal cells",
          "Hair cells and supporting cells",
          "Fibroblasts and Schwann cells",
          "Crista and cupula cells",
        ],
        correct: 0,
        explanation:
          "These three cell types maintain endolymph production and potassium recycling.",
      },
      {
        text: "Which connective tissue layer surrounds the cochlear duct?",
        options: [
          "Spiral ligament",
          "Reissner’s membrane",
          "Tectorial membrane",
          "Cupula",
        ],
        correct: 0,
        explanation:
          "The spiral ligament anchors the cochlear duct to the bony wall and supports the stria vascularis.",
      },
      {
        text: "The inner ear develops embryologically from:",
        options: [
          "Ectodermal otic placode",
          "Endodermal pouch",
          "Neural crest",
          "Mesodermal condensation",
        ],
        correct: 0,
        explanation:
          "The otic placode invaginates to form the otic vesicle, giving rise to cochlea and vestibular apparatus.",
      },
      {
        text: "What is the primary histological difference between utricle and saccule maculae?",
        options: [
          "Utricle has vertical stereocilia orientation, saccule horizontal",
          "Utricle horizontal, saccule vertical",
          "Utricle lacks otoliths",
          "Saccule lacks hair cells",
        ],
        correct: 1,
        explanation:
          "This orientation allows detection of different axes of linear acceleration (Utricle = horizontal, Saccule = vertical).",
      },
      {
        text: "Which part of the cochlea shows maximum sensitivity to high-frequency sounds?",
        options: [
          "Apex of cochlea",
          "Base of cochlea",
          "Middle turn",
          "Spiral ligament",
        ],
        correct: 1,
        explanation:
          "The basilar membrane is narrow and stiff at the base, responding to high-frequency stimuli.",
      },
      {
        text: "Supporting cells of the organ of Corti that separate hair cells are called:",
        options: [
          "Pillar cells",
          "Marginal cells",
          "Claudius cells",
          "Hensen cells",
        ],
        correct: 0,
        explanation:
          "Inner and outer pillar cells form the tunnel of Corti and provide structural support.",
      },
      {
        text: "The primary function of Claudius cells in the cochlea is:",
        options: [
          "Secrete endolymph",
          "Remove potassium from perilymph",
          "Support outer hair cells and maintain ionic balance",
          "Transmit sensory signals",
        ],
        correct: 2,
        explanation:
          "Claudius cells lie lateral to outer hair cells and help maintain cochlear homeostasis.",
      },
      {
        text: "Which nerve carries vestibular signals to the brain?",
        options: [
          "Cochlear nerve",
          "Vestibular nerve",
          "Facial nerve",
          "Glossopharyngeal nerve",
        ],
        correct: 1,
        explanation:
          "Vestibular nerve fibers from semicircular canals, utricle, and saccule transmit balance information to the CNS.",
      },
      {
        text: "The kinocilium in vestibular hair cells:",
        options: [
          "Degenerates in adult cochlear hair cells",
          "Is present in cochlear hair cells",
          "Detects sound frequency",
          "Forms the tectorial membrane",
        ],
        correct: 0,
        explanation:
          "The kinocilium is retained in vestibular hair cells but regresses in cochlear hair cells after development.",
      },
      {
        text: "Which feature differentiates type I and type II vestibular hair cells?",
        options: [
          "Type I surrounded by calyx nerve ending",
          "Type I has multiple stereocilia bundles",
          "Type II lacks stereocilia",
          "Type II is only in maculae",
        ],
        correct: 0,
        explanation:
          "Type I hair cells are flask-shaped with calyceal afferent endings, while type II are cylindrical with bouton endings. ",
      },
      {
        text: "Tectorial membrane is primarily composed of:",
        options: [
          "Collagen type II and glycoproteins",
          "Collagen type I only",
          "Elastic fibers",
          "Keratin",
        ],
        correct: 0,
        explanation:
          "Its acellular structure overlays hair cells and plays a role in mechanoelectrical transduction.",
      },
    ],
    "Histology of Eye": [
      {
        text: "Which layer of the cornea is primarily responsible for its transparency due to regular arrangement of collagen fibrils?",
        options: [
          "Epithelium",
          "Bowman's layer",
          "Stroma",
          "Descemet's membrane",
        ],
        correct: 2,
        explanation:
          "The stroma forms ~90% of corneal thickness. Its collagen fibrils are uniformly arranged in lamellae, minimizing light scattering and maintaining transparency.",
      },
      {
        text: "Which retinal cells are directly responsible for lateral inhibition to enhance visual contrast?",
        options: [
          "Photoreceptors",
          "Horizontal cells",
          "Bipolar cells",
          "Amacrine cells",
        ],
        correct: 1,
        explanation:
          "Horizontal cells mediate lateral inhibition between photoreceptors and bipolar cells, sharpening contrast and edges in visual perception.",
      },
      {
        text: "In the lens, which junction type is crucial for maintaining metabolic coupling between lens fibers?",
        options: [
          "Tight junctions",
          "Gap junctions",
          "Desmosomes",
          "Hemidesmosomes",
        ],
        correct: 1,
        explanation:
          "Lens fibers are avascular; gap junctions allow diffusion of ions, metabolites, and small molecules between fibers, maintaining lens transparency.",
      },
      {
        text: "Which retinal layer contains the synapses between photoreceptors and bipolar cells?",
        options: [
          "Outer nuclear layer",
          "Outer plexiform layer",
          "Inner nuclear layer",
          "Inner plexiform layer",
        ],
        correct: 1,
        explanation:
          "The outer plexiform layer is where photoreceptors form synapses with bipolar and horizontal cells.",
      },
      {
        text: "Which component of the uveal tract contains fenestrated capillaries to supply the outer retina?",
        options: ["Choroid", "Iris", "Ciliary body", "Sclera"],
        correct: 0,
        explanation:
          "Choroidal vessels are highly fenestrated, providing oxygen and nutrients to the photoreceptor layer.",
      },
      {
        text: "Which retinal cells are responsible for the regeneration of the visual pigment?",
        options: [
          "Müller cells",
          "Retinal pigment epithelium (RPE) cells",
          "Bipolar cells",
          "Ganglion cells",
        ],
        correct: 1,
        explanation:
          "RPE cells phagocytose shed photoreceptor outer segments and recycle retinal for phototransduction.",
      },
      {
        text: "Which part of the eye develops from neural ectoderm?",
        options: ["Lens", "Corneal epithelium", "Retina", "Sclera"],
        correct: 2,
        explanation:
          "The retina arises from the optic cup (neural ectoderm). Lens develops from surface ectoderm.",
      },
      {
        text: "Which retinal layer is absent at the fovea centralis to allow high-acuity vision?",
        options: [
          "Photoreceptor layer",
          "Inner nuclear layer",
          "Ganglion cell layer",
          "RPE",
        ],
        correct: 2,
        explanation:
          "At the fovea, inner layers (like the ganglion cell layer) are displaced laterally to minimize light scattering, allowing sharp central vision.",
      },
      {
        text: "Which structure in the ciliary body produces aqueous humor?",
        options: [
          "Ciliary muscle",
          "Ciliary processes",
          "Zonular fibers",
          "Pars plana",
        ],
        correct: 1,
        explanation:
          "Non-pigmented epithelium of the ciliary processes secretes aqueous humor into the posterior chamber.",
      },
      {
        text: "Which layer of the cornea acts as the basement membrane for the endothelium?",
        options: [
          "Bowman's layer",
          "Stroma",
          "Descemet's membrane",
          "Epithelium",
        ],
        correct: 2,
        explanation:
          "Descemet’s membrane is the thick basal lamina of corneal endothelium and regenerates throughout life.",
      },
      {
        text: "Which photoreceptors are more numerous and highly sensitive in dim light conditions?",
        options: ["Cones", "Rods", "Both equally", "None"],
        correct: 1,
        explanation:
          "Rods have high sensitivity, function in scotopic (low-light) vision, but do not mediate color perception.",
      },
      {
        text: "Which layer of the retina is closest to the choroid?",
        options: [
          "Ganglion cell layer",
          "Photoreceptor layer",
          "Inner nuclear layer",
          "Nerve fiber layer",
        ],
        correct: 1,
        explanation:
          "The photoreceptor outer segments lie adjacent to the RPE and choroid for nutrient support.",
      },
      {
        text: "Which junctions maintain the blood-retinal barrier in the RPE?",
        options: [
          "Gap junctions",
          "Tight junctions",
          "Adherens junctions",
          "Desmosomes",
        ],
        correct: 1,
        explanation:
          "Zonula occludens (tight junctions) between RPE cells restrict free passage of molecules, forming the outer blood-retinal barrier.",
      },
      {
        text: "Which layer of the retina contains the cell bodies of bipolar, horizontal, and amacrine cells?",
        options: [
          "Outer nuclear layer",
          "Inner nuclear layer",
          "Ganglion cell layer",
          "Inner plexiform layer",
        ],
        correct: 1,
        explanation:
          "The inner nuclear layer houses the nuclei of bipolar, horizontal, and amacrine cells.",
      },
      {
        text: "Which layer of the retina is responsible for action potential generation?",
        options: [
          "Photoreceptor layer",
          "Bipolar cell layer",
          "Ganglion cell layer",
          "Outer plexiform layer",
        ],
        correct: 2,
        explanation:
          "Ganglion cells generate action potentials transmitted via the optic nerve to the brain.",
      },
      {
        text: "Which of the following corneal layers does not regenerate if damaged?",
        options: ["Epithelium", "Bowman's layer", "Stroma", "Endothelium"],
        correct: 1,
        explanation:
          "Bowman's layer is acellular; injury leads to scarring rather than regeneration.",
      },
      {
        text: "Which type of photoreceptor contains iodopsins for color vision?",
        options: ["Rods", "Cones", "Ganglion cells", "Horizontal cells"],
        correct: 1,
        explanation:
          "Cones contain three types of opsins (iodopsins) for red, green, and blue light perception.",
      },
      {
        text: "Which cells in the retina function as glial support and maintain extracellular ion balance?",
        options: [
          "Horizontal cells",
          "Müller cells",
          "Amacrine cells",
          "Bipolar cells",
        ],
        correct: 1,
        explanation:
          "Müller cells span the retina, support neurons, regulate ions, and contribute to the inner limiting membrane.",
      },
      {
        text: "Which type of lens fibers are formed first during embryonic development and persist throughout life?",
        options: [
          "Secondary fibers",
          "Tertiary fibers",
          "Primary fibers",
          "Cortical fibers",
        ],
        correct: 2,
        explanation:
          "Primary fibers form the embryonic nucleus of the lens and remain lifelong; secondary fibers form the cortex.",
      },
      {
        text: "Which retinal layer contains the axons of ganglion cells forming the optic nerve?",
        options: [
          "Inner nuclear layer",
          "Outer plexiform layer",
          "Nerve fiber layer",
          "Photoreceptor layer",
        ],
        correct: 2,
        explanation:
          "Ganglion cell axons converge at the optic disc forming the optic nerve; this layer is closest to the vitreous.",
      },
    ],
  },

  "basic-tissues": {
    "Cell Structure": [
      {
        text: "A cell with abundant free ribosomes but poorly developed rough endoplasmic reticulum is most likely specialized for:",
        options: [
          "Secretion of glycoproteins",
          "Intracellular protein synthesis for cytosolic use",
          "Steroid hormone synthesis",
          "Detoxification reactions",
        ],
        correct: 1,
        explanation:
          "Free ribosomes synthesize proteins destined for the cytosol, nucleus, mitochondria, or peroxisomes—not for secretion or membranes.",
      },
      {
        text: "Which feature best distinguishes euchromatin from heterochromatin at the ultrastructural level?",
        options: [
          "Presence of histones",
          "Degree of DNA methylation",
          "Electron density and transcriptional activity",
          "Association with nuclear lamina",
        ],
        correct: 2,
        explanation:
          "Euchromatin is lightly stained (electron-lucent) and transcriptionally active; heterochromatin is electron-dense and inactive.",
      },
      {
        text: "Which organelle would be most affected by a mutation preventing insertion of signal recognition particle (SRP) receptors?",
        options: [
          "Golgi apparatus",
          "Smooth endoplasmic reticulum",
          "Rough endoplasmic reticulum",
          "Mitochondria",
        ],
        correct: 2,
        explanation:
          "SRP receptors are required for docking ribosomes synthesizing secretory proteins onto the rough ER.",
      },
      {
        text: "A cell actively synthesizing steroid hormones would show hypertrophy of which organelle?",
        options: [
          "Rough endoplasmic reticulum",
          "Golgi apparatus",
          "Smooth endoplasmic reticulum",
          "Lysosomes",
        ],
        correct: 2,
        explanation:
          "Steroid synthesis depends on enzymes embedded in the smooth ER membrane.",
      },
      {
        text: "Which nuclear structure is directly responsible for ribosomal RNA synthesis?",
        options: [
          "Nuclear pore complex",
          "Chromatin",
          "Nucleolus",
          "Nuclear lamina",
        ],
        correct: 2,
        explanation:
          "The nucleolus synthesizes rRNA and assembles ribosomal subunits.",
      },
      {
        text: "If a drug selectively disrupts microtubules, which cellular function is most immediately impaired?",
        options: [
          "Cell adhesion",
          "Protein synthesis",
          "Intracellular vesicle transport",
          "Glycolysis",
        ],
        correct: 2,
        explanation:
          "Microtubules are tracks for motor proteins transporting vesicles and organelles.",
      },
      {
        text: "Which statement about mitochondria is TRUE?",
        options: [
          "They contain circular DNA without histones",
          "They are synthesized de novo during cell division",
          "All mitochondrial proteins are encoded by mitochondrial DNA",
          "Their inner membrane is freely permeable to ions",
        ],
        correct: 0,
        explanation:
          "Mitochondrial DNA is circular and lacks histones; most mitochondrial proteins are nuclear-encoded.",
      },
      {
        text: "A cell with a prominent Golgi apparatus and well-developed rough ER is most likely:",
        options: [
          "Actively dividing",
          "Actively secreting proteins",
          "Undergoing apoptosis",
          "Specialized for lipid metabolism",
        ],
        correct: 1,
        explanation:
          "RER synthesizes secretory proteins; Golgi modifies and packages them.",
      },
      {
        text: "Which component of the nuclear envelope regulates selective transport between nucleus and cytoplasm?",
        options: [
          "Nuclear lamina",
          "Nuclear pores",
          "Inner nuclear membrane",
          "Perinuclear cistern",
        ],
        correct: 1,
        explanation:
          "Nuclear pore complexes actively regulate macromolecular transport.",
      },
      {
        text: "Failure of lysosomal acidification would MOST directly impair:",
        options: [
          "Protein synthesis",
          "Autophagy",
          "Glycosylation",
          "ATP generation",
        ],
        correct: 1,
        explanation:
          "Lysosomal enzymes require an acidic pH to degrade intracellular components during autophagy.",
      },
      {
        text: "Which cytoskeletal element resists tensile (stretching) forces?",
        options: [
          "Microtubules",
          "Actin filaments",
          "Intermediate filaments",
          "Centrioles",
        ],
        correct: 2,
        explanation:
          "Intermediate filaments provide mechanical strength and resist tension.",
      },
      {
        text: "Which organelle lacks a surrounding membrane?",
        options: ["Lysosome", "Ribosome", "Peroxisome", "Golgi cisterna"],
        correct: 1,
        explanation:
          "Ribosomes are non-membranous ribonucleoprotein complexes.",
      },
      {
        text: "Which modification of proteins primarily occurs in the cis-Golgi network?",
        options: [
          "Sulfation",
          "O-linked glycosylation",
          "Initial trimming of N-linked oligosaccharides",
          "Packaging into secretory granules",
        ],
        correct: 2,
        explanation:
          "The cis-Golgi performs early processing of N-linked carbohydrates received from the ER.",
      },
      {
        text: "Which cellular change is most characteristic of apoptosis?",
        options: [
          "Cell swelling",
          "Mitochondrial rupture",
          "Chromatin condensation and fragmentation",
          "Inflammatory response",
        ],
        correct: 2,
        explanation:
          "Apoptosis involves nuclear condensation without inflammation.",
      },
      {
        text: "A cell lacking functional peroxisomes would most likely accumulate:",
        options: [
          "Glycogen",
          "Hydrogen peroxide",
          "Very long-chain fatty acids",
          "Lactic acid",
        ],
        correct: 2,
        explanation: "Peroxisomes oxidize very long-chain fatty acids.",
      },
      {
        text: "Which structure anchors chromatin to the inner nuclear membrane?",
        options: [
          "Nuclear pore complex",
          "Nucleolus",
          "Nuclear lamina",
          "Centromere",
        ],
        correct: 2,
        explanation:
          "The nuclear lamina provides structural support and chromatin anchorage.",
      },
      {
        text: "Which event occurs FIRST during protein secretion?",
        options: [
          "Vesicle budding from Golgi",
          "Translation on membrane-bound ribosomes",
          "Post-translational modification",
          "Exocytosis",
        ],
        correct: 1,
        explanation:
          "Translation on RER-bound ribosomes initiates the secretory pathway.",
      },
      {
        text: "Which cytoskeletal structure forms the core of cilia and flagella?",
        options: [
          "Actin filaments",
          "Intermediate filaments",
          "Microtubules in a 9+2 arrangement",
          "Microtubules in a 9+0 arrangement",
        ],
        correct: 2,
        explanation: "Motile cilia have a classic 9+2 microtubule axoneme.",
      },
      {
        text: "Which cellular component is MOST sensitive to hypoxia?",
        options: ["Ribosomes", "Lysosomes", "Mitochondria", "Golgi apparatus"],
        correct: 2,
        explanation:
          "Mitochondria require oxygen for oxidative phosphorylation.",
      },
      {
        text: "A cell showing extensive SER, abundant mitochondria, and lipid droplets is most likely:",
        options: [
          "Neuron",
          "Plasma cell",
          "Steroid-secreting cell",
          "Goblet cell",
        ],
        correct: 2,
        explanation:
          "Steroid-producing cells rely on SER and mitochondria for lipid metabolism.",
      },
    ],
    Epithelia: [
      {
        text: "A stratified epithelium is best identified histologically by:",
        options: [
          "The number of cell layers visible at high magnification",
          "The number of cell layers contacting the basement membrane",
          "The number of cell layers containing nuclei",
          "The thickness of the epithelium",
        ],
        correct: 1,
        explanation:
          "Classification depends on how many layers contact the basement membrane, not how many layers appear or contain nuclei.",
      },
      {
        text: "Which feature most reliably distinguishes pseudostratified columnar epithelium from stratified columnar epithelium?",
        options: [
          "Variable nuclear height",
          "Presence of cilia",
          "All cells rest on the basement membrane",
          "Presence of goblet cells",
        ],
        correct: 2,
        explanation:
          "In pseudostratified epithelium, all cells contact the basement membrane, even if they don’t reach the surface.",
      },
      {
        text: "Loss of which junctional complex would most directly increase paracellular permeability?",
        options: [
          "Desmosomes",
          "Gap junctions",
          "Tight junctions",
          "Hemidesmosomes",
        ],
        correct: 2,
        explanation:
          "Tight junctions (zonula occludens) seal the intercellular space and regulate paracellular transport.",
      },
      {
        text: "Which epithelial specialization primarily increases surface area without significantly affecting diffusion distance?",
        options: ["Cilia", "Stereocilia", "Microvilli", "Keratin filaments"],
        correct: 2,
        explanation:
          "Microvilli dramatically increase surface area while remaining extremely thin.",
      },
      {
        text: "Which epithelium is best adapted to withstand mechanical stress AND water impermeability?",
        options: [
          "Stratified squamous non-keratinized",
          "Simple squamous",
          "Transitional epithelium",
          "Stratified squamous keratinized",
        ],
        correct: 3,
        explanation:
          "Keratinized epithelium resists abrasion and prevents water loss due to keratin and lipid barriers.",
      },
      {
        text: "Which statement about epithelial polarity is MOST accurate?",
        options: [
          "Basal surfaces lack cytoskeletal attachments",
          "Apical membranes have identical protein composition across epithelia",
          "Polarity is maintained by tight junctions",
          "Polarity is independent of basement membrane contact",
        ],
        correct: 2,
        explanation:
          "Tight junctions prevent lateral diffusion of membrane proteins, maintaining polarity.",
      },
      {
        text: "A tumor derived from epithelial tissue is classified as:",
        options: ["Sarcoma", "Lymphoma", "Carcinoma", "Adenoma"],
        correct: 2,
        explanation:
          "Carcinomas arise from epithelial tissues (adenoma is benign glandular epithelium).",
      },
      {
        text: "Which epithelium shows the greatest capacity for rapid regeneration?",
        options: [
          "Stratified squamous epithelium",
          "Simple cuboidal epithelium",
          "Simple squamous epithelium",
          "Transitional epithelium",
        ],
        correct: 0,
        explanation:
          "Basal cells in stratified squamous epithelium undergo continuous mitosis.",
      },
      {
        text: "Which cell junction provides mechanical strength by anchoring intermediate filaments?",
        options: [
          "Tight junction",
          "Gap junction",
          "Adherens junction",
          "Desmosome",
        ],
        correct: 3,
        explanation:
          "Desmosomes link intermediate filaments (keratin) between cells.",
      },
      {
        text: "Failure of hemidesmosomes would most directly impair:",
        options: [
          "Cell-to-cell communication",
          "Attachment to basement membrane",
          "Apical surface stability",
          "Paracellular diffusion",
        ],
        correct: 1,
        explanation:
          "Hemidesmosomes anchor epithelial cells to the basal lamina.",
      },
      {
        text: "Which epithelium allows stretching while maintaining barrier function?",
        options: [
          "Stratified squamous non-keratinized",
          "Simple cuboidal",
          "Pseudostratified columnar",
          "Transitional epithelium",
        ],
        correct: 3,
        explanation:
          "Transitional epithelium has specialized umbrella cells that flatten during distension.",
      },
      {
        text: "Which feature is unique to epithelial tissue?",
        options: [
          "Presence of extracellular matrix",
          "High cellularity and avascularity",
          "Presence of fibroblasts",
          "Elastic fibers",
        ],
        correct: 1,
        explanation:
          "Epithelia are highly cellular and avascular, relying on diffusion.",
      },
      {
        text: "Which epithelial cell type contributes directly to mucosal immunity?",
        options: ["Goblet cells", "Basal cells", "Enterocytes", "M cells"],
        correct: 3,
        explanation:
          "M cells transport antigens to immune cells in mucosa-associated lymphoid tissue.",
      },
      {
        text: "Which change would most impair epithelial transport of ions?",
        options: [
          "Loss of cilia",
          "Loss of tight junctions",
          "Loss of desmosomes",
          "Loss of keratin",
        ],
        correct: 1,
        explanation:
          "Tight junctions maintain electrochemical gradients necessary for ion transport.",
      },
      {
        text: "A section shows tall cells with basally placed nuclei, abundant mitochondria, and apical microvilli. This epithelium is specialized primarily for:",
        options: ["Protection", "Diffusion", "Secretion", "Absorption"],
        correct: 3,
        explanation:
          "These features indicate absorptive epithelium (e.g., intestinal).",
      },
      {
        text: "Which epithelial feature best explains rapid turnover after injury?",
        options: [
          "Tight junctions",
          "Basal lamina",
          "High mitotic rate of basal cells",
          "Presence of cilia",
        ],
        correct: 2,
        explanation: "Stem-like basal cells divide continuously.",
      },
      {
        text: "Which epithelium is most susceptible to damage by ischemia?",
        options: [
          "Stratified squamous keratinized",
          "Simple cuboidal",
          "Simple squamous",
          "Transitional",
        ],
        correct: 2,
        explanation:
          "Simple squamous epithelium is extremely thin and metabolically sensitive.",
      },
      {
        text: "Which statement about basement membrane is TRUE?",
        options: [
          "It is produced only by connective tissue",
          "It stains poorly with PAS",
          "It anchors epithelium and regulates diffusion",
          "It contains elastic fibers",
        ],
        correct: 2,
        explanation:
          "Basement membrane provides structural support and selective permeability.",
      },
      {
        text: "Loss of gap junctions would most directly impair:",
        options: [
          "Mechanical stability",
          "Cell signaling",
          "Water retention",
          "Cell adhesion to ECM",
        ],
        correct: 1,
        explanation:
          "Gap junctions allow direct cytoplasmic communication between cells.",
      },
      {
        text: "Which epithelial adaptation best supports directional transport?",
        options: [
          "Stratification",
          "Cell polarity",
          "Keratinization",
          "Ciliation",
        ],
        correct: 1,
        explanation:
          "Polarized distribution of transporters enables vectorial movement.",
      },
    ],
    "General Connective Tissue": [
      {
        text: "Which feature best distinguishes mesenchymal connective tissue from loose connective tissue proper in routine histological sections?",
        options: [
          "Abundance of ground substance",
          "Presence of undifferentiated stellate cells",
          "Sparse collagen fibers",
          "High vascularity",
        ],
        correct: 1,
        explanation:
          "Mesenchymal tissue is characterized by undifferentiated stellate cells with long processes, unlike loose connective tissue which contains differentiated fibroblasts.",
      },
      {
        text: "The primary reason reticular fibers are poorly visualized with H&E stain is due to their:",
        options: [
          "Elastic protein content",
          "Thin diameter and glycosylation",
          "Lack of cross-linking",
          "Intracellular location",
        ],
        correct: 1,
        explanation:
          "Reticular fibers are thin type III collagen fibers coated with carbohydrates, requiring silver stains for visualization.",
      },
      {
        text: "Which cell type is most responsible for initiating inflammatory responses in connective tissue?",
        options: ["Fibroblast", "Mast cell", "Plasma cell", "Macrophage"],
        correct: 1,
        explanation:
          "Mast cells release histamine, heparin, and cytokines, triggering vascular changes early in inflammation.",
      },
      {
        text: "A connective tissue sample shows densely packed collagen fibers arranged in multiple directions. This tissue most likely functions to:",
        options: [
          "Resist unidirectional tensile stress",
          "Provide elastic recoil",
          "Withstand stress from various directions",
          "Support hematopoiesis",
        ],
        correct: 2,
        explanation:
          "Dense irregular connective tissue resists multidirectional mechanical forces.",
      },
      {
        text: "Which molecular component contributes most to the hydration and compressive resistance of ground substance?",
        options: ["Fibronectin", "Collagen", "Proteoglycans", "Elastin"],
        correct: 2,
        explanation:
          "Proteoglycans bind water via glycosaminoglycans, providing turgidity and resistance to compression.",
      },
      {
        text: "Plasma cells can be confidently identified histologically by:",
        options: [
          "Central euchromatic nucleus",
          "Prominent nucleolus",
          "Clock-face chromatin pattern",
          "Scant rough endoplasmic reticulum",
        ],
        correct: 2,
        explanation:
          "Plasma cells show eccentric nuclei with clumped heterochromatin, creating a clock-face appearance.",
      },
      {
        text: "Which connective tissue cell is derived from monocytes and exhibits phagocytic activity?",
        options: ["Fibroblast", "Mast cell", "Macrophage", "Plasma cell"],
        correct: 2,
        explanation:
          "Macrophages originate from monocytes and serve immune and phagocytic roles.",
      },
      {
        text: "Elastic fibers differ from collagen fibers primarily due to their:",
        options: [
          "Resistance to enzymatic degradation",
          "Ability to recoil after stretching",
          "Intracellular assembly",
          "Higher tensile strength",
        ],
        correct: 1,
        explanation:
          "Elastic fibers contain elastin and fibrillin, allowing stretch and recoil.",
      },
      {
        text: "Which connective tissue component is MOST responsible for cell adhesion and migration?",
        options: [
          "Hyaluronic acid",
          "Fibronectin",
          "Elastin",
          "Type I collagen",
        ],
        correct: 1,
        explanation:
          "Fibronectin links cells to extracellular matrix and facilitates cell migration and adhesion.",
      },
      {
        text: "Which feature best differentiates dense regular connective tissue from dense irregular connective tissue?",
        options: [
          "Vascularity",
          "Fiber thickness",
          "Orientation of collagen fibers",
          "Cell density",
        ],
        correct: 2,
        explanation:
          "Dense regular CT has parallel collagen bundles, aligned with the direction of stress.",
      },
      {
        text: "Ground substance is electron-lucent under electron microscopy primarily because it:",
        options: [
          "Lacks protein",
          "Is highly hydrated",
          "Contains elastic fibers",
          "Is intracellular",
        ],
        correct: 1,
        explanation:
          "The high water content of ground substance makes it electron-lucent.",
      },
      {
        text: "Which cell is responsible for collagen synthesis in normal connective tissue?",
        options: ["Mast cell", "Macrophage", "Fibroblast", "Plasma cell"],
        correct: 2,
        explanation:
          "Fibroblasts synthesize collagen, elastin, and ground substance components.",
      },
      {
        text: "Which staining method is BEST for demonstrating elastic fibers?",
        options: [
          "Periodic acid–Schiff",
          "Masson's trichrome",
          "Verhoeff’s stain",
          "Silver impregnation",
        ],
        correct: 2,
        explanation: "Verhoeff’s stain selectively highlights elastic fibers.",
      },
      {
        text: "The predominant collagen type in reticular fibers is:",
        options: ["Type I", "Type II", "Type III", "Type IV"],
        correct: 2,
        explanation: "Reticular fibers are composed of Type III collagen.",
      },
      {
        text: "Which connective tissue cell shows basophilic cytoplasm due to abundant rough ER?",
        options: ["Fibrocyte", "Plasma cell", "Mast cell", "Adipocyte"],
        correct: 1,
        explanation:
          "Plasma cells synthesize antibodies and thus contain extensive rough ER.",
      },
      {
        text: "Which connective tissue component provides a pathway for diffusion of nutrients and metabolites?",
        options: [
          "Collagen fibers",
          "Elastic fibers",
          "Ground substance",
          "Reticular fibers",
        ],
        correct: 2,
        explanation:
          "Ground substance permits diffusion of substances between capillaries and cells.",
      },
      {
        text: "A tissue rich in reticular fibers would most likely be found in:",
        options: ["Tendons", "Dermis", "Lymphoid organs", "Ligaments"],
        correct: 2,
        explanation:
          "Reticular fibers form a supportive framework in lymphoid and hematopoietic organs.",
      },
      {
        text: "Which feature indicates a fibroblast is metabolically active?",
        options: [
          "Dark elongated nucleus",
          "Abundant cytoplasm",
          "Sparse organelles",
          "Condensed chromatin",
        ],
        correct: 1,
        explanation:
          "Active fibroblasts have large cytoplasm and euchromatic nuclei.",
      },
      {
        text: "Which connective tissue cell plays a key role in antigen presentation?",
        options: ["Mast cell", "Fibroblast", "Plasma cell", "Macrophage"],
        correct: 3,
        explanation:
          "Macrophages process and present antigens to immune cells.",
      },
      {
        text: "Which extracellular matrix component is MOST resistant to tensile stress?",
        options: [
          "Elastin",
          "Reticular fibers",
          "Type I collagen",
          "Proteoglycans",
        ],
        correct: 2,
        explanation:
          "Type I collagen provides maximum tensile strength in connective tissues.",
      },
    ],
    Cartilage: [
      {
        text: "Which feature best explains the inability of adult articular cartilage to regenerate effectively after injury?",
        options: [
          "Absence of proteoglycans",
          "Low mitotic activity of chondrocytes",
          "Lack of vascularity and perichondrium",
          "High water content of the matrix",
        ],
        correct: 2,
        explanation:
          "Articular cartilage lacks both blood vessels and perichondrium, eliminating sources of progenitor cells and nutrients needed for repair.",
      },
      {
        text: "Which molecular component is primarily responsible for the resilience to compression in hyaline cartilage?",
        options: ["Type II collagen", "Aggrecan", "Chondronectin", "Elastin"],
        correct: 1,
        explanation:
          "Aggrecan binds hyaluronic acid and attracts water, creating osmotic swelling pressure that resists compression.",
      },
      {
        text: "A histological section shows cartilage with visible fibers, abundant chondrocytes, and no perichondrium. Which cartilage is most likely?",
        options: [
          "Hyaline cartilage",
          "Elastic cartilage",
          "Fibrocartilage",
          "Articular cartilage",
        ],
        correct: 2,
        explanation:
          "Fibrocartilage has visible collagen fibers, no perichondrium, and abundant chondrocytes arranged in rows.",
      },
      {
        text: "Which cell population is directly responsible for interstitial growth of cartilage?",
        options: [
          "Perichondrial fibroblasts",
          "Mesenchymal stem cells",
          "Chondroblasts",
          "Chondrocytes",
        ],
        correct: 3,
        explanation:
          "Interstitial growth occurs via mitotic division of chondrocytes within lacunae, forming isogenous groups.",
      },
      {
        text: "Why is elastic cartilage less prone to calcification compared to hyaline cartilage?",
        options: [
          "Higher proteoglycan content",
          "Presence of elastic fibers inhibiting mineral deposition",
          "Greater vascular supply",
          "Increased chondrocyte turnover",
        ],
        correct: 1,
        explanation:
          "Elastic fibers interfere with mineral deposition, reducing calcification tendency.",
      },
      {
        text: "Which structural arrangement best defines an isogenous group?",
        options: [
          "Chondrocytes sharing a perichondrial origin",
          "Chondrocytes formed by appositional growth",
          "Clusters of chondrocytes derived from a single parent cell",
          "Aggregates of degenerating chondrocytes",
        ],
        correct: 2,
        explanation:
          "Isogenous groups result from mitotic division of one chondrocyte, reflecting interstitial growth.",
      },
      {
        text: "The basophilia of cartilage matrix is mainly due to:",
        options: [
          "Sulfated glycosaminoglycans",
          "Elastic fibers",
          "Type II collagen",
          "Chondronectin",
        ],
        correct: 0,
        explanation:
          "Sulfated GAGs (e.g., chondroitin sulfate) bind basic dyes, producing basophilia.",
      },
      {
        text: "Which cartilage type is best adapted to resist both compression and tensile forces?",
        options: [
          "Hyaline cartilage",
          "Elastic cartilage",
          "Fibrocartilage",
          "Articular cartilage",
        ],
        correct: 2,
        explanation:
          "Fibrocartilage contains dense type I collagen, enabling resistance to tensile stress while proteoglycans handle compression.",
      },
      {
        text: "Which feature distinguishes articular cartilage histologically?",
        options: [
          "Presence of elastic fibers",
          "Thick perichondrium",
          "Zonal arrangement of chondrocytes",
          "Numerous isogenous groups",
        ],
        correct: 2,
        explanation:
          "Articular cartilage has superficial, transitional, deep, and calcified zones, each with distinct chondrocyte orientation.",
      },
      {
        text: "Which statement regarding the perichondrium is TRUE?",
        options: [
          "It is essential for interstitial growth",
          "It contains chondrocytes in lacunae",
          "It contributes to appositional growth",
          "It is present in all cartilages",
        ],
        correct: 2,
        explanation:
          "Perichondrium supplies chondroblasts for appositional growth. It is absent in fibrocartilage and articular cartilage.",
      },
      {
        text: "Loss of which molecule would most severely impair cartilage hydration?",
        options: ["Type II collagen", "Elastin", "Aggrecan", "Fibronectin"],
        correct: 2,
        explanation:
          "Aggrecan binds water via negatively charged GAGs, maintaining matrix hydration.",
      },
      {
        text: "Which cartilage type is most metabolically active?",
        options: [
          "Hyaline cartilage",
          "Elastic cartilage",
          "Fibrocartilage",
          "Articular cartilage",
        ],
        correct: 1,
        explanation:
          "Elastic cartilage has more chondrocytes and richer matrix turnover due to elastic fiber maintenance.",
      },
      {
        text: "The territorial matrix is best described as:",
        options: [
          "Light-staining matrix between isogenous groups",
          "Matrix rich in collagen fibers",
          "Basophilic matrix immediately surrounding lacunae",
          "Matrix continuous with perichondrium",
        ],
        correct: 2,
        explanation:
          "Territorial matrix stains deeply due to high proteoglycan concentration around lacunae.",
      },
      {
        text: "Which change occurs in aging cartilage?",
        options: [
          "Increased proteoglycan synthesis",
          "Increased elasticity",
          "Decreased water content",
          "Enhanced repair capacity",
        ],
        correct: 2,
        explanation:
          "Aging reduces proteoglycan content, lowering water retention and resilience.",
      },
      {
        text: "Which cartilage is most likely to undergo physiological calcification?",
        options: [
          "Elastic cartilage",
          "Hyaline cartilage of trachea",
          "Fibrocartilage of intervertebral disc",
          "Articular cartilage",
        ],
        correct: 1,
        explanation:
          "Hyaline cartilage often calcifies with age, especially in costal and tracheal cartilage.",
      },
      {
        text: "The primary function of chondronectin is to:",
        options: [
          "Bind calcium",
          "Attach chondrocytes to collagen fibers",
          "Promote angiogenesis",
          "Degrade proteoglycans",
        ],
        correct: 1,
        explanation:
          "Chondronectin mediates adhesion between chondrocytes and collagen matrix.",
      },
      {
        text: "Which feature explains the glassy appearance of hyaline cartilage?",
        options: [
          "High elastin content",
          "Masking of collagen fibers by proteoglycans",
          "Absence of collagen",
          "Low water content",
        ],
        correct: 1,
        explanation:
          "Type II collagen fibers are present but masked by proteoglycans, creating a smooth, glassy look.",
      },
      {
        text: "Which cartilage lacks both perichondrium AND type II collagen?",
        options: [
          "Elastic cartilage",
          "Hyaline cartilage",
          "Fibrocartilage",
          "Articular cartilage",
        ],
        correct: 2,
        explanation:
          "Fibrocartilage contains dense type I collagen and lacks perichondrium.",
      },
      {
        text: "Nutrient diffusion in cartilage primarily occurs through:",
        options: [
          "Blood vessels",
          "Canaliculi",
          "Ground substance",
          "Perichondrium only",
        ],
        correct: 2,
        explanation:
          "Cartilage relies on diffusion through hydrated ground substance due to avascularity.",
      },
      {
        text: "Which histological feature best correlates with load-bearing function in cartilage?",
        options: [
          "Elastic fiber density",
          "Chondrocyte mitotic rate",
          "Proteoglycan concentration",
          "Perichondrial thickness",
        ],
        correct: 2,
        explanation:
          "High proteoglycan concentration allows resistance to compressive loads.",
      },
    ],
    Bones: [
      {
        text: "Which ultrastructural feature most directly explains the birefringence of bone under polarized light?",
        options: [
          "Osteocyte canaliculi",
          "Hydroxyapatite crystals",
          "Parallel orientation of collagen fibrils",
          "Lamellar vascular arrangement",
        ],
        correct: 2,
        explanation:
          "Bone birefringence results from the ordered, parallel arrangement of type I collagen fibrils within lamellae—not from minerals or vessels.",
      },
      {
        text: "The reversal line in bone histology most accurately represents:",
        options: [
          "Boundary between compact and cancellous bone",
          "Site of osteoblast apoptosis",
          "Interface between bone resorption and deposition",
          "Junction between woven and lamellar bone",
        ],
        correct: 2,
        explanation:
          "A reversal line marks the transition where osteoclastic resorption ends and osteoblastic deposition begins.",
      },
      {
        text: "Which statement best explains why osteocytes survive despite being embedded in mineralized matrix?",
        options: [
          "They are metabolically inactive",
          "Lacunae contain interstitial fluid under pressure",
          "Gap junctions permit nutrient diffusion via canaliculi",
          "Bone matrix is semi-permeable",
        ],
        correct: 2,
        explanation:
          "Gap junctions through canaliculi allow metabolic exchange between osteocytes and surface cells.",
      },
      {
        text: "Which bone cell shows the highest expression of alkaline phosphatase?",
        options: ["Osteoclast", "Osteoblast", "Osteocyte", "Bone lining cell"],
        correct: 1,
        explanation:
          "Alkaline phosphatase is critical for mineralization and is most abundant in active osteoblasts.",
      },
      {
        text: "The cement line of an osteon differs from surrounding lamellae primarily because it:",
        options: [
          "Contains type II collagen",
          "Is hypermineralized and collagen-poor",
          "Contains elastic fibers",
          "Lacks osteocytes",
        ],
        correct: 1,
        explanation:
          "Cement lines are highly mineralized and poor in collagen, making them mechanically weak planes.",
      },
      {
        text: "Which feature distinguishes woven bone from lamellar bone histologically?",
        options: [
          "Presence of osteons",
          "High mineral content",
          "Random collagen fiber orientation",
          "Absence of osteocytes",
        ],
        correct: 2,
        explanation:
          "Woven bone has randomly arranged collagen fibers, unlike orderly lamellae.",
      },
      {
        text: "The Haversian canal differs from Volkmann’s canal because it:",
        options: [
          "Is lined by endosteum",
          "Contains lymphatics",
          "Runs perpendicular to bone surface",
          "Lacks nerves",
        ],
        correct: 0,
        explanation:
          "Haversian canals are endosteum-lined and run parallel to the long axis of the bone.",
      },
      {
        text: "Which component primarily accounts for bone’s tensile strength?",
        options: [
          "Hydroxyapatite",
          "Proteoglycans",
          "Type I collagen",
          "Osteoid fluid",
        ],
        correct: 2,
        explanation:
          "Type I collagen provides tensile strength, while minerals provide compressive strength.",
      },
      {
        text: "Failure of osteoid mineralization would most directly affect which zone?",
        options: [
          "Cement line",
          "Interstitial lamellae",
          "Osteoid seam",
          "Canaliculi",
        ],
        correct: 2,
        explanation:
          "The osteoid seam is newly formed, unmineralized bone matrix.",
      },
      {
        text: "Which statement regarding osteoclasts is histologically correct?",
        options: [
          "Derived from mesenchymal stem cells",
          "Possess a ruffled border facing bone surface",
          "Reside in lacunae called osteons",
          "Secrete alkaline phosphatase",
        ],
        correct: 1,
        explanation:
          "Osteoclasts are multinucleated, hematopoietic-derived cells with a ruffled border for resorption.",
      },
      {
        text: "How does compact bone primarily differ from cancellous bone histologically?",
        options: [
          "Presence of osteocytes",
          "Presence of osteoblasts",
          "Organization into osteons",
          "Mineral composition",
        ],
        correct: 2,
        explanation:
          "Compact bone is organized into osteons, whereas cancellous bone is not.",
      },
      {
        text: "Which feature best explains rapid calcium exchange in cancellous bone?",
        options: [
          "Thick lamellae",
          "Numerous cement lines",
          "Large surface-to-volume ratio",
          "Abundant osteocytes",
        ],
        correct: 2,
        explanation:
          "Cancellous bone has a high surface-to-volume ratio, facilitating mineral exchange.",
      },
      {
        text: "The endosteum is best described as:",
        options: [
          "Dense irregular connective tissue",
          "Simple squamous epithelium",
          "Osteogenic connective tissue lining internal bone surfaces",
          "Mineralized extracellular matrix",
        ],
        correct: 2,
        explanation:
          "Endosteum is thin, osteogenic connective tissue lining marrow cavities and canals.",
      },
      {
        text: "Which change would most directly impair osteocyte mechanosensation?",
        options: [
          "Loss of lacunae",
          "Reduction in canalicular network",
          "Increased mineralization",
          "Thickened cement lines",
        ],
        correct: 1,
        explanation:
          "Mechanosensation depends on canaliculi transmitting mechanical signals.",
      },
      {
        text: "Why do interstitial lamellae lack a central canal?",
        options: [
          "They are newly formed bone",
          "They are remnants of remodeled osteons",
          "They are avascular",
          "They contain woven bone",
        ],
        correct: 1,
        explanation:
          "Interstitial lamellae are remnants of old osteons left after remodeling.",
      },
      {
        text: "Which histological feature indicates active bone remodeling?",
        options: [
          "Uniform lamellae",
          "Numerous reversal lines",
          "Thick cement lines",
          "Absence of osteoclasts",
        ],
        correct: 1,
        explanation:
          "Reversal lines indicate cycles of resorption and deposition.",
      },
      {
        text: "The organic component of bone matrix is primarily synthesized by:",
        options: [
          "Osteocytes",
          "Osteoclasts",
          "Osteoblasts",
          "Bone lining cells",
        ],
        correct: 2,
        explanation:
          "Osteoblasts synthesize osteoid, the organic matrix of bone.",
      },
      {
        text: "Which structure allows diffusion of nutrients in mineralized bone?",
        options: [
          "Haversian canal",
          "Volkmann’s canal",
          "Canaliculi",
          "Cement line",
        ],
        correct: 2,
        explanation:
          "Canaliculi permit diffusion between osteocytes and blood supply.",
      },
      {
        text: "Which histological finding is most characteristic of pathological bone softening?",
        options: [
          "Increased osteon density",
          "Thickened cement lines",
          "Accumulation of unmineralized osteoid",
          "Loss of canaliculi",
        ],
        correct: 2,
        explanation:
          "Bone softening (e.g., osteomalacia) shows excess unmineralized osteoid.",
      },
      {
        text: "Why is bone considered a dynamic tissue histologically?",
        options: [
          "Presence of marrow",
          "Constant mineral deposition",
          "Continuous remodeling by opposing cell populations",
          "High collagen turnover",
        ],
        correct: 2,
        explanation:
          "Bone is dynamic due to continuous remodeling by osteoblasts and osteoclasts.",
      },
    ],
    "Muscular Tissue": [
      {
        text: "Which structural feature distinguishes cardiac muscle from skeletal muscle under a light microscope?",
        options: [
          "Presence of striations",
          "Multinucleation",
          "Intercalated discs",
          "Peripheral nuclei",
        ],
        correct: 2,
        explanation:
          "Cardiac muscle cells are connected via intercalated discs, specialized junctions for mechanical and electrical coupling; skeletal muscle lacks them.",
      },
      {
        text: "Which protein is primarily responsible for the passive elasticity of muscle?",
        options: ["Actin", "Myosin", "Titin", "Nebulin"],
        correct: 2,
        explanation:
          "Titin spans from Z line to M line and acts as a molecular spring, contributing to passive tension.",
      },
      {
        text: "Which type of skeletal muscle fiber has the highest oxidative capacity and fatigue resistance?",
        options: ["Type I", "Type IIa", "Type IIb", "Type IIx"],
        correct: 0,
        explanation:
          "Type I fibers are slow-twitch, rich in mitochondria and myoglobin, ideal for endurance.",
      },
      {
        text: "In smooth muscle, contraction is initiated primarily by:",
        options: [
          "Troponin-tropomyosin complex",
          "Calmodulin binding to Ca²⁺",
          "Action of titin",
          "Direct actin-myosin ATPase activation",
        ],
        correct: 1,
        explanation:
          "Smooth muscle lacks troponin; Ca²⁺ binds calmodulin, activating myosin light chain kinase.",
      },
      {
        text: "Which histological stain best demonstrates the Z line of striated muscle?",
        options: ["H&E", "Masson’s trichrome", "Phalloidin staining", "PAS"],
        correct: 2,
        explanation:
          "Phalloidin binds F-actin, highlighting Z lines specifically in striated muscle fibers.",
      },
      {
        text: "The feature “diad” in cardiac muscle refers to:",
        options: [
          "One T-tubule + one SR terminal cistern",
          "Two nuclei per cell",
          "Two sarcomeres per fiber",
          "Paired intercalated discs",
        ],
        correct: 0,
        explanation:
          "Cardiac muscle diads consist of T-tubule + single SR cistern, unlike skeletal muscle triads.",
      },
      {
        text: "Which skeletal muscle fiber type predominantly relies on glycolysis?",
        options: ["Type I", "Type IIa", "Type IIb", "Smooth muscle"],
        correct: 2,
        explanation:
          "Type IIb fibers are fast-twitch, low mitochondria, high glycogen, suited for short bursts.",
      },
      {
        text: "Dense bodies in smooth muscle are analogous to which skeletal muscle structure?",
        options: ["Z line", "M line", "I band", "A band"],
        correct: 0,
        explanation:
          "Dense bodies anchor actin filaments in smooth muscle, functionally equivalent to Z lines.",
      },
      {
        text: "Which of the following structures ensures electrical coupling in cardiac muscle?",
        options: [
          "Gap junctions",
          "Tight junctions",
          "Desmosomes",
          "Hemidesmosomes",
        ],
        correct: 0,
        explanation:
          "Gap junctions allow ions to pass directly, enabling synchronized contraction.",
      },
      {
        text: "Which protein regulates actin-myosin interaction in smooth muscle?",
        options: ["Troponin C", "Calmodulin", "Nebulin", "Dystrophin"],
        correct: 1,
        explanation:
          "Calmodulin binds Ca²⁺, activating myosin light chain kinase, regulating contraction.",
      },
      {
        text: "Skeletal muscle regeneration is primarily mediated by:",
        options: [
          "Fibroblasts",
          "Satellite cells",
          "Myoblasts in adults",
          "Pericytes",
        ],
        correct: 1,
        explanation:
          "Satellite cells are quiescent myogenic stem cells activated after injury.",
      },
      {
        text: "Which muscle type exhibits spontaneous rhythmic contractions?",
        options: [
          "Skeletal muscle",
          "Cardiac muscle",
          "Smooth muscle of large arteries only",
          "None",
        ],
        correct: 1,
        explanation:
          "Cardiac muscle cells are autorhythmic, generating spontaneous APs via pacemaker cells.",
      },
      {
        text: "The T-tubules in skeletal muscle are located at:",
        options: ["Z line", "M line", "A-I junction", "H zone"],
        correct: 2,
        explanation:
          "Skeletal T-tubules penetrate at A-I junctions for optimal excitation-contraction coupling.",
      },
      {
        text: "Which ion is essential for cross-bridge detachment in all muscle types?",
        options: ["Na⁺", "K⁺", "Mg²⁺", "Ca²⁺"],
        correct: 2,
        explanation:
          "Mg²⁺ is a cofactor for ATP hydrolysis, allowing myosin head detachment from actin.",
      },
      {
        text: "Intercalated discs contain all EXCEPT:",
        options: [
          "Fascia adherens",
          "Desmosomes",
          "Gap junctions",
          "Neuromuscular junctions",
        ],
        correct: 3,
        explanation:
          "Intercalated discs mediate mechanical/electrical coupling, not synaptic innervation.",
      },
      {
        text: "Smooth muscle contraction is slower than skeletal due to:",
        options: [
          "Faster calcium removal",
          "Absence of troponin",
          "Latch-bridge mechanism",
          "Lower actin content",
        ],
        correct: 2,
        explanation:
          "Latch-bridge allows sustained tension with minimal ATP, slowing contraction/relaxation.",
      },
      {
        text: "Which histological feature differentiates Type IIa and IIb fibers?",
        options: [
          "Nucleus position",
          "Mitochondrial density",
          "Presence of striations",
          "Fiber length",
        ],
        correct: 1,
        explanation:
          "Type IIa are oxidative-glycolytic (more mitochondria), Type IIb are glycolytic (fewer mitochondria).",
      },
      {
        text: "Which of the following is true about cardiac muscle nuclei?",
        options: [
          "Always peripheral",
          "Single, central",
          "Multinucleated, peripheral",
          "Multinucleated, central",
        ],
        correct: 1,
        explanation:
          "Cardiac myocytes usually have one centrally located nucleus; skeletal fibers are multinucleated with peripheral nuclei.",
      },
      {
        text: "The neuromuscular junction in skeletal muscle is specialized for:",
        options: [
          "Hormone release",
          "Electrical conduction only",
          "Chemical transmission",
          "Mechanical junction",
        ],
        correct: 2,
        explanation:
          "Acetylcholine release at NMJ triggers skeletal muscle depolarization and contraction.",
      },
      {
        text: "Which feature of smooth muscle allows it to maintain tone over long periods?",
        options: [
          "High mitochondria content",
          "Latch-bridge mechanism",
          "Extensive T-tubules",
          "Triad structures",
        ],
        correct: 1,
        explanation:
          "Smooth muscle can sustain tonic contraction efficiently via latch bridges without ATP depletion.",
      },
    ],
    "Nervous System": [
      {
        text: "Which of the following neuroglial cells is derived from mesoderm rather than ectoderm?",
        options: [
          "Astrocytes",
          "Oligodendrocytes",
          "Microglia",
          "Ependymal cells",
        ],
        correct: 2,
        explanation:
          "Microglia are derived from mesodermal (yolk sac) precursors, unlike other glial cells, which are of neuroectodermal origin.",
      },
      {
        text: "Which region of the neuron contains the highest density of voltage-gated sodium channels?",
        options: [
          "Dendritic spine",
          "Soma",
          "Axon initial segment",
          "Node of Ranvier",
        ],
        correct: 2,
        explanation:
          "The axon initial segment is specialized for action potential initiation due to its high density of voltage-gated Na⁺ channels.",
      },
      {
        text: "In the central nervous system, myelin sheaths are produced by:",
        options: [
          "Schwann cells",
          "Oligodendrocytes",
          "Astrocytes",
          "Ependymal cells",
        ],
        correct: 1,
        explanation:
          "Oligodendrocytes myelinate multiple axons in the CNS; Schwann cells do so in the PNS.",
      },
      {
        text: "Nissl bodies in neurons represent:",
        options: [
          "Smooth endoplasmic reticulum",
          "Golgi apparatus",
          "Rough endoplasmic reticulum and ribosomes",
          "Mitochondria clusters",
        ],
        correct: 2,
        explanation:
          "Nissl bodies are aggregates of RER and ribosomes, involved in protein synthesis.",
      },
      {
        text: "Which type of synapse predominantly mediates fast inhibitory neurotransmission in the CNS?",
        options: [
          "Glutamatergic synapse",
          "GABAergic synapse",
          "Cholinergic synapse",
          "Dopaminergic synapse",
        ],
        correct: 1,
        explanation:
          "GABAergic synapses open Cl⁻ channels causing hyperpolarization and fast inhibition.",
      },
      {
        text: "Which of the following structures is NOT part of the blood-brain barrier?",
        options: [
          "Endothelial tight junctions",
          "Pericytes",
          "Astrocyte end-feet",
          "Microglial phagocytes",
        ],
        correct: 3,
        explanation:
          "Microglia are immune cells, not structural components of the BBB.",
      },
      {
        text: "The primary difference between unipolar and bipolar neurons is:",
        options: [
          "Bipolar neurons have one axon only",
          "Unipolar neurons have dendrites and axon fused",
          "Bipolar neurons are always motor neurons",
          "Unipolar neurons are only in the CNS",
        ],
        correct: 1,
        explanation:
          "Unipolar (pseudounipolar) neurons have a single process splitting into dendritic and axonal branches.",
      },
      {
        text: "Which glial cell participates actively in the formation of scar tissue following CNS injury?",
        options: [
          "Microglia",
          "Oligodendrocytes",
          "Astrocytes",
          "Schwann cells",
        ],
        correct: 2,
        explanation:
          "Reactive astrocytes form glial scars and secrete extracellular matrix components after injury.",
      },
      {
        text: "Which statement about nodes of Ranvier is correct?",
        options: [
          "They are continuous myelin segments",
          "Ion channels are sparse",
          "They enable saltatory conduction",
          "Found only in CNS",
        ],
        correct: 2,
        explanation:
          "Nodes of Ranvier are gaps in myelin where ion exchange allows rapid signal conduction.",
      },
      {
        text: "Which neurotransmitter is predominantly excitatory in the CNS?",
        options: ["GABA", "Glycine", "Glutamate", "Dopamine"],
        correct: 2,
        explanation:
          "Glutamate depolarizes postsynaptic neurons via AMPA and NMDA receptors.",
      },
      {
        text: "The ependymal cells lining the ventricles are characterized by:",
        options: [
          "Tight junctions forming a complete barrier",
          "Cilia and microvilli",
          "Myelination of axons",
          "Phagocytic activity",
        ],
        correct: 1,
        explanation:
          "Ependymal cells have cilia for CSF movement and microvilli for absorption.",
      },
      {
        text: "Which type of neuron has the fastest conduction velocity?",
        options: [
          "Small, unmyelinated C fibers",
          "Large, myelinated Aα fibers",
          "Medium, myelinated Aδ fibers",
          "Small, myelinated B fibers",
        ],
        correct: 1,
        explanation:
          "Conduction velocity increases with axon diameter and myelination.",
      },
      {
        text: "Which statement about oligodendrocytes is FALSE?",
        options: [
          "They myelinate multiple axons",
          "Found only in CNS",
          "Derived from neuroectoderm",
          "Capable of phagocytosing debris",
        ],
        correct: 3,
        explanation:
          "Only microglia are phagocytic in CNS; oligodendrocytes produce myelin.",
      },
      {
        text: "The axon hillock is histologically distinct because:",
        options: [
          "It contains dense Nissl bodies",
          "Lacks Nissl bodies",
          "Has abundant Golgi complexes",
          "Is the site of synapse formation",
        ],
        correct: 1,
        explanation:
          "Nissl bodies are absent in axon hillock; this region initiates action potentials.",
      },
      {
        text: "Which glial cell can present antigens in CNS?",
        options: [
          "Astrocytes",
          "Oligodendrocytes",
          "Microglia",
          "Ependymal cells",
        ],
        correct: 2,
        explanation:
          "Microglia are the resident immune cells and can present antigens to T cells.",
      },
      {
        text: "Which component of the neuron is primarily responsible for retrograde transport?",
        options: [
          "Kinesin along microtubules",
          "Dynein along microtubules",
          "Actin filaments",
          "Myosin along actin",
        ],
        correct: 1,
        explanation:
          "Dynein carries materials from axon terminals back to the soma.",
      },
      {
        text: "Which of the following is true regarding Schwann cells?",
        options: [
          "Myelinate multiple axons simultaneously",
          "Form nodes of Ranvier in CNS",
          "Participate in peripheral nerve regeneration",
          "Derived from mesoderm",
        ],
        correct: 2,
        explanation:
          "Schwann cells support axon regrowth by forming regeneration tubes; they myelinate single axons.",
      },
      {
        text: "Which type of synapse allows direct electrical communication between neurons?",
        options: [
          "Chemical excitatory synapse",
          "Electrical gap junction",
          "GABAergic inhibitory synapse",
          "Cholinergic neuromuscular junction",
        ],
        correct: 1,
        explanation:
          "Gap junctions allow ions to flow directly between cells for rapid transmission.",
      },
      {
        text: "Which statement about dendritic spines is TRUE?",
        options: [
          "They contain myelin",
          "Site of axonal action potential initiation",
          "Are dynamic structures influenced by synaptic activity",
          "Found only in the PNS",
        ],
        correct: 2,
        explanation:
          "Dendritic spines remodel with synaptic strength and plasticity.",
      },
      {
        text: "Which neuroglial cell regulates extracellular ion concentrations and neurotransmitter levels?",
        options: [
          "Oligodendrocytes",
          "Astrocytes",
          "Microglia",
          "Ependymal cells",
        ],
        correct: 1,
        explanation:
          "Astrocytes maintain K⁺ and glutamate homeostasis in the CNS.",
      },
    ],
    "Blood & Mononuclear System": [
      {
        text: "Which of the following granules is unique to neutrophils and contains myeloperoxidase?",
        options: [
          "Azurophilic granules",
          "Specific granules",
          "Tertiary granules",
          "Secretory vesicles",
        ],
        correct: 0,
        explanation:
          "Azurophilic (primary) granules contain myeloperoxidase and are characteristic of neutrophils, unlike specific (secondary) granules, which lack MPO.",
      },
      {
        text: "Which plasma protein is mainly responsible for maintaining osmotic pressure in blood?",
        options: ["Albumin", "Fibrinogen", "Immunoglobulin G", "Complement C3"],
        correct: 0,
        explanation:
          "Albumin, synthesized by the liver, is the major contributor to plasma osmotic (colloid) pressure.",
      },
      {
        text: "Which leukocyte has a bilobed nucleus and strongly eosinophilic granules?",
        options: ["Neutrophil", "Eosinophil", "Basophil", "Monocyte"],
        correct: 1,
        explanation:
          "Eosinophils have bilobed nuclei and red-orange granules due to major basic protein staining with eosin.",
      },
      {
        text: "Kupffer cells in the liver are derived from:",
        options: [
          "Lymphoid stem cells",
          "Myeloid progenitors in bone marrow",
          "Erythroid progenitors",
          "Endothelial cells",
        ],
        correct: 1,
        explanation:
          "Kupffer cells are tissue macrophages part of MPS, originating from monocytes in the myeloid lineage.",
      },
      {
        text: "Which blood cells have no mitochondria and rely entirely on glycolysis?",
        options: ["Lymphocytes", "Neutrophils", "Erythrocytes", "Monocytes"],
        correct: 2,
        explanation:
          "Mature erythrocytes lack mitochondria, relying on anaerobic glycolysis for energy.",
      },
      {
        text: "Monocytes transform into macrophages upon entering tissues. Which marker is highly expressed in mature macrophages?",
        options: ["CD3", "CD68", "CD19", "CD56"],
        correct: 1,
        explanation:
          "CD68 is a lysosomal marker highly expressed in macrophages and tissue monocytes.",
      },
      {
        text: "Which of the following granulocytes has histamine-rich granules that stain intensely with basic dyes?",
        options: ["Neutrophils", "Eosinophils", "Basophils", "Monocytes"],
        correct: 2,
        explanation:
          "Basophils contain basophilic granules rich in histamine and heparin.",
      },
      {
        text: "Platelets derive from:",
        options: ["Lymphocytes", "Megakaryocytes", "Monocytes", "Erythrocytes"],
        correct: 1,
        explanation:
          "Platelets are cytoplasmic fragments of megakaryocytes in the bone marrow.",
      },
      {
        text: "The half-life of circulating neutrophils is approximately:",
        options: ["6–8 hours", "2–3 days", "10–14 days", "1 month"],
        correct: 0,
        explanation:
          "Neutrophils are short-lived in circulation; tissue half-life is longer.",
      },
      {
        text: "Which mononuclear phagocyte is specialized in antigen presentation?",
        options: [
          "Kupffer cells",
          "Langerhans cells",
          "Alveolar macrophages",
          "Osteoclasts",
        ],
        correct: 1,
        explanation:
          "Langerhans cells in the epidermis are specialized dendritic cells presenting antigens to T cells.",
      },
      {
        text: "In histology, azurophilic granules in neutrophils are derived from:",
        options: [
          "Endoplasmic reticulum",
          "Golgi complex",
          "Mitochondria",
          "Lysosomal fusion",
        ],
        correct: 1,
        explanation:
          "Primary granules form in the Golgi during neutrophil development and are lysosome-like.",
      },
      {
        text: "Which plasma cell marker indicates active immunoglobulin secretion?",
        options: ["CD3", "CD20", "CD138", "CD68"],
        correct: 2,
        explanation:
          "CD138 (syndecan-1) is highly expressed on plasma cells actively secreting antibodies.",
      },
      {
        text: "Which of the following is NOT a function of the mononuclear phagocyte system?",
        options: [
          "Phagocytosis of pathogens",
          "Antigen presentation",
          "Oxygen transport",
          "Tissue remodeling",
        ],
        correct: 2,
        explanation:
          "Oxygen transport is the role of erythrocytes, not macrophages or MPS cells.",
      },
      {
        text: "The primary site of hematopoiesis in adults is:",
        options: ["Liver", "Spleen", "Red bone marrow", "Lymph nodes"],
        correct: 2,
        explanation:
          "Red bone marrow is the main site of production for all blood cell lineages in adults.",
      },
      {
        text: "Which enzyme in monocytes/macrophages generates reactive oxygen species to kill microbes?",
        options: ["Lysozyme", "NADPH oxidase", "Elastase", "Myeloperoxidase"],
        correct: 1,
        explanation:
          "NADPH oxidase generates superoxide radicals in the respiratory burst during phagocytosis.",
      },
      {
        text: "Erythrocyte sedimentation rate (ESR) is influenced primarily by:",
        options: [
          "Platelet count",
          "Plasma fibrinogen and globulins",
          "Erythrocyte size alone",
          "Leukocyte numbers",
        ],
        correct: 1,
        explanation:
          "ESR increases with plasma proteins that promote RBC aggregation.",
      },
      {
        text: "Which cell type in the MPS is multinucleated and participates in bone resorption?",
        options: [
          "Kupffer cells",
          "Osteoclasts",
          "Langerhans cells",
          "Alveolar macrophages",
        ],
        correct: 1,
        explanation:
          "Osteoclasts are large, multinucleated macrophage-derived cells that resorb bone.",
      },
      {
        text: "Which leukocyte contains specific granules with collagenase and lactoferrin?",
        options: ["Neutrophil", "Eosinophil", "Basophil", "Monocyte"],
        correct: 0,
        explanation:
          "Secondary granules in neutrophils contain collagenase, lactoferrin, and other enzymes aiding tissue infiltration.",
      },
      {
        text: "Hemosiderin-laden macrophages are most commonly seen in:",
        options: [
          "Healthy liver",
          "Pulmonary alveoli after hemorrhage",
          "Circulating blood",
          "Lymph nodes",
        ],
        correct: 1,
        explanation:
          "Macrophages phagocytose extravasated RBCs, degrading hemoglobin to iron-containing hemosiderin.",
      },
      {
        text: "Which cytokine is most critical for monocyte differentiation into macrophages?",
        options: ["IL-2", "GM-CSF", "TNF-α", "IL-10"],
        correct: 1,
        explanation:
          "Granulocyte-macrophage colony-stimulating factor (GM-CSF) drives differentiation of monocytes into tissue macrophages.",
      },
    ],
  },
};

// ==========================================
// 3. STATE MANAGEMENT
// ==========================================

const state = {
  currentSubcourseKey: null,
  currentModuleIndex: null,
  currentModuleName: null,
  questions: [],
  currentIndex: 0,
  score: 0,
  moduleData: {},
  isAnswered: false,
  multimedia: {},
  timerInterval: null,
  timeRemaining: 0,
  isTimerPaused: false,
};

// ==========================================
// 4. DOM ELEMENTS
// ==========================================

// Views
const viewSubcourses = document.getElementById("view-subcourses");
const viewTopics = document.getElementById("view-topics");
const viewQuiz = document.getElementById("view-quiz");
const viewResults = document.getElementById("view-results");

// Dynamic Content Areas
const subcourseGrid = document.getElementById("subcourse-grid");
const topicList = document.getElementById("topic-list");
const selectedSubcourseTitle = document.getElementById(
  "selected-subcourse-title",
);

// Quiz Elements
const quizTopicTitle = document.getElementById("quiz-topic-title");
const quizProgress = document.getElementById("quiz-progress");
const quizTimer = document.getElementById("quiz-timer");
const btnPauseTimer = document.getElementById("btn-pause-timer");
const progressBarFill = document.getElementById("progress-bar-fill");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const multimediaContainer = document.getElementById("multimedia-container");
// Feedback Elements
const feedbackContainer = document.getElementById("feedback-container");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");
const btnNext = document.getElementById("btn-next-question");
const btnPrev = document.getElementById("btn-prev-question");

// Result Elements
const scorePercentage = document.getElementById("score-percentage");
const scoreText = document.getElementById("score-text");
const resultMessage = document.getElementById("result-message");

// Navigation Buttons
const btnBackHome = document.getElementById("btn-back-home");
const btnRetry = document.getElementById("btn-retry");
const btnBackTopics = document.getElementById("btn-back-topics");
const btnHome = document.getElementById("btn-home");
const btnQuizHome = document.getElementById("btn-quiz-home");

// ==========================================
// 5. QUESTION FORMAT CONVERSION (Per-Option Explanations)
// ==========================================

/**
 * Converts questions from old format (string options) to new format (option objects with explanations)
 * This enables unique explanations for each multiple-choice option
 */
function convertToPerOptionFormat(questions) {
  console.log(
    "Converting questions to per-option format:",
    questions.length,
    "questions",
  );
  return questions.map((question, qIndex) => {
    // If options are already objects, return as-is
    if (typeof question.options[0] === "object") {
      console.log(`Question ${qIndex}: Already in object format`);
      return question;
    }

    console.log(`Question ${qIndex}: Converting from string to object format`);

    // Convert string options to option objects with explanations
    const correctIndex = question.correct;
    const correctOption = question.options[correctIndex];
    const generalExplanation =
      question.explanation || "Review the course material for this topic.";

    question.options = question.options.map((optionText, idx) => ({
      text: optionText,
      explanation:
        idx === correctIndex
          ? generalExplanation // Correct answer gets the original explanation
          : `This is not the correct answer. The correct answer is "${correctOption}" - ${generalExplanation}`, // Wrong answers get contextual explanation
    }));

    // Remove the old general explanation field to encourage using per-option explanations
    delete question.explanation;

    console.log(`Question ${qIndex}: Converted successfully`);
    return question;
  });
}

// ==========================================
// 6. NAVIGATION & VIEW LOGIC
// ==========================================

function switchView(viewId) {
  [viewSubcourses, viewTopics, viewQuiz, viewResults].forEach((el) => {
    el.classList.add("hidden");
    el.classList.remove("active-view");
  });

  const activeEl = document.getElementById(viewId);
  activeEl.classList.remove("hidden");
  activeEl.classList.add("active-view");
  window.scrollTo(0, 0);
}

function init() {
  renderSubcourses();
  loadDailyFact();
  loadLastScore();
  switchView("view-subcourses");
}

function loadLastScore() {
  const lastScoreCard = document.getElementById("last-score-card");
  const lastScoreModule = document.getElementById("last-score-module");
  const lastScoreValue = document.getElementById("last-score-value");
  const btnReviewLastQuiz = document.getElementById("btn-review-last-quiz");

  const lastScoreData = localStorage.getItem("lastQuizScore");

  if (lastScoreData && lastScoreCard) {
    const data = JSON.parse(lastScoreData);
    lastScoreModule.innerText = data.moduleName;
    lastScoreValue.innerText = `${data.score}/${data.total} (${data.percentage}%)`;
    lastScoreCard.classList.remove("hidden");

    btnReviewLastQuiz.addEventListener("click", () => {
      loadTopics(data.subcourseKey);
      startQuiz(data.moduleIndex, data.moduleName);
    });
  }
}

function renderSubcourses() {
  subcourseGrid.innerHTML = "";

  Object.keys(anatomyData).forEach((key) => {
    const data = anatomyData[key];
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <h3>${data.title}</h3>
            <p style="color:var(--text-light); font-size: 0.9rem;">${data.modules.length} Modules</p>
        `;

    card.addEventListener("click", () => {
      loadTopics(key);
    });

    subcourseGrid.appendChild(card);
  });
}

function loadDailyFact() {
  const factElement = document.getElementById("daily-fact-text");
  if (factElement) {
    const randomFact =
      anatomyFacts[Math.floor(Math.random() * anatomyFacts.length)];
    factElement.innerText = randomFact;
  }
}

function loadTopics(key) {
  state.currentSubcourseKey = key;
  const data = anatomyData[key];

  selectedSubcourseTitle.innerText = data.title;
  topicList.innerHTML = "";

  data.modules.forEach((moduleName, index) => {
    const item = document.createElement("div");
    item.className = "topic-item";
    item.innerHTML = `
            <span>${moduleName}</span>
            <span class="arrow">Start →</span>
        `;

    item.addEventListener("click", () => {
      startQuiz(index, moduleName);
    });

    topicList.appendChild(item);
  });

  switchView("view-topics");
}

// ==========================================
// 6. QUIZ LOGIC
// ==========================================

function startQuiz(moduleIndex, moduleName) {
  // 1. Reset State
  state.currentModuleIndex = moduleIndex;
  state.currentModuleName = moduleName;
  state.currentIndex = 0;
  state.score = 0;
  state.isAnswered = false;
  state.isTimerPaused = false;

  if (btnPauseTimer) btnPauseTimer.innerText = "⏸️ Pause";
  if (quizTimer) quizTimer.classList.remove("danger");

  // 2. Get Questions from Question Bank
  const subcourseKey = state.currentSubcourseKey;

  if (subcourseKey === "general-anatomy") {
    state.questions = generateGeneralAnatomyQuiz();
    // Convert to per-option format for unique explanations
    state.questions = convertToPerOptionFormat(state.questions);
  } else {
    // Check if questions exist for this specific module
    if (
      questionBank[subcourseKey] &&
      questionBank[subcourseKey][moduleName] &&
      questionBank[subcourseKey][moduleName].length > 0
    ) {
      state.questions = questionBank[subcourseKey][moduleName];
    } else {
      // Fallback if no questions are added yet (prevents crashing)
      alert(
        "Questions for this module are coming soon! Loading demo placeholder...",
      );
      state.questions = generateFallbackQuestions(moduleName);
    }
    state.questions = convertToPerOptionFormat(state.questions);
  }

  // 2.5 Clear previous user answers (if retrying module)
  state.questions.forEach((q) => {
    delete q.userAnswer;
    delete q.isCorrect;
  });

  // 2.6 Timer Logic: Suggests 1 minute (60 seconds) per question
  clearInterval(state.timerInterval);
  state.timeRemaining = state.questions.length * 60;
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    if (!state.isTimerPaused) {
      state.timeRemaining--;
      updateTimerDisplay();
      if (state.timeRemaining <= 0) {
        clearInterval(state.timerInterval);
        alert("Time is up! Submitting your quiz...");
        showResults();
      }
    }
  }, 1000);

  // 3. Update UI Headers
  quizTopicTitle.innerText = moduleName;

  // 4. Show First Question
  switchView("view-quiz");
  renderQuestion();
}

function updateTimerDisplay() {
  if (!quizTimer) return;
  const minutes = Math.floor(state.timeRemaining / 60);
  const seconds = state.timeRemaining % 60;
  quizTimer.innerText = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  // Apply blink/red effect if 3 minutes (180 seconds) or less remaining
  if (state.timeRemaining <= 180 && state.timeRemaining > 0) {
    quizTimer.classList.add("danger");
  } else {
    quizTimer.classList.remove("danger");
  }
}

function generateGeneralAnatomyQuiz(count = 30) {
  const allQuestions = [];
  // Iterate over all subcourses in the question bank
  for (const subcourseKey in questionBank) {
    const modules = questionBank[subcourseKey];
    // Iterate over all modules in the subcourse
    for (const moduleName in modules) {
      const questions = modules[moduleName];
      // Add all questions from the module to our collection
      allQuestions.push(...questions);
    }
  }

  // Shuffle the collected questions
  for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
  }

  // Return a slice of the specified count
  return allQuestions.slice(0, count);
}

// Helper to keep the app running if you haven't filled a module yet
function generateFallbackQuestions(moduleName) {
  return [
    {
      text: `This is a placeholder. Please add questions for '${moduleName}' in script.js`,
      options: [
        {
          text: "Option A",
          explanation: "This is the specific explanation for Option A.",
        },
        {
          text: "Option B",
          explanation: "This is the specific explanation for Option B.",
        },
        {
          text: "Option C",
          explanation: "This is the specific explanation for Option C.",
        },
        {
          text: "Option D",
          explanation: "This is the specific explanation for Option D.",
        },
      ],
      correct: 0,
    },
  ];
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];

  // Ensure unpaused when rendering new questions
  state.isTimerPaused = false;
  if (btnPauseTimer) btnPauseTimer.innerText = "⏸️ Pause";
  optionsContainer.classList.remove("hidden");
  if (questionText.dataset.originalText) {
    questionText.innerText = questionText.dataset.originalText;
  }

  // Update Progress
  quizProgress.innerText = `Question ${state.currentIndex + 1} of ${state.questions.length}`;
  const percent = (state.currentIndex / state.questions.length) * 100;
  progressBarFill.style.width = `${percent}%`;

  // Update Text
  questionText.innerText = question.text;

  // Render Options
  optionsContainer.innerHTML = "";
  console.log("Rendering question options:", question.options);
  question.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    // Handle both new format (objects with text property) and old format (strings)
    btn.innerText = typeof opt === "string" ? opt : opt.text;
    console.log(`Option ${index}:`, opt, "Text:", btn.innerText);

    // Store the explanation as a data attribute for later use
    if (typeof opt === "object" && opt.explanation) {
      btn.setAttribute("data-explanation", opt.explanation);
      console.log(`Option ${index}: Set explanation:`, opt.explanation);
    } else {
      console.log(`Option ${index}: No explanation found`);
    }
    btn.addEventListener("click", () => handleAnswer(index, btn));
    optionsContainer.appendChild(btn);
  });

  // Handle Previous Button visibility
  if (state.currentIndex > 0) {
    btnPrev.classList.remove("hidden");
  } else {
    btnPrev.classList.add("hidden");
  }

  //Render multimedia, if any

  multimediaContainer.innerHTML = "";
  if (question.multimedia) {
    const imgElement = document.createElement("img");
    imgElement.src = question.multimedia;
    imgElement.alt = "Related Diagram";
    multimediaContainer.appendChild(imgElement);
    multimediaContainer.classList.remove("hidden");
  } else {
    multimediaContainer.classList.add("hidden");
  }

  // Check if user already answered this question previously
  if (question.userAnswer !== undefined) {
    state.isAnswered = true;
    const allOptions = optionsContainer.querySelectorAll(".option-btn");
    allOptions.forEach((btn) => (btn.disabled = true));

    const selectedBtn = allOptions[question.userAnswer];
    const optionExplanation =
      selectedBtn.getAttribute("data-explanation") ||
      "Review the course material.";

    if (question.isCorrect) {
      selectedBtn.classList.add("correct");
      document.getElementById("feedback-text").innerHTML = optionExplanation;
      showFeedback(true, "Correct!");
    } else {
      selectedBtn.classList.add("wrong");
      allOptions[question.correct].classList.add("correct");

      const correctExplanation =
        allOptions[question.correct].getAttribute("data-explanation") ||
        "Review the course material.";
      document.getElementById("feedback-text").innerHTML = `
        <div style="margin-bottom: 10px;">${optionExplanation}</div>
        <div style="padding-top: 10px; border-top: 1px solid #e2e8f0;">
          <strong>Correct Answer Explanation:</strong> ${correctExplanation}
        </div>
      `;
      showFeedback(false, "Incorrect");
    }
  } else {
    state.isAnswered = false;
    feedbackContainer.classList.add("hidden");
    feedbackContainer.classList.remove("success", "error");
  }
}

function handleAnswer(selectedIndex, btnElement) {
  if (state.isAnswered) return;
  state.isAnswered = true;

  const question = state.questions[state.currentIndex];
  const isCorrect = selectedIndex === question.correct;

  // Save user's selection to state
  question.userAnswer = selectedIndex;
  question.isCorrect = isCorrect;

  const allOptions = optionsContainer.querySelectorAll(".option-btn");
  allOptions.forEach((btn) => (btn.disabled = true));

  // Get the explanation specific to the selected option
  const optionExplanation =
    btnElement.getAttribute("data-explanation") ||
    "Review the course material.";

  if (isCorrect) {
    btnElement.classList.add("correct");
    document.getElementById("feedback-text").innerHTML = optionExplanation;
    showFeedback(true, "Correct!");
  } else {
    btnElement.classList.add("wrong");
    // Highlight correct
    allOptions[question.correct].classList.add("correct");

    // Get correct explanation to show alongside the wrong option explanation
    const correctExplanation =
      allOptions[question.correct].getAttribute("data-explanation") ||
      "Review the course material.";
    document.getElementById("feedback-text").innerHTML = `
      <div style="margin-bottom: 10px;">${optionExplanation}</div>
      <div style="padding-top: 10px; border-top: 1px solid #e2e8f0;">
        <strong>Correct Answer Explanation:</strong> ${correctExplanation}
      </div>
    `;
    showFeedback(false, "Incorrect");
  }
}

function showFeedback(isSuccess, title) {
  feedbackContainer.classList.remove("hidden");
  feedbackContainer.classList.add(isSuccess ? "success" : "error");
  feedbackTitle.innerText = title;
  console.log(state.currentIndex, state.questions.length);

  if (state.currentIndex === state.questions.length - 1) {
    btnNext.innerText = "Finish Quiz"; //Change the button to finish
  } else {
    btnNext.innerText = "Next Question";
  }
}

if (btnPauseTimer) {
  btnPauseTimer.addEventListener("click", () => {
    state.isTimerPaused = !state.isTimerPaused;
    if (state.isTimerPaused) {
      btnPauseTimer.innerText = "▶️ Resume";
      optionsContainer.classList.add("hidden");
      questionText.dataset.originalText = questionText.innerText;
      questionText.innerText = "⏸️ Quiz Paused";

      if (!multimediaContainer.classList.contains("hidden")) {
        multimediaContainer.dataset.paused = "true";
        multimediaContainer.classList.add("hidden");
      }
      if (!feedbackContainer.classList.contains("hidden")) {
        feedbackContainer.dataset.paused = "true";
        feedbackContainer.classList.add("hidden");
      }
      if (!btnPrev.classList.contains("hidden")) {
        btnPrev.dataset.paused = "true";
        btnPrev.classList.add("hidden");
      }
    } else {
      btnPauseTimer.innerText = "⏸️ Pause";
      optionsContainer.classList.remove("hidden");
      if (questionText.dataset.originalText)
        questionText.innerText = questionText.dataset.originalText;

      if (multimediaContainer.dataset.paused === "true") {
        multimediaContainer.classList.remove("hidden");
      }
      if (feedbackContainer.dataset.paused === "true") {
        feedbackContainer.classList.remove("hidden");
      }
      if (btnPrev.dataset.paused === "true") {
        btnPrev.classList.remove("hidden");
      }
    }
  });
}

btnNext.addEventListener("click", () => {
  if (state.currentIndex < state.questions.length - 1) {
    state.currentIndex++;
    renderQuestion();
  } else {
    showResults();
  }
});

btnPrev.addEventListener("click", () => {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    renderQuestion();
  }
});

// ==========================================
// 7. RESULTS LOGIC
// ==========================================

function showResults() {
  clearInterval(state.timerInterval); // Stop timer
  quizTimer.classList.remove("danger"); // Remove blinking effect

  // Accurately calculate score based on saved answers (prevents double-counting if they go back)
  state.score = state.questions.filter((q) => q.isCorrect === true).length;

  const total = state.questions.length;
  const percentage = Math.round((state.score / total) * 100);
  scorePercentage.innerText = `${percentage}%`;
  scoreText.innerText = `You scored ${state.score} out of ${total}`; //You scored 16 out of 20

  // Save the score to localStorage
  const lastScoreData = {
    score: state.score,
    total: total,
    percentage: percentage,
    moduleName: state.currentModuleName,
    subcourseKey: state.currentSubcourseKey,
    moduleIndex: state.currentModuleIndex,
  };
  localStorage.setItem("lastQuizScore", JSON.stringify(lastScoreData));

  if (percentage >= 80) {
    resultMessage.innerText = "Excellent work! You have mastered this module.";
  } else if (percentage >= 50) {
    resultMessage.innerText =
      "Good job! A little more review and you'll be perfect.";
  } else {
    resultMessage.innerText =
      "Keep studying! Review the anatomy and try again.";
  }

  switchView("view-results");
}

// ==========================================
// 8. EVENT LISTENERS
// ==========================================

btnBackHome.addEventListener("click", () => switchView("view-subcourses"));

btnRetry.addEventListener("click", () => {
  // Restart with same module
  const moduleName =
    anatomyData[state.currentSubcourseKey].modules[state.currentModuleIndex];
  startQuiz(state.currentModuleIndex, moduleName);
});

btnBackTopics.addEventListener("click", () => switchView("view-topics"));
btnHome.addEventListener("click", () => switchView("view-subcourses"));
btnQuizHome.addEventListener("click", () => switchView("view-subcourses"));

const feedbackForm = document.getElementById("feedback-form");
if (feedbackForm) {
  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("feedback-name").value || "Student";
    const message = document.getElementById("feedback-message").value;
    if (message.trim()) {
      window.open(
        `mailto:otochris204@gmail.com?subject=GradeLift Feedback from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`,
        "_blank",
      );
      alert("Opening your email client to send the feedback...");
      feedbackForm.reset();
    }
  });
}

// ==========================================
// 9. THEME TOGGLE
// ==========================================
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Check local storage
if (localStorage.getItem("theme") === "dark") {
  html.setAttribute("data-theme", "dark");
  themeToggle.innerText = "☀️";
}

themeToggle.addEventListener("click", () => {
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  localStorage.setItem("theme", isDark ? "light" : "dark");
  themeToggle.innerText = isDark ? "🌙" : "☀️";
});

// Start App
init();

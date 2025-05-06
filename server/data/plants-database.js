/**
 * Local plants database with pet toxicity information
 * This eliminates the need for external APIs
 */

const plantsDatabase = [
  // Houseplants
  {
    id: 1,
    common_name: "monstera",
    scientific_name: ["Monstera deliciosa"],
    default_image: {
      thumbnail: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera_variant_medium_grant_cream_720x.jpg"
    },
    sunlight: ["part sun", "part shade"],
    watering: "Average",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Mild to Moderate",
        symptoms: ["Oral irritation", "Intense burning of mouth", "Excessive drooling", "Vomiting", "Difficulty swallowing"],
        notes: "Contains insoluble calcium oxalates that can cause irritation."
      },
      dogToxicity: {
        severity: "Mild to Moderate",
        symptoms: ["Oral irritation", "Intense burning of mouth", "Excessive drooling", "Vomiting", "Difficulty swallowing"],
        notes: "Contains insoluble calcium oxalates that can cause irritation."
      }
    }
  },
  {
    id: 2,
    common_name: "fiddle leaf fig",
    scientific_name: ["Ficus lyrata"],
    default_image: {
      thumbnail: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_fiddle-leaf-fig_variant_small_grant_terracotta_720x.jpg"
    },
    sunlight: ["full sun", "part sun"],
    watering: "Average",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Mild to Moderate",
        symptoms: ["Mouth irritation", "Excessive drooling", "Vomiting"],
        notes: "Contains irritant sap that can cause digestive issues."
      },
      dogToxicity: {
        severity: "Mild to Moderate",
        symptoms: ["Mouth irritation", "Excessive drooling", "Vomiting"],
        notes: "Contains irritant sap that can cause digestive issues."
      }
    }
  },
  {
    id: 3,
    common_name: "snake plant",
    scientific_name: ["Sansevieria trifasciata"],
    default_image: {
      thumbnail: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_variant_small_grant_terracotta_720x.jpg"
    },
    sunlight: ["low light", "part sun", "full sun"],
    watering: "Minimum",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Mild",
        symptoms: ["Nausea", "Vomiting", "Diarrhea"],
        notes: "Contains saponins that can cause gastrointestinal upset."
      },
      dogToxicity: {
        severity: "Mild",
        symptoms: ["Nausea", "Vomiting", "Diarrhea"],
        notes: "Contains saponins that can cause gastrointestinal upset."
      }
    }
  },
  {
    id: 4,
    common_name: "zz plant",
    scientific_name: ["Zamioculcas zamiifolia"],
    default_image: {
      thumbnail: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_ZZ-plant_variant_medium_grant_cream_720x.jpg"
    },
    sunlight: ["low light", "part sun"],
    watering: "Minimum",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Mild",
        symptoms: ["Vomiting", "Diarrhea", "Drooling"],
        notes: "Contains calcium oxalates that cause irritation."
      },
      dogToxicity: {
        severity: "Mild",
        symptoms: ["Vomiting", "Diarrhea", "Drooling"],
        notes: "Contains calcium oxalates that cause irritation."
      }
    }
  },
  {
    id: 5,
    common_name: "pothos",
    scientific_name: ["Epipremnum aureum"],
    default_image: {
      thumbnail: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_pothos_variant_small_hyde_black_720x.jpg"
    },
    sunlight: ["low light", "part sun"],
    watering: "Average",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Moderate",
        symptoms: ["Oral irritation", "Drooling", "Vomiting", "Swelling of mouth and tongue"],
        notes: "Contains insoluble calcium oxalate crystals."
      },
      dogToxicity: {
        severity: "Moderate",
        symptoms: ["Oral irritation", "Drooling", "Vomiting", "Swelling of mouth and tongue"],
        notes: "Contains insoluble calcium oxalate crystals."
      }
    }
  },
  {
    id: 6,
    common_name: "jade plant",
    scientific_name: ["Crassula ovata"],
    default_image: {
      thumbnail: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_jade_variant_small_hyde_black_720x.jpg"
    },
    sunlight: ["full sun"],
    watering: "Minimum",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Mild",
        symptoms: ["Vomiting", "Depression", "Incoordination"],
        notes: "Mildly toxic, can cause digestive upset."
      },
      dogToxicity: {
        severity: "Mild",
        symptoms: ["Vomiting", "Depression", "Incoordination"],
        notes: "Mildly toxic, can cause digestive upset."
      }
    }
  },
  {
    id: 7,
    common_name: "aloe vera",
    scientific_name: ["Aloe vera"],
    default_image: {
      thumbnail: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_aloe-vera_variant_small_grow-pot_none_720x.jpg"
    },
    sunlight: ["full sun", "part sun"],
    watering: "Minimum",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Moderate",
        symptoms: ["Vomiting", "Diarrhea", "Lethargy", "Depression", "Tremors", "Anorexia"],
        notes: "Contains anthraquinones and glycosides."
      },
      dogToxicity: {
        severity: "Moderate",
        symptoms: ["Vomiting", "Diarrhea", "Lethargy", "Depression", "Tremors", "Anorexia"],
        notes: "Contains anthraquinones and glycosides."
      }
    }
  },
  {
    id: 8,
    common_name: "peace lily",
    scientific_name: ["Spathiphyllum"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Spathiphyllum_Wallisii_-_Peace_Lily_Plant_at_Wayanad_%282%29.jpg/640px-Spathiphyllum_Wallisii_-_Peace_Lily_Plant_at_Wayanad_%282%29.jpg"
    },
    sunlight: ["low light", "part shade"],
    watering: "Average",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Moderate",
        symptoms: ["Oral irritation", "Intense burning of mouth", "Excessive drooling", "Vomiting", "Difficulty swallowing"],
        notes: "Contains insoluble calcium oxalates."
      },
      dogToxicity: {
        severity: "Moderate",
        symptoms: ["Oral irritation", "Intense burning of mouth", "Excessive drooling", "Vomiting", "Difficulty swallowing"],
        notes: "Contains insoluble calcium oxalates."
      }
    }
  },
  {
    id: 9,
    common_name: "boston fern",
    scientific_name: ["Nephrolepis exaltata"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nephrolepis_exaltata_subsp._hawaiiensis_%285311112673%29.jpg/640px-Nephrolepis_exaltata_subsp._hawaiiensis_%285311112673%29.jpg"
    },
    sunlight: ["part shade", "part sun"],
    watering: "Frequent",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false
    }
  },
  {
    id: 10,
    common_name: "spider plant",
    scientific_name: ["Chlorophytum comosum"],
    default_image: {
      thumbnail: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_spider-plant_variant_small_grow-pot_none_720x.jpg"
    },
    sunlight: ["part sun", "part shade"],
    watering: "Average",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false
    }
  },
  {
    id: 11,
    common_name: "calathea",
    scientific_name: ["Calathea", "Goeppertia"],
    default_image: {
      thumbnail: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_calathea-medallion_variant_small_grant_cream_720x.jpg"
    },
    sunlight: ["part shade", "low light"],
    watering: "Average",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false
    }
  },
  {
    id: 12,
    common_name: "prayer plant",
    scientific_name: ["Maranta leuconeura"],
    default_image: {
      thumbnail: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_maranta_variant_small_grant_terracotta_720x.jpg"
    },
    sunlight: ["part shade", "low light"],
    watering: "Average",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false
    }
  },
  {
    id: 13,
    common_name: "money tree",
    scientific_name: ["Pachira aquatica"],
    default_image: {
      thumbnail: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_money-tree_variant_small_hyde_cream_720x.jpg"
    },
    sunlight: ["part sun", "part shade"],
    watering: "Average",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false
    }
  },
  {
    id: 14,
    common_name: "string of pearls",
    scientific_name: ["Curio rowleyanus", "Senecio rowleyanus"],
    default_image: {
      thumbnail: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_string-of-pearls_variant_small_ezra_blush_720x.jpg"
    },
    sunlight: ["full sun", "part sun"],
    watering: "Minimum",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Mild to Moderate",
        symptoms: ["Vomiting", "Diarrhea", "Drooling", "Lethargy"],
        notes: "Contains compounds that can cause gastrointestinal upset."
      },
      dogToxicity: {
        severity: "Mild to Moderate",
        symptoms: ["Vomiting", "Diarrhea", "Drooling", "Lethargy"],
        notes: "Contains compounds that can cause gastrointestinal upset."
      }
    }
  },
  {
    id: 15,
    common_name: "rubber plant",
    scientific_name: ["Ficus elastica"],
    default_image: {
      thumbnail: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_rubber-tree_variant_medium_grant_cream_720x.jpg"
    },
    sunlight: ["part sun", "part shade"],
    watering: "Average",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Mild",
        symptoms: ["Oral irritation", "Drooling", "Vomiting"],
        notes: "Contains irritant sap that can cause digestive issues."
      },
      dogToxicity: {
        severity: "Mild", 
        symptoms: ["Oral irritation", "Drooling", "Vomiting"],
        notes: "Contains irritant sap that can cause digestive issues."
      }
    }
  },
  {
    id: 16,
    common_name: "rose",
    scientific_name: ["Rosa"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Rosa_rubiginosa_1.jpg/640px-Rosa_rubiginosa_1.jpg"
    },
    sunlight: ["full sun"],
    watering: "Average",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false,
      notes: "While roses themselves are not toxic, be cautious of thorns which can cause physical injury. Also, roses treated with pesticides could be harmful."
    }
  },
  {
    id: 17,
    common_name: "tulip",
    scientific_name: ["Tulipa"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tulip_-_floriade_canberra.jpg/640px-Tulip_-_floriade_canberra.jpg"
    },
    sunlight: ["full sun", "part sun"],
    watering: "Average",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Moderate",
        symptoms: ["Vomiting", "Depression", "Diarrhea", "Hypersalivation", "Loss of appetite"],
        notes: "The bulbs contain tulipalin A and B, which are toxic. Most toxic part is the bulb."
      },
      dogToxicity: {
        severity: "Moderate",
        symptoms: ["Vomiting", "Depression", "Diarrhea", "Hypersalivation", "Loss of appetite"],
        notes: "The bulbs contain tulipalin A and B, which are toxic. Most toxic part is the bulb."
      }
    }
  },
  {
    id: 18,
    common_name: "daffodil",
    scientific_name: ["Narcissus"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Narcissus_%27Dutch_Master%27_Flower_2400px.jpg/640px-Narcissus_%27Dutch_Master%27_Flower_2400px.jpg"
    },
    sunlight: ["full sun", "part sun"],
    watering: "Average",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Moderate to Severe",
        symptoms: ["Vomiting", "Diarrhea", "Abdominal pain", "Cardiac arrhythmias", "Respiratory depression", "Convulsions"],
        notes: "Contains lycorine and other alkaloids. Bulbs are the most toxic part."
      },
      dogToxicity: {
        severity: "Moderate to Severe",
        symptoms: ["Vomiting", "Diarrhea", "Abdominal pain", "Cardiac arrhythmias", "Respiratory depression", "Convulsions"],
        notes: "Contains lycorine and other alkaloids. Bulbs are the most toxic part."
      }
    }
  },
  {
    id: 19,
    common_name: "lily",
    scientific_name: ["Lilium"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Red_Mountain_Lily.jpg/640px-Red_Mountain_Lily.jpg"
    },
    sunlight: ["full sun", "part sun"],
    watering: "Average",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: false,
      catToxicity: {
        severity: "Severe",
        symptoms: ["Vomiting", "Lethargy", "Loss of appetite", "Kidney failure", "Death"],
        notes: "Extremely toxic to cats. All parts of the plant are toxic. Even small ingestions can cause severe kidney failure."
      }
    }
  },
  {
    id: 20,
    common_name: "philodendron",
    scientific_name: ["Philodendron"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Heartleaf_Philodendron_South_Garden_Auckland_Domain.jpg/640px-Heartleaf_Philodendron_South_Garden_Auckland_Domain.jpg"
    },
    sunlight: ["part shade", "part sun", "low light"],
    watering: "Average",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Moderate",
        symptoms: ["Oral irritation", "Intense burning of mouth", "Excessive drooling", "Vomiting", "Difficulty swallowing"],
        notes: "Contains insoluble calcium oxalate crystals."
      },
      dogToxicity: {
        severity: "Moderate",
        symptoms: ["Oral irritation", "Intense burning of mouth", "Excessive drooling", "Vomiting", "Difficulty swallowing"],
        notes: "Contains insoluble calcium oxalate crystals."
      }
    }
  },
  {
    id: 21,
    common_name: "african violet",
    scientific_name: ["Saintpaulia"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Saintpaulia_African_Violet.jpg/640px-Saintpaulia_African_Violet.jpg"
    },
    sunlight: ["part shade", "low light"],
    watering: "Average",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false
    }
  },
  {
    id: 22,
    common_name: "orchid",
    scientific_name: ["Orchidaceae"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Cypripedium_calceolus_2.jpg/640px-Cypripedium_calceolus_2.jpg"
    },
    sunlight: ["part shade", "part sun"],
    watering: "Average",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false
    }
  },
  {
    id: 23,
    common_name: "basil",
    scientific_name: ["Ocimum basilicum"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Basil-Basilico-Ocimum_basilicum-albahaca.jpg/640px-Basil-Basilico-Ocimum_basilicum-albahaca.jpg"
    },
    sunlight: ["full sun", "part sun"],
    watering: "Average",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false
    }
  },
  {
    id: 24,
    common_name: "mint",
    scientific_name: ["Mentha"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mint_leaves_25.jpg/640px-Mint_leaves_25.jpg"
    },
    sunlight: ["part sun", "part shade"],
    watering: "Average",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false,
      notes: "While not toxic, excessive consumption may cause gastrointestinal upset in some pets."
    }
  },
  {
    id: 25,
    common_name: "lavender",
    scientific_name: ["Lavandula"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lavender_field.jpg/640px-Lavender_field.jpg"
    },
    sunlight: ["full sun"],
    watering: "Minimum",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false,
      notes: "While not considered highly toxic, the oils in lavender can cause gastrointestinal upset if consumed in large quantities."
    }
  },
  {
    id: 26,
    common_name: "poinsettia",
    scientific_name: ["Euphorbia pulcherrima"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Poinsettia_2.jpg/640px-Poinsettia_2.jpg"
    },
    sunlight: ["part sun", "part shade"],
    watering: "Average",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Mild",
        symptoms: ["Drooling", "Licking lips", "Vomiting", "Diarrhea", "Skin irritation"],
        notes: "Contains a milky sap that can cause irritation. Contrary to popular belief, poinsettias are not severely toxic but can cause mild discomfort."
      },
      dogToxicity: {
        severity: "Mild",
        symptoms: ["Drooling", "Licking lips", "Vomiting", "Diarrhea", "Skin irritation"],
        notes: "Contains a milky sap that can cause irritation. Contrary to popular belief, poinsettias are not severely toxic but can cause mild discomfort."
      }
    }
  },
  {
    id: 27,
    common_name: "bamboo palm",
    scientific_name: ["Chamaedorea seifrizii"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Parlour_palm.jpg/640px-Parlour_palm.jpg"
    },
    sunlight: ["part shade", "low light"],
    watering: "Average",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false
    }
  },
  {
    id: 28,
    common_name: "majesty palm",
    scientific_name: ["Ravenea rivularis"],
    default_image: {
      thumbnail: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_majesty-palm_variant_small_grant_terracotta_720x.jpg"
    },
    sunlight: ["part sun", "part shade"],
    watering: "Average",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false
    }
  },
  {
    id: 29,
    common_name: "zebra plant",
    scientific_name: ["Aphelandra squarrosa"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Aphelandra_squarrosa_%28Acanthaceae%29_plant.jpg/640px-Aphelandra_squarrosa_%28Acanthaceae%29_plant.jpg"
    },
    sunlight: ["part shade", "low light"],
    watering: "Average",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false
    }
  },
  {
    id: 30,
    common_name: "succulents",
    scientific_name: ["Various"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Echeveria_pulidonis.jpg/640px-Echeveria_pulidonis.jpg"
    },
    sunlight: ["full sun", "part sun"],
    watering: "Minimum",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Varies by species",
        symptoms: ["Vomiting", "Diarrhea", "Lethargy", "Loss of appetite"],
        notes: "Toxicity varies widely among succulent species. Some, like Echeveria, are generally considered non-toxic, while others, like Euphorbia, can be toxic."
      },
      dogToxicity: {
        severity: "Varies by species",
        symptoms: ["Vomiting", "Diarrhea", "Lethargy", "Loss of appetite"],
        notes: "Toxicity varies widely among succulent species. Some, like Echeveria, are generally considered non-toxic, while others, like Euphorbia, can be toxic."
      }
    }
  },
  {
    id: 31,
    common_name: "bird of paradise",
    scientific_name: ["Strelitzia reginae"],
    default_image: {
      thumbnail: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_bird-of-paradise_variant_medium_grant_cream_720x.jpg"
    },
    sunlight: ["full sun", "part sun"],
    watering: "Average",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Mild to Moderate",
        symptoms: ["Nausea", "Vomiting", "Drowsiness"],
        notes: "Contains HCN (hydrogen cyanide) which can cause gastrointestinal upset."
      },
      dogToxicity: {
        severity: "Mild to Moderate",
        symptoms: ["Nausea", "Vomiting", "Drowsiness"],
        notes: "Contains HCN (hydrogen cyanide) which can cause gastrointestinal upset."
      }
    }
  },
  {
    id: 32,
    common_name: "amaryllis",
    scientific_name: ["Hippeastrum"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Hippeastrum_sp._blossom_-_panoramio_%281%29.jpg/640px-Hippeastrum_sp._blossom_-_panoramio_%281%29.jpg"
    },
    sunlight: ["full sun", "part sun"],
    watering: "Average",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Moderate",
        symptoms: ["Vomiting", "Depression", "Diarrhea", "Abdominal pain", "Hypersalivation", "Anorexia"],
        notes: "Contains lycorine and other phenanthridine alkaloids. The bulb is the most toxic part."
      },
      dogToxicity: {
        severity: "Moderate",
        symptoms: ["Vomiting", "Depression", "Diarrhea", "Abdominal pain", "Hypersalivation", "Anorexia"],
        notes: "Contains lycorine and other phenanthridine alkaloids. The bulb is the most toxic part."
      }
    }
  },
  {
    id: 33,
    common_name: "chinese evergreen",
    scientific_name: ["Aglaonema"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Starr_070906-8498_Aglaonema_commutatum.jpg/640px-Starr_070906-8498_Aglaonema_commutatum.jpg"
    },
    sunlight: ["low light", "part shade"],
    watering: "Average",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Mild to Moderate",
        symptoms: ["Oral irritation", "Intense burning of mouth", "Excessive drooling", "Vomiting", "Difficulty swallowing"],
        notes: "Contains insoluble calcium oxalate crystals."
      },
      dogToxicity: {
        severity: "Mild to Moderate",
        symptoms: ["Oral irritation", "Intense burning of mouth", "Excessive drooling", "Vomiting", "Difficulty swallowing"],
        notes: "Contains insoluble calcium oxalate crystals."
      }
    }
  },
  {
    id: 34,
    common_name: "areca palm",
    scientific_name: ["Dypsis lutescens"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Chrysalidocarpus_lutescens_02.jpg/640px-Chrysalidocarpus_lutescens_02.jpg"
    },
    sunlight: ["part sun", "part shade"],
    watering: "Average",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false
    }
  },
  {
    id: 35,
    common_name: "christmas cactus",
    scientific_name: ["Schlumbergera"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Schlumbergera_Gold_Charm.jpg/640px-Schlumbergera_Gold_Charm.jpg"
    },
    sunlight: ["part shade", "part sun"],
    watering: "Minimum",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false
    }
  },
  {
    id: 36,
    common_name: "begonia",
    scientific_name: ["Begonia"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Begonia_%C3%97_tuberhybrida_Red_03.jpg/640px-Begonia_%C3%97_tuberhybrida_Red_03.jpg"
    },
    sunlight: ["part shade", "part sun"],
    watering: "Average",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Mild to Moderate",
        symptoms: ["Vomiting", "Salivation", "Kidney failure (with large amounts)"],
        notes: "Contains soluble calcium oxalates and potentially other compounds."
      },
      dogToxicity: {
        severity: "Mild to Moderate",
        symptoms: ["Vomiting", "Salivation", "Kidney failure (with large amounts)"],
        notes: "Contains soluble calcium oxalates and potentially other compounds."
      }
    }
  },
  {
    id: 37,
    common_name: "sunflower",
    scientific_name: ["Helianthus annuus"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/A_sunflower.jpg/640px-A_sunflower.jpg"
    },
    sunlight: ["full sun"],
    watering: "Average",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false
    }
  },
  {
    id: 38,
    common_name: "peony",
    scientific_name: ["Paeonia"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Paeonia_californica.jpg/640px-Paeonia_californica.jpg"
    },
    sunlight: ["full sun", "part sun"],
    watering: "Average",
    toxicity: {
      isToxicToCats: true,
      isToxicToDogs: true,
      catToxicity: {
        severity: "Mild",
        symptoms: ["Vomiting", "Diarrhea"],
        notes: "Contains paeonol and paeoniflorin, which can cause gastrointestinal upset if ingested."
      },
      dogToxicity: {
        severity: "Mild",
        symptoms: ["Vomiting", "Diarrhea"],
        notes: "Contains paeonol and paeoniflorin, which can cause gastrointestinal upset if ingested."
      }
    }
  },
  {
    id: 39,
    common_name: "daisy",
    scientific_name: ["Bellis perennis", "Leucanthemum"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg/640px-Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg"
    },
    sunlight: ["full sun", "part sun"],
    watering: "Average",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false,
      notes: "Generally considered non-toxic, though large quantities might cause mild gastrointestinal upset."
    }
  },
  {
    id: 40,
    common_name: "fern",
    scientific_name: ["Various fern species"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Athyrium_filix-femina_01.jpg/640px-Athyrium_filix-femina_01.jpg"
    },
    sunlight: ["part shade", "part sun"],
    watering: "Average to Frequent",
    toxicity: {
      isToxicToCats: false,
      isToxicToDogs: false,
      notes: "Most common ferns are non-toxic to cats and dogs. However, some specific species may cause mild irritation."
    }
  }
];

module.exports = plantsDatabase;

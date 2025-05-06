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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Ficus_lyrata.jpg/640px-Ficus_lyrata.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Zamioculcas_zamiifolia_1.jpg/640px-Zamioculcas_zamiifolia_1.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Epipremnum_aureum_in_West_Bengal%2C_India.jpg/640px-Epipremnum_aureum_in_West_Bengal%2C_India.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Crassula_ovata_fleurs_FR_2013.jpg/640px-Crassula_ovata_fleurs_FR_2013.jpg"
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
    common_name: "Aloe",
    scientific_name: ["Aloe vera"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/S%C3%A1bila_junto_a_sus_hijos..jpg/640px-S%C3%A1bila_junto_a_sus_hijos..jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Chlorophytum_comosum_%28cropped%29.jpg/640px-Chlorophytum_comosum_%28cropped%29.jpg"
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
    common_name: ["Calathea", "Zebra Plant"],
    scientific_name: ["Calathea", "Goeppertia"],
    default_image: {
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Zebra_Plant_%28Calathea_Zebrina%29.jpg/640px-Zebra_Plant_%28Calathea_Zebrina%29.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Maranta_leuconeura3.jpg/640px-Maranta_leuconeura3.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pachira_aquatica_19zz.jpg/640px-Pachira_aquatica_19zz.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/String_of_Beads_%28Senecio_rowleyanus%29_%283424158397%29.jpg/640px-String_of_Beads_%28Senecio_rowleyanus%29_%283424158397%29.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Rubber_Plant_%28Ficus_elastica_%27Robusta%27%29.jpg/640px-Rubber_Plant_%28Ficus_elastica_%27Robusta%27%29.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Tulipa_suaveolens_floriade_to_Canberra.jpg/640px-Tulipa_suaveolens_floriade_to_Canberra.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Narcissus_flowers.jpg/640px-Narcissus_flowers.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Stargazer_Lillies_Lillium_orientale_%27Stargazer%27_Flower_2000px.jpg/640px-Stargazer_Lillies_Lillium_orientale_%27Stargazer%27_Flower_2000px.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Philodendron_lacerum2.jpg/640px-Philodendron_lacerum2.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Saintpaulia_ionantha.jpg/640px-Saintpaulia_ionantha.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Orchidaceae_flowers_-_magenta_colour.jpg/640px-Orchidaceae_flowers_-_magenta_colour.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ocimum_basilicum_CG_NBG_LR.jpg/640px-Ocimum_basilicum_CG_NBG_LR.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Mentha_sp.001_-_A_Pobra_do_Carami%C3%B1al.JPG/640px-Mentha_sp.001_-_A_Pobra_do_Carami%C3%B1al.JPG"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Single_lavender_flower02.jpg/640px-Single_lavender_flower02.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Euphorbia_pulcherrima_in_Bangladesh_03.jpg/640px-Euphorbia_pulcherrima_in_Bangladesh_03.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Starr-110209-0679-Rhapis_excelsa-habit-Resort_Management_Group_Nursery_Kihei-Maui_%2824956198712%29.jpg/640px-Starr-110209-0679-Rhapis_excelsa-habit-Resort_Management_Group_Nursery_Kihei-Maui_%2824956198712%29.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ravenea_rivularis_as_a_houseplant.jpg/640px-Ravenea_rivularis_as_a_houseplant.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Zebra_Plant_%28Aphelandra_squarrosa%29_2.jpg/640px-Zebra_Plant_%28Aphelandra_squarrosa%29_2.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Succulent_Plant%2C_Kew_Gardens_-_geograph.org.uk_-_3194484.jpg/640px-Succulent_Plant%2C_Kew_Gardens_-_geograph.org.uk_-_3194484.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Strelitzia_reginae-111412.jpg/640px-Strelitzia_reginae-111412.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Amaryllis_--_2024_--_9913.jpg/640px-Amaryllis_--_2024_--_9913.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Konya_Kelebekler_Vadisi_Aglaonema.jpg/640px-Konya_Kelebekler_Vadisi_Aglaonema.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Dypsis_lutescens_%28Chrysalidocarpus_lutescens%29_-_Gora_Park_-_Hakone%2C_Kanagawa%2C_Japan_-_DSC08579.jpg/640px-Dypsis_lutescens_%28Chrysalidocarpus_lutescens%29_-_Gora_Park_-_Hakone%2C_Kanagawa%2C_Japan_-_DSC08579.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Schlumbergera_%28actm%29_05.jpg/640px-Schlumbergera_%28actm%29_05.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Begonia_grandis_%27claret_jug%27_01.jpg/640px-Begonia_grandis_%27claret_jug%27_01.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Paeonia_suffruticosa_Yatsuka_JdP.jpg/640px-Paeonia_suffruticosa_Yatsuka_JdP.jpg"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Leucanthemum_%27Alaska%27_Locatie_De_Kruidhof.JPG/640px-Leucanthemum_%27Alaska%27_Locatie_De_Kruidhof.JPG"
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
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Oban_Dunstaffnage_Castle_Fern_next_to_the_chapel.jpg/640px-Oban_Dunstaffnage_Castle_Fern_next_to_the_chapel.jpg"
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

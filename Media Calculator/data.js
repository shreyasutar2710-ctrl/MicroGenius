const mediaData = {

"Nutrient Agar":{
 type:"General (Agar)",baseVolume:1000,
 composition:{Peptone:5,BeefExtract:3,NaCl:5,Agar:15}
},

"Nutrient Broth":{
 type:"General (Broth)",baseVolume:1000,
 composition:{Peptone:5,BeefExtract:3,NaCl:5}
},

"Blood Agar":{
 type:"Enriched",baseVolume:1000,
 composition:{Peptone:10,MeatExtract:5,NaCl:5,Agar:15,Blood:"5%"}
},

"Chocolate Agar":{
 type:"Enriched",baseVolume:1000,
 composition:{Peptone:10,MeatExtract:5,NaCl:5,Agar:15,"Heated blood":"5%"}
},

"MacConkey Agar":{
 type:"Selective/Differential",baseVolume:1000,
 composition:{Peptone:17,Lactose:10,BileSalts:1.5,NaCl:5,NeutralRed:0.03,CrystalViolet:0.001,Agar:13.5}
},

"MacConkey Broth":{
 type:"Selective (Broth)",baseVolume:1000,
 composition:{Peptone:20,Lactose:10,BileSalts:5,NeutralRed:0.03}
},

"EMB Agar":{
 type:"Differential",baseVolume:1000,
 composition:{Peptone:10,Lactose:10,Sucrose:10,EosinY:0.4,MethyleneBlue:0.065,Agar:13.5}
},

"Mannitol Salt Agar":{
 type:"Selective",baseVolume:1000,
 composition:{Peptone:10,BeefExtract:1,NaCl:75,Mannitol:10,PhenolRed:0.025,Agar:15}
},
"TCBS Broth":{
 type:"Selective (Broth)",baseVolume:1000,
 composition:{Peptone:10,YeastExtract:5,SodiumChloride:10,SodiumCitrate:10}
},

"CLED Broth":{
 type:"Differential (Broth)",baseVolume:1000,
 composition:{Peptone:4,Casein:4,Lactose:10,BromothymolBlue:0.02}
},

"Bile Esculin Agar":{
 type:"Differential",baseVolume:1000,
 composition:{Peptone:20,Esculin:1,BileSalts:40,FerricCitrate:0.5,Agar:15}
},

"Bile Esculin Broth":{
 type:"Differential (Broth)",baseVolume:1000,
 composition:{Peptone:20,Esculin:1,BileSalts:40,FerricCitrate:0.5}
},

"XLD Agar":{
 type:"Selective",baseVolume:1000,
 composition:{YeastExtract:3,Lysine:5,Xylose:3.75,Lactose:7.5,Sucrose:7.5,PhenolRed:0.08,Agar:15}
},

"XLD Broth":{
 type:"Selective (Broth)",baseVolume:1000,
 composition:{YeastExtract:3,Lysine:5,Xylose:3.75}
},

"Hektoen Enteric Agar":{
 type:"Selective",baseVolume:1000,
 composition:{ProteosePeptone:12,Lactose:12,Sucrose:12,BileSalts:9,FerricAmmoniumCitrate:1,Agar:15}
},

"Wilson Blair Agar":{
 type:"Selective",baseVolume:1000,
 composition:{BismuthSulfite:8,Peptone:10,Glucose:5,Agar:15}
},

"Tinsdale Agar":{
 type:"Selective",baseVolume:1000,
 composition:{Peptone:20,Tellurite:0.1,Cysteine:0.2,Agar:15}
},

"Tellurite Blood Agar":{
 type:"Selective",baseVolume:1000,
 composition:{Blood:"5%",Tellurite:0.04,Agar:15}
},

"BCYE Agar":{
 type:"Enriched",baseVolume:1000,
 composition:{YeastExtract:10,ActivatedCharcoal:2,ACESBuffer:10,Lcysteine:0.4,IronSalts:0.25,Agar:15}
},

"Skirrow Campylobacter Agar":{
 type:"Selective",baseVolume:1000,
 composition:{Blood:"5%",Vancomycin:0.01,Trimethoprim:0.005,PolymyxinB:0.002,Agar:15}
},

"Campylobacter Blood Free Agar":{
 type:"Selective",baseVolume:1000,
 composition:{Charcoal:4,Cefoperazone:0.032,AmphotericinB:0.01,Agar:15}
},

"Regan Lowe Agar":{
 type:"Selective",baseVolume:1000,
 composition:{Charcoal:10,Cefalexin:0.04,Agar:15}
},

"Bordet Gengou Agar":{
 type:"Enriched",baseVolume:1000,
 composition:{PotatoInfusion:500,Glycerol:15,Blood:"15%",Agar:15}
},

"Buffered Charcoal Yeast Extract Broth":{
 type:"Enriched (Broth)",baseVolume:1000,
 composition:{YeastExtract:10,ActivatedCharcoal:2,ACESBuffer:10}
},

"Middlebrook 7H10 Agar":{
 type:"Mycobacteria",baseVolume:1000,
 composition:{SaltsMixture:6.6,Glycerol:5,OADC:"10%",Agar:15}
},

"Middlebrook 7H9 Broth":{
 type:"Mycobacteria (Broth)",baseVolume:1000,
 composition:{SaltsMixture:6.6,Glycerol:5,OADC:"10%"}
},

"Middlebrook 7H11 Agar":{
 type:"Mycobacteria",baseVolume:1000,
 composition:{SaltsMixture:6.6,Glycerol:5,OADC:"10%",Agar:15}
},

"Dubos Broth":{
 type:"Mycobacteria (Broth)",baseVolume:1000,
 composition:{Asparagine:5,PhosphateBuffer:2,Albumin:5}
},

"Egg Yolk Agar":{
 type:"Differential",baseVolume:1000,
 composition:{NutrientAgarBase:40,EggYolkEmulsion:"10%"}
},

"Nitrate Broth":{
 type:"Biochemical",baseVolume:1000,
 composition:{Peptone:5,PotassiumNitrate:1}
},

"Phenylalanine Agar":{
 type:"Biochemical",baseVolume:1000,
 composition:{DLPhenylalanine:2.5,YeastExtract:3,Agar:15}
},

"ONPG Broth":{
 type:"Biochemical",baseVolume:1000,
 composition:{Peptone:10,ONPG:0.1}
},

"DNase Agar":{
 type:"Biochemical",baseVolume:1000,
 composition:{Peptone:20,DNA:2,Agar:15}
},

"Egg Yolk Tellurite Agar":{
 type:"Selective",baseVolume:1000,
 composition:{EggYolkEmulsion:"10%",Tellurite:0.04,Agar:15}
},

"Buffered Peptone Water":{
 type:"Pre-enrichment",baseVolume:1000,
 composition:{Peptone:10,DisodiumPhosphate:3.5,PotassiumPhosphate:1.5}
},

"Rappaport Vassiliadis Broth":{
 type:"Selective Enrichment",baseVolume:1000,
 composition:{Peptone:4,MagnesiumChloride:29,MalachiteGreen:0.036}
},

"Tetrathionate Broth":{
 type:"Selective Enrichment",baseVolume:1000,
 composition:{Peptone:20,OxBile:6,CalciumCarbonate:10}
},

"GN Broth":{
 type:"Selective Enrichment",baseVolume:1000,
 composition:{Glucose:1,Mannitol:1,Deoxycholate:0.5}
},

"Peptone Water":{
 type:"Basic Broth",baseVolume:1000,
 composition:{Peptone:10,NaCl:5}
},

"Salt Broth":{
 type:"Selective (Broth)",baseVolume:1000,
 composition:{Peptone:10,NaCl:100}
},

"Alkaline Peptone Broth":{
 type:"Enrichment",baseVolume:1000,
 composition:{Peptone:10,NaCl:10,pH:"8.5"}
},


"CLED Agar":{
 type:"Differential",baseVolume:1000,
 composition:{Peptone:4,Casein:4,Lactose:10,BromothymolBlue:0.02,Agar:15}
},

"TCBS Agar":{
 type:"Selective",baseVolume:1000,
 composition:{Peptone:10,YeastExtract:5,SodiumCitrate:10,SodiumThiosulfate:10,OxBile:8,Sucrose:20,BromothymolBlue:0.04,Agar:15}
},

"Lowenstein Jensen Medium":{
 type:"Enriched",baseVolume:1000,
 composition:{Egg:"Whole egg",MalachiteGreen:0.025,Asparagine:3,Glycerol:12}
},

"Brain Heart Infusion Agar":{
 type:"Enriched",baseVolume:1000,
 composition:{BrainHeartInfusion:17.5,Peptone:10,Glucose:2,NaCl:5,Agar:15}
},

"Brain Heart Infusion Broth":{
 type:"Enriched (Broth)",baseVolume:1000,
 composition:{BrainHeartInfusion:17.5,Peptone:10,Glucose:2,NaCl:5}
},

"Selenite F Broth":{
 type:"Enrichment",baseVolume:1000,
 composition:{Peptone:5,Lactose:4,SodiumSelenite:4}
},

"Alkaline Peptone Water":{
 type:"Enrichment",baseVolume:1000,
 composition:{Peptone:10,NaCl:10}
},

"Robertson Cooked Meat":{
 type:"Anaerobic",baseVolume:1000,
 composition:{CookedMeat:500,Peptone:10,Glucose:5}
},

"Thioglycollate Medium":{
 type:"Anaerobic",baseVolume:1000,
 composition:{PancreaticDigest:15,YeastExtract:5,Glucose:5,SodiumThioglycollate:0.5}
},

"Cary Blair Medium":{
 type:"Transport",baseVolume:1000,
 composition:{SodiumThioglycollate:1.5,DisodiumPhosphate:1.1,CalciumChloride:0.09,Agar:5}
},

"Transport Medium Stuart":{
 type:"Transport",baseVolume:1000,
 composition:{SodiumThioglycollate:0.5,Glycerophosphate:10,Agar:3}
},

"Sabouraud Dextrose Agar":{
 type:"Fungal",baseVolume:1000,
 composition:{Peptone:10,Dextrose:40,Agar:15}
},

"Sabouraud Dextrose Broth":{
 type:"Fungal (Broth)",baseVolume:1000,
 composition:{Peptone:10,Dextrose:40}
},

"Potato Dextrose Agar":{
 type:"Fungal",baseVolume:1000,
 composition:{PotatoInfusion:200,Dextrose:20,Agar:15}
},

"Glucose Broth":{
 type:"Sugar Broth",baseVolume:1000,
 composition:{Peptone:10,Glucose:5,PhenolRed:0.018}
},

"Lactose Broth":{
 type:"Sugar Broth",baseVolume:1000,
 composition:{Peptone:10,Lactose:5,PhenolRed:0.018}
},

"Sucrose Broth":{
 type:"Sugar Broth",baseVolume:1000,
 composition:{Peptone:10,Sucrose:5,PhenolRed:0.018}
},

"Urea Agar":{
 type:"Biochemical",baseVolume:1000,
 composition:{Peptone:1,Glucose:1,SodiumChloride:5,PhenolRed:0.012,Urea:20,Agar:15}
},

"SIM Medium":{
 type:"Biochemical",baseVolume:1000,
 composition:{Peptone:30,SodiumThiosulfate:0.025,FerrousAmmoniumSulfate:0.2,Agar:3}
},

"MR-VP Broth":{
 type:"Biochemical",baseVolume:1000,
 composition:{Peptone:7,Glucose:5,PotassiumPhosphate:5}
},

"Citrate Agar":{
 type:"Biochemical",baseVolume:1000,
 composition:{SodiumCitrate:2,AmmoniumPhosphate:1,BromothymolBlue:0.08,Agar:15}
},

"Tryptone Broth":{
 type:"Biochemical",baseVolume:1000,
 composition:{Tryptone:10.0,Nacl:5.0}
},

"Mueller Hinton Agar":{
 type:"Antibiotic Sensitivity",baseVolume:1000,
 composition:{BeefInfusion:300,CaseinHydrolysate:17,Starch:1.5,Agar:17}
},

"Mueller Hinton Broth":{
 type:"Antibiotic Sensitivity (Broth)",baseVolume:1000,
 composition:{BeefInfusion:300,CaseinHydrolysate:17,Starch:1.5}
},

"Simmons Citrate Agar":{
 type:"Biochemical",baseVolume:1000,
 composition:{SodiumCitrate:2,AmmoniumDihydrogenPhosphate:1.5,NaCl:5,BromothymolBlue:0.08,Agar:15}
},

"Koser Citrate Broth":{
 type:"Biochemical (Broth)",baseVolume:1000,
 composition:{SodiumCitrate:2,AmmoniumPhosphate:1}
},

"Triple Sugar Iron Agar":{
 type:"Differential",baseVolume:1000,
 composition:{Peptone:20,Glucose:1,Lactose:10,Sucrose:10,SodiumThiosulfate:0.3,FerrousSulfate:0.2,PhenolRed:0.024,Agar:12}
},

"Kligler Iron Agar":{
 type:"Differential",baseVolume:1000,
 composition:{Peptone:20,Glucose:1,Lactose:10,FerrousSulfate:0.2,PhenolRed:0.024,Agar:12}
},

"Christensen Urea Broth":{
 type:"Biochemical (Broth)",baseVolume:1000,
 composition:{Peptone:1,Glucose:1,NaCl:5,PhenolRed:0.012,Urea:20}
},

"Motility Test Medium":{
 type:"Biochemical",baseVolume:1000,
 composition:{Peptone:10,NaCl:5,Agar:4}
},

"Phenol Red Mannitol Broth":{
 type:"Sugar Broth",baseVolume:1000,
 composition:{Peptone:10,Mannitol:5,PhenolRed:0.018}
},

"Phenol Red Sucrose Broth":{
 type:"Sugar Broth",baseVolume:1000,
 composition:{Peptone:10,Sucrose:5,PhenolRed:0.018}
},

"Phenol Red Maltose Broth":{
 type:"Sugar Broth",baseVolume:1000,
 composition:{Peptone:10,Maltose:5,PhenolRed:0.018}
},

"Alkaline Agar":{
 type:"Selective",baseVolume:1000,
 composition:{Peptone:10,NaCl:10,Agar:15,pH:"8.5"}
},

"Tellurite Agar":{
 type:"Selective",baseVolume:1000,
 composition:{Peptone:10,Tellurite:0.04,Agar:15}
},

"Chapman Stone Agar":{
 type:"Selective",baseVolume:1000,
 composition:{Peptone:10,BeefExtract:1,NaCl:75,Agar:15}
},

"Blood Tellurite Agar":{
 type:"Selective",baseVolume:1000,
 composition:{Blood:"5%",Tellurite:0.04,Agar:15}
},

"Vibrio Agar":{
 type:"Selective",baseVolume:1000,
 composition:{Peptone:10,NaCl:10,Sucrose:10,Agar:15}
},

"Campy BAP":{
 type:"Selective",baseVolume:1000,
 composition:{Blood:"10%",Vancomycin:0.01,Trimethoprim:0.005,PolymyxinB:0.002,Agar:15}
},

"Egg Based Medium":{
 type:"Enriched",baseVolume:1000,
 composition:{Egg:"Whole egg",Glycerol:12,Asparagine:3}
},

"Sabouraud Agar with Antibiotics":{
 type:"Fungal Selective",baseVolume:1000,
 composition:{Peptone:10,Dextrose:40,Chloramphenicol:0.05,Agar:15}
},

"Corn Meal Agar":{
 type:"Fungal",baseVolume:1000,
 composition:{CornMealInfusion:50,Agar:15}
},

"Rice Extract Agar":{
 type:"Fungal",baseVolume:1000,
 composition:{RiceExtract:50,Agar:15}
},

"Oatmeal Agar":{
 type:"Fungal",baseVolume:1000,
 composition:{Oatmeal:30,Agar:15}
},

"Actinomycetes Agar":{
 type:"Selective",baseVolume:1000,
 composition:{SodiumCaseinate:2,LAsparagine:0.1,Glycerol:10,Agar:15}
},

"Starch Agar":{
 type:"Biochemical",baseVolume:1000,
 composition:{SolubleStarch:10,Peptone:5,Agar:15}
},

"Milk Agar":{
 type:"Differential",baseVolume:1000,
 composition:{SkimMilkPowder:100,Agar:15}
},

"Gelatin Agar":{
 type:"Differential",baseVolume:1000,
 composition:{Peptone:5,Gelatin:120,Agar:15}
},

"Yeast Extract Agar":{
 type:"General",baseVolume:1000,
 composition:{YeastExtract:5,Peptone:5,Agar:15}
},

"Luria Bertani Agar":{
 type:"General",baseVolume:1000,
 composition:{Tryptone:10,YeastExtract:5,NaCl:10,Agar:15}
},

"Luria Bertani Broth":{
 type:"General (Broth)",baseVolume:1000,
 composition:{Tryptone:10,YeastExtract:5,NaCl:10}
},

"Minimal Salt Medium":{
 type:"Defined",baseVolume:1000,
 composition:{Glucose:4,AmmoniumSulfate:2,PotassiumPhosphate:1,MagnesiumSulfate:0.2}
},

"Basal Medium":{
 type:"Defined",baseVolume:1000,
 composition:{AmmoniumChloride:1,Glucose:5,PotassiumPhosphate:1}
},

"Phosphate Buffer Saline":{
 type:"Buffer",baseVolume:1000,
 composition:{NaCl:8,PotassiumChloride:0.2,DisodiumPhosphate:1.44,PotassiumPhosphate:0.24}
},

"Transport Medium Amies":{
 type:"Transport",baseVolume:1000,
 composition:{SodiumThioglycollate:1,Charcoal:10,Agar:3}
},

"Cooked Meat Broth":{
 type:"Anaerobic",baseVolume:1000,
 composition:{CookedMeat:500,Peptone:10}
},


"Ashby Mannitol Agar":{
 type:"Nitrogen Free",baseVolume:1000,
 composition:{Mannitol:10,PotassiumPhosphate:0.2,MagnesiumSulfate:0.2,CalciumCarbonate:5,Agar:15}
},

"Jensen Medium":{
 type:"Nitrogen Fixer",baseVolume:1000,
 composition:{Sucrose:20,DipotassiumPhosphate:1,MagnesiumSulfate:0.5,SodiumChloride:0.5,FerrousSulfate:0.1,Agar:15}
},

"Pikovskaya Agar":{
 type:"Differential",baseVolume:1000,
 composition:{Glucose:10,CalciumPhosphate:5,YeastExtract:0.5,Agar:15}
},

"Aleksandrov Agar":{
 type:"Differential",baseVolume:1000,
 composition:{Glucose:5,PotassiumAluminosilicate:2,MagnesiumSulfate:0.5,Agar:15}
},

"Czapek Dox Agar":{
 type:"Fungal Defined",baseVolume:1000,
 composition:{Sucrose:30,SodiumNitrate:2,DipotassiumPhosphate:1,MagnesiumSulfate:0.5,PotassiumChloride:0.5,FerrousSulfate:0.01,Agar:15}
},

"Czapek Dox Broth":{
 type:"Fungal Defined (Broth)",baseVolume:1000,
 composition:{Sucrose:30,SodiumNitrate:2,DipotassiumPhosphate:1,MagnesiumSulfate:0.5}
},

"Rose Bengal Agar":{
 type:"Fungal Selective",baseVolume:1000,
 composition:{Peptone:5,Dextrose:10,RoseBengal:0.05,Potassiumdihydrogenphosphate:1.0,Magnesiumsulfate:0.5,Agar:15}
},

"Mycosel Agar":{
 type:"Fungal Selective",baseVolume:1000,
 composition:{Peptone:10,Dextrose:10,Cycloheximide:0.5,Chloramphenicol:0.05,Agar:15}
},

"Urea Broth Stuart":{
 type:"Biochemical (Broth)",baseVolume:1000,
 composition:{Urea:20,PotassiumPhosphate:1,PhenolRed:0.01}
},

"Malonate Broth":{
 type:"Biochemical",baseVolume:1000,
 composition:{SodiumMalonate:3,AmmoniumSulfate:2,BromothymolBlue:0.04}
},

"OF Glucose Medium":{
 type:"Biochemical",baseVolume:1000,
 composition:{Peptone:2,Glucose:10,BromothymolBlue:0.03,Agar:3}
},

"OF Maltose Medium":{
 type:"Biochemical",baseVolume:1000,
 composition:{Peptone:2,Maltose:10,BromothymolBlue:0.03,Agar:3}
},

"Hugh Leifson Medium":{
 type:"Biochemical",baseVolume:1000,
 composition:{Peptone:2,Glucose:10,Agar:3}
},
 
"TCBS Modified Agar":{
 type:"Selective",baseVolume:1000,
 composition:{Peptone:10,YeastExtract:5,Sucrose:20,OxBile:8,Agar:15}
},

"Alkaline Egg Medium":{
 type:"Enriched",baseVolume:1000,
 composition:{Egg:"Whole egg",SodiumHydroxide:0.1}
},

"PPLO Agar":{
 type:"Mycoplasma",baseVolume:1000,
 composition:{PPLOBase:21,YeastExtract:5,Serum:"20%",Agar:15}
},

"PPLO Broth":{
 type:"Mycoplasma (Broth)",baseVolume:1000,
 composition:{PPLOBase:21,YeastExtract:5,Serum:"20%"}
},

"BCG Medium":{
 type:"Mycobacteria",baseVolume:1000,
 composition:{Egg:"Whole egg",Glycerol:12,Asparagine:4}
},

"Dubos Agar":{
 type:"Mycobacteria",baseVolume:1000,
 composition:{Asparagine:5,Albumin:5,Glycerol:5,Agar:15}
},

"Blood Agar Base No.2":{
 type:"General",baseVolume:1000,
 composition:{Peptone:15,YeastExtract:5,NaCl:5,Agar:15}
},

"Chocolate Agar Base":{
 type:"Enriched",baseVolume:1000,
 composition:{Peptone:15,YeastExtract:5,NaCl:5,Agar:15}
},

"Yeast Extract Peptone Dextrose Agar":{
 type:"Fungal",baseVolume:1000,
 composition:{YeastExtract:10,Peptone:20,Dextrose:20,Agar:15}
},

"Acetobacter Agar":{
 type:"Selective",baseVolume:1000,
 composition:{Glucose:20,YeastExtract:10,CalciumCarbonate:20,Agar:15}
},

"Azotobacter Agar":{
 type:"Nitrogen Fixer",baseVolume:1000,
 composition:{Mannitol:20,DipotassiumPhosphate:1,MagnesiumSulfate:0.2,CalciumCarbonate:5,Agar:15}
},

"Cellulose Agar":{
 type:"Differential",baseVolume:1000,
 composition:{CarboxymethylCellulose:10,Peptone:5,Agar:15}
},

"Pectin Agar":{
 type:"Differential",baseVolume:1000,
 composition:{Pectin:10,YeastExtract:1,Agar:15}
},

"Xylan Agar":{
 type:"Differential",baseVolume:1000,
 composition:{Xylan:10,Peptone:5,Agar:15}
},

"Lignin Agar":{
 type:"Differential",baseVolume:1000,
 composition:{Lignin:5,Peptone:5,Agar:15}
},

"Marine Agar":{
 type:"Marine",baseVolume:1000,
 composition:{Peptone:5,YeastExtract:1,SeaSalts:19,Agar:15}
},

"Marine Broth":{
 type:"Marine (Broth)",baseVolume:1000,
 composition:{Peptone:5,YeastExtract:1,SeaSalts:19}
},

"Halophilic Agar":{
 type:"Halophile",baseVolume:1000,
 composition:{Peptone:10,YeastExtract:5,NaCl:150,Agar:15}
},

"Thermophile Agar":{
 type:"Thermophile",baseVolume:1000,
 composition:{Tryptone:10,YeastExtract:5,Agar:15}
},

"Acidophilic Agar":{
 type:"Acidophile",baseVolume:1000,
 composition:{Peptone:10,Glucose:10,Agar:15,pH:"3.5"}
},

"Alkaliphile Agar":{
 type:"Alkaliphile",baseVolume:1000,
 composition:{Peptone:10,Glucose:10,Agar:15,pH:"9.5"}
},

"Minimal Glucose Agar":{
 type:"Defined",baseVolume:1000,
 composition:{Glucose:5,AmmoniumChloride:1,MagnesiumSulfate:0.2,Agar:15}
},

"Sulfur Oxidizer Medium":{
 type:"Chemolithotroph",baseVolume:1000,
 composition:{ElementalSulfur:10,AmmoniumSulfate:3,MagnesiumSulfate:0.5}
},

"Iron Oxidizer Medium":{
 type:"Chemolithotroph",baseVolume:1000,
 composition:{FerrousSulfate:5,AmmoniumSulfate:3}
},

"Nitrifying Bacteria Medium":{
 type:"Chemolithotroph",baseVolume:1000,
 composition:{AmmoniumSulfate:2,PotassiumPhosphate:1,MagnesiumSulfate:0.5}
},

"Methylobacterium Agar":{
 type:"Methylotroph",baseVolume:1000,
 composition:{Methanol:5,AmmoniumSulfate:2,Agar:15}
},

"Methanogen Medium":{
 type:"Anaerobic",baseVolume:1000,
 composition:{SodiumAcetate:5,AmmoniumChloride:1,ReducingAgents:1}
},


"Actinomycete Isolation Agar": {
 type: "Selective", baseVolume: 1000,
 composition: { Starch: 10, Casein: 0.3, NaCl: 2, Agar: 15 }
},

"Azotobacter Ashby Mannitol Agar": {
 type: "Nitrogen Fixer", baseVolume: 1000,
 composition: { Mannitol: 10, "K2HPO4": 0.2,"MgSO4": 0.2,"CaCO3": 5, Agar: 15 }
},

"Pikovskaya Agar": {
 type: "Differential", baseVolume: 1000,
 composition: { Glucose: 10, tricalciumphosphate: 5, YeastExtract: 0.5, Agar: 15 }
},

"Czapek Dox Agar": {
 type: "Fungal Defined", baseVolume: 1000,
 composition: { Sucrose: 30, "NaNO3": 2, "K2HPO4": 1, "MgSO4": 0.5, "KCl": 0.5, "FeSO4": 0.01, Agar: 15 }
},

"Czapek Dox Broth": {
 type: "Fungal Defined (Broth)", baseVolume: 1000,
 composition: { Sucrose: 30, "NaNO3": 2, "K2HPO4": 1, "MgSO4": 0.5 }
},
"Mycosel Agar": {
 type: "Fungal Selective", baseVolume: 1000,
 composition: { Peptone: 10, Dextrose: 10, Cycloheximide: 0.5, Chloramphenicol: 0.05, Agar: 15 }
},

"Thiosulfate Citrate Bile Salt Sucrose Agar (TCBS)": {
 type: "Selective", baseVolume: 1000,
 composition: { Peptone: 10, YeastExtract: 5, NaCitrate: 10, NaThiosulfate: 10, OxBile: 8, Sucrose: 20, BromothymolBlue: 0.04, Agar: 15 }
},

"Sheep Blood Agar Base": {
 type: "Enriched", baseVolume: 1000,
 composition: { Peptone: 15, YeastExtract: 5, NaCl: 5, Agar: 15 }
},

"Chocolate Agar Base": {
 type: "Enriched", baseVolume: 1000,
 composition: { Peptone: 15, YeastExtract: 5, NaCl: 5, Agar: 15 }
},

"Basal Salts Medium": {
 type: "Defined", baseVolume: 1000,
 composition: { "Na2HPO4": 1, "KH2PO4": 0.2, "MgSO4": 0.2, "CaCl2": 0.02 }
},

"Minimal Glucose Agar": {
 type: "Defined", baseVolume: 1000,
 composition: { Glucose: 5, "NH₄Cl":1.0,"MgSO4": 0.2,"Na₂HPO₄":6.8,"KH₂PO₄":3.0,"NaCl":0.5,Agar: 15 }
},

"Sabouraud Dextrose Agar with Chloramphenicol": {
 type: "Fungal Selective", baseVolume: 1000,
 composition: { Peptone: 10, Dextrose: 40, Chloramphenicol: 0.05, Agar: 15 }
},

"Potato Dextrose Agar": {
 type: "Fungal", baseVolume: 1000,
 composition: { PotatoInfusion: 200, Dextrose: 20, Agar: 15 }
},

"Yeast Extract Peptone Dextrose Agar": {
 type: "Fungal", baseVolume: 1000,
 composition: { YeastExtract: 10, Peptone: 20, Dextrose: 20, Agar: 15 }
},

"Luria Bertani Agar": {
 type: "General", baseVolume: 1000,
 composition: { Tryptone: 10, YeastExtract: 5, NaCl: 10, Agar: 15 }
},

"Luria Bertani Broth": {
 type: "General (Broth)", baseVolume: 1000,
 composition: { Tryptone: 10, YeastExtract: 5, NaCl: 10 }
},

"Motility Test Medium": {
 type: "Biochemical", baseVolume: 1000,
 composition: { Peptone: 10, NaCl: 5, Agar: 4 }
},

"Triple Sugar Iron Agar": {
 type: "Differential", baseVolume: 1000,
 composition: { Peptone: 20, Glucose: 1, Lactose: 10, Sucrose: 10, SodiumThiosulfate: 0.3, FerrousSulfate: 0.2, PhenolRed: 0.024, Agar: 12 }
},

"Kligler Iron Agar": {
 type: "Differential", baseVolume: 1000,
 composition: { Peptone: 20, Glucose: 1, Lactose: 10, FerrousSulfate: 0.2, PhenolRed: 0.024, Agar: 12 }
},

"Simmons Citrate Agar": {
 type: "Biochemical", baseVolume: 1000,
 composition: { SodiumCitrate:2, AmmoniumDihydrogenPhosphate: 1.5, NaCl: 5, BromothymolBlue: 0.08, Agar: 15 }
},

"Koser Citrate Broth": {
 type: "Biochemical (Broth)", baseVolume: 1000,
 composition: { SodiumCitrate: 2, AmmoniumPhosphate: 1 }
},

"Urease Test Medium": {
 type: "Biochemical", baseVolume: 1000,
 composition: { Peptone: 1, Glucose: 1, NaCl: 5, PhenolRed: 0.012, Urea: 20, Agar: 15 }
},

"Phenylalanine Agar": {
 type: "Biochemical", baseVolume: 1000,
 composition: { DLPhenylalanine: 2.5, YeastExtract: 3, Agar: 15 }
},

"ONPG Broth": {
 type: "Biochemical", baseVolume: 1000,
 composition: { Peptone: 10, ONPG: 0.1 }
},

"DNase Agar": {
 type: "Biochemical", baseVolume: 1000,
 composition: { Peptone: 20, DNA: 2, Agar: 15 }
},

"Simmon Citrate Broth": {
 type: "Biochemical", baseVolume: 1000,
 composition: { SodiumCitrate: 2, AmmoniumPhosphate: 1 }
},

"Malonate Broth": {
 type: "Biochemical", baseVolume: 1000,
 composition: { SodiumMalonate: 3, AmmoniumSulfate: 2, BromothymolBlue: 0.04 }
},

"OF Glucose Medium": {
 type: "Biochemical", baseVolume: 1000,
 composition: { Peptone: 2, Glucose: 10, BromothymolBlue: 0.03, Agar: 3 }
},

"OF Maltose Medium": {
 type: "Biochemical", baseVolume: 1000,
 composition: { Peptone: 2, Maltose: 10, BromothymolBlue: 0.03, Agar: 3 }
},

"Hugh Leifson Medium": {
 type: "Biochemical", baseVolume: 1000,
 composition: { Peptone: 2, Glucose: 10, Agar: 3 }
},

"Salt Tolerance Broth": {
 type: "Selective (Broth)", baseVolume: 1000,
 composition: { Peptone: 10, NaCl:60 ,BeefExtract:3}
},


"Actinomycete Starch Agar": {
 type: "Selective", baseVolume: 1000,
 composition: { Starch: 10, Casein: 0.3, NaCl: 2, Agar: 15 }
},

"Azotobacter Gluconate Agar": {
 type: "Nitrogen Fixer", baseVolume: 1000,
 composition: { SodiumGluconate: 10, K2HPO4: 0.2, MgSO4: 0.2, CaCO3: 5, Agar: 15 }
},

"Rhizobium Yeast Extract Mannitol Agar": {
 type: "Nitrogen Fixer", baseVolume: 1000,
 composition: { Mannitol: 10, YeastExtract: 1, K2HPO4: 0.2, MgSO4: 0.2, Agar: 15 }
},

"Phosphate Solubilizing Bacteria Agar": {
 type: "Differential", baseVolume: 1000,
 composition: { Glucose: 10, "Ca3(PO4)2":5, YeastExtract: 0.5, Agar: 15 }
},

"Cellulase Detection Agar": {
 type: "Differential", baseVolume: 1000,
 composition: { CarboxymethylCellulose: 10, Peptone: 5, Agar: 15 }
},

"Pectinase Detection Agar": {
 type: "Differential", baseVolume: 1000,
 composition: { Pectin: 10, YeastExtract: 1, Agar: 15 }
},

"Xylanase Detection Agar": {
 type: "Differential", baseVolume: 1000,
 composition: { Xylan: 10, Peptone: 5, Agar: 15 }
},

"Lignin Degrader Medium": {
 type: "Differential", baseVolume: 1000,
 composition: { Lignin: 5, Peptone: 5, Agar: 15 }
},

"Marine Agar 2216": {
 type: "Marine", baseVolume: 1000,
 composition: { Peptone: 5, YeastExtract: 1, SeaSalts: 19, Agar: 15 }
},

"Marine Broth 2216": {
 type: "Marine (Broth)", baseVolume: 1000,
 composition: { Peptone: 5, YeastExtract: 1, SeaSalts: 19 }
},

"Halophilic Agar": {
 type: "Halophile", baseVolume: 1000,
 composition: { Peptone: 10, YeastExtract: 5, NaCl: 150, Agar: 15 }
},

"Thermophile Agar": {
 type: "Thermophile", baseVolume: 1000,
 composition: { Tryptone: 10, YeastExtract: 5, Agar: 15 }
},

"Acidophile Agar": {
 type: "Acidophile", baseVolume: 1000,
 composition: { Peptone: 10, Glucose: 10, Agar: 15, pH: "3.5" }
},

"Alkaliphile Agar": {
 type: "Alkaliphile", baseVolume: 1000,
 composition: { Peptone: 10, Glucose: 10, Agar: 15, pH: "9.5" }
},

"Minimal Salt Agar": {
 type: "Defined", baseVolume: 1000,
 composition: { Glucose: 5, "(NH4)2SO4": 1, MgSO4: 0.2, Agar: 15 }
},

"Sulfur Oxidizer Agar": {
 type: "Chemolithotroph", baseVolume: 1000,
 composition: { ElementalSulfur: 10, AmmoniumSulfate: 3, MgSO4: 0.5, Agar: 15 }
},

"Iron Oxidizer Medium": {
 type: "Chemolithotroph", baseVolume: 1000,
 composition: { FerrousSulfate: 5, AmmoniumSulfate: 3, Agar: 15 }
},

"Nitrifying Bacteria Medium": {
 type: "Chemolithotroph", baseVolume: 1000,
 composition: { AmmoniumSulfate: 2, PotassiumPhosphate: 1, MgSO4: 0.5, Agar: 15 }
},

"Methylobacterium Agar": {
 type: "Methylotroph", baseVolume: 1000,
 composition: { Methanol: 5, AmmoniumSulfate: 2, Agar: 15 }
},

"Methanogen Medium": {
 type: "Anaerobic", baseVolume: 1000,
 composition: { SodiumAcetate: 5, AmmoniumChloride: 1, ReducingAgents: 1 }
},

"Acetobacter Agar": {
 type: "Selective", baseVolume: 1000,
 composition: { Glucose: 20, YeastExtract: 10, CaCO3: 20, Agar: 15 }

},
 
"Legionella BCYE Agar": {
 type: "Enriched", baseVolume: 1000,
 composition: { YeastExtract: 10, ActivatedCharcoal: 2, ACESBuffer: 10, Lcysteine: 0.4, IronSalts: 0.25, Agar: 15 }
},

"Campylobacter Charcoal Agar": {
 type: "Selective", baseVolume: 1000,
 composition: { Charcoal: 4, Cefoperazone: 0.032, AmphotericinB: 0.01, Agar: 15 }
},

"Regan Lowe Agar": {
 type: "Selective", baseVolume: 1000,
 composition: { Charcoal: 10, Cefalexin: 0.04, Agar: 15 }
},

"Bordet Gengou Agar": {
 type: "Enriched", baseVolume: 1000,
 composition: { PotatoInfusion: 500, Glycerol: 15, Blood: "15%", Agar: 15 }
},

"Buffered Peptone Water": {
 type: "Pre-enrichment", baseVolume: 1000,
 composition: { Peptone: 10, DisodiumPhosphate: 3.5, PotassiumPhosphate: 1.5 }
},

"Rappaport Vassiliadis Broth": {
 type: "Selective Enrichment", baseVolume: 1000,
 composition: { Peptone: 4, MagnesiumChloride: 29, MalachiteGreen: 0.036 }
},

"Tetrathionate Broth": {
 type: "Selective Enrichment", baseVolume: 1000,
 composition: { Peptone: 20, OxBile: 6, CalciumCarbonate: 10 }
},

"GN Broth": {
 type: "Selective Enrichment", baseVolume: 1000,
 composition: { Glucose: 1, Mannitol: 1, Deoxycholate: 0.5 }
},

"Peptone Water": {
 type: "Basic Broth", baseVolume: 1000,
 composition: { Peptone: 10, NaCl: 5 }
},

"Salt Broth": {
 type: "Selective (Broth)", baseVolume: 1000,
 composition: { Peptone: 10, NaCl: 100 }
},

"Alkaline Peptone Broth": {
 type: "Enrichment", baseVolume: 1000,
 composition: { Peptone: 10, NaCl: 10, pH: "8.5" }
},

"Yeast Mannitol Agar": {
 type: "Differential", baseVolume: 1000,
 composition: { YeastExtract: 5, Mannitol: 10, Agar: 15 }
},

"Streptomyces ISP Medium No. 2": {
 type: "Selective", baseVolume: 1000,
 composition: { Glucose: 10, YeastExtract: 5, Agar: 15 }
},

"Actinomycete Glycerol Agar": {
 type: "Selective", baseVolume: 1000,
 composition: { Glycerol: 10, NaCl: 1, Agar: 15 }
},

"Nocardia Agar": {
 type: "Selective", baseVolume: 1000,
 composition: { Casein: 0.3, YeastExtract: 1, Agar: 15 }
},

"Vibrio Vibrio Chromogenic Agar": {
 type: "Differential", baseVolume: 1000,
 composition: { Peptone: 10, YeastExtract: 5, ChromogenicSubstrate: 0.05, Agar: 15 }
},

"Bacillus Cereus Selective Agar": {
 type: "Selective", baseVolume: 1000,
 composition: { PolymyxinB: 0.02, EggYolkEmulsion: "5%", Agar: 15 }
},

"Clostridium Perfringens TSC Agar": {
 type: "Selective", baseVolume: 1000,
 composition: { Tryptose: 15, YeastExtract: 5, SodiumThiosulfate: 0.2, Agar: 15 }
},

"Enterobacteriaceae Chromogenic Agar": {
 type: "Differential", baseVolume: 1000,
 composition: { Peptone: 10, ChromogenicSubstrate: 0.05, Agar: 15 }
},

"Lactic Acid Bacteria MRS Broth": {
 type: "Enriched (Broth)", baseVolume: 1000,
 composition: { Peptone: 10, MeatExtract: 10, Glucose: 20, Tween80: 1 }
},

"Lactic Acid Bacteria MRS Agar": {
 type: "Enriched", baseVolume: 1000,
 composition: { Peptone: 10, MeatExtract: 10, Glucose: 20, Tween80: 1, Agar: 15 }
},

"Bifidobacterium Selective Agar": {
 type: "Selective", baseVolume: 1000,
 composition: { Peptone: 10, YeastExtract: 5, Agar: 15 }
},

"Bifidobacterium Selective Broth": {
 type: "Selective (Broth)", baseVolume: 1000,
 composition: { Peptone: 10, YeastExtract: 5 }
},

"Propionibacterium Agar": {
 type: "Enriched", baseVolume: 1000,
 composition: { Peptone: 10, YeastExtract: 5, Glucose: 10, Agar: 15 }
},

"Propionibacterium Broth": {
 type: "Enriched (Broth)", baseVolume: 1000,
 composition: { Peptone: 10, YeastExtract: 5, Glucose: 10 }
},

"Listeria Selective Agar": {
 type: "Selective", baseVolume: 1000,
 composition: { Peptone: 10, YeastExtract: 5, LithiumChloride: 0.015, PolymyxinB: 0.002, Agar: 15 }
},

"Listeria Enrichment Broth": {
 type: "Selective (Broth)", baseVolume: 1000,
 composition: { Peptone: 10, YeastExtract: 5, LithiumChloride: 0.015 }
},

"E. coli O157:H7 Chromogenic Agar": {
 type: "Selective/Differential", baseVolume: 1000,
 composition: { Peptone: 10, ChromogenicSubstrate: 0.05, Agar: 15 }
},

"Salmonella Chromogenic Agar": {
 type: "Selective/Differential", baseVolume: 1000,
 composition: { Peptone: 10, ChromogenicSubstrate: 0.05, Agar: 15 }
},

"Shigella Differential Agar": {
 type: "Differential", baseVolume: 1000,
 composition: { Peptone: 10, Lactose: 10, BromothymolBlue: 0.02, Agar: 15 }
},

"Staphylococcus Selective Agar": {
 type: "Selective", baseVolume: 1000,
 composition: { Mannitol: 10, NaCl: 75, PhenolRed: 0.025, Agar: 15 }
},

"Staphylococcus Broth": {
 type: "Selective (Broth)", baseVolume: 1000,
 composition: { Mannitol: 10, NaCl: 75 }
},

"Enterococcus Selective Broth": {
 type: "Selective (Broth)", baseVolume: 1000,
 composition: { Peptone: 10, BileSalts: 40 }
},

"Enterococcus Selective Agar": {
 type: "Selective", baseVolume: 1000,
 composition: { Peptone: 20, Esculin: 1, BileSalts: 40, FerricCitrate: 0.5, Agar: 15 }
},

  "King A Agar": {
    "type": "Selective",
    "baseVolume": 1000,
    "composition": {
      "ProteosePeptoneNo3": 20,
      "Glycerol": 10,
      "MagnesiumChloride": 1.4,
      "PotassiumSulfate": 10,
      "Agar": 15}
    },
"Lactococcus Agar": {
 type: "Enriched", baseVolume: 1000,
 composition: { Peptone: 10, YeastExtract: 5, Agar: 15 }
},

"Lactococcus Broth": {
 type: "Enriched (Broth)", baseVolume: 1000,
 composition: { Peptone: 10, YeastExtract: 5 }
},

"Micrococcus Agar": {
 type: "General", baseVolume: 1000,
 composition: { Peptone: 5, YeastExtract: 3, NaCl: 5, Agar: 15 }
},

"Micrococcus Broth": {
 type: "General (Broth)", baseVolume: 1000,
 composition: { Peptone: 5, YeastExtract: 3, NaCl: 5 }
},

"Pseudomonas Isolation Broth": {
 type: "Selective (Broth)", baseVolume: 1000,
 composition: { Peptone: 10, Glycerol: 10, MgCl2: 1.4, K2SO4: 1.4 }
},

"Acinetobacter Broth": {
 type: "Selective (Broth)", baseVolume: 1000,
 composition: { Peptone: 10, YeastExtract: 5, NaCl: 5 }
},

"Streptomyces ISP Medium No. 1": {
 type: "Selective", baseVolume: 1000,
 composition: { Glucose: 10, Peptone: 5, Agar: 15 }
},
"Violet Red Bile Agar": {
  type: "Selective",
  baseVolume: 1000,
  composition: {
    Peptone: 10,
    YeastExtract: 3,
    Lactose: 10,
    BileSalts: 1.5,
    CrystalViolet: 0.001,
    NeutralRed: 0.03,
    Agar: 15}
},
 "Malt Extract Broth": {
    type: "Enrichment / Fungi",
    baseVolume: 1000,
    composition: {
      MaltExtract: 20,
      Peptone: 1,
      Dextrose: 10
    }
  },

"Actinomyces Broth": {
 type: "Enriched (Broth)", baseVolume: 1000,
 composition: { Peptone: 10, YeastExtract: 5, Glucose: 10 }
},

"Bacillus Sporulation Agar": {
 type: "Selective", baseVolume: 1000,
 composition: { Peptone: 10, NaCl: 5, Agar: 15 }
},

"Bacillus Sporulation Broth": {
 type: "Selective (Broth)", baseVolume: 1000,
 composition: { Peptone: 10, Glucose: 5, YeastExtract: 5 }
}

};
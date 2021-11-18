const Latam = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({ 
  empresa: Latam,
  totalVoosDomesticos: 
    db.voos.count({ "empresa.nome": Latam, natureza: "Doméstica" }),
});

db.resumoVoos.findOne({ empresa: Latam }, { _id: 0 });

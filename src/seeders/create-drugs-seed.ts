import { Seeder } from "typeorm-seeding";
import { Drug } from "./../entities/Drug";

export default class CreateDrugs implements Seeder {
  public async run(factory: any): Promise<any> {
    await factory(Drug)().create({ name: "Abidec multivitamin drops" });
    await factory(Drug)().create({ name: "Butramirate 7.5mg syrup" });
    await factory(Drug)().create({ name: "Cyproterone acetate" });
    await factory(Drug)().create({ name: "Dytide capsules" });
    await factory(Drug)().create({ name: "Ezetol 10mg tablets" });
    await factory(Drug)().create({ name: "Fusidic acid betamethasone" });
    await factory(Drug)().create({ name: "Gyno-daktarin" });
    await factory(Drug)().create({ name: "Histalix syrup" });
    await factory(Drug)().create({ name: "Ispahghula husk" });
    await factory(Drug)().create({ name: "Janumet" });
    await factory(Drug)().create({ name: "Klaracid 500 mg" });
    await factory(Drug)().create({ name: "Lymecycline 408 mg capsules" });
    await factory(Drug)().create({ name: "Mysimba" });
    await factory(Drug)().create({ name: "Nutriflex peri solution" });
    await factory(Drug)().create({ name: "Ozempic" });
    await factory(Drug)().create({ name: "Pyralex solutions" });
    await factory(Drug)().create({ name: "Ryzodeg" });
    await factory(Drug)().create({ name: "Sustanon 250mg" });
    await factory(Drug)().create({ name: "Tylex tablets" });
    await factory(Drug)().create({ name: "Utrogestan vaginal 200mg" });
    await factory(Drug)().create({ name: "Voltarol" });
    await factory(Drug)().create({ name: "Wockhardt dual action" });
    await factory(Drug)().create({ name: "Xeplion" });
    await factory(Drug)().create({ name: "Zyloric 300mg tablets" });
    await factory(Drug)().create({ name: "Amoxicillin" });
    await factory(Drug)().create({ name: "Gilenya" });
    await factory(Drug)().create({ name: "Paracetamol" });
    await factory(Drug)().create({ name: "Zoloft" });
    await factory(Drug)().create({ name: "Entresto" });
    await factory(Drug)().create({ name: "Otezla" });
    await factory(Drug)().create({ name: "Ibuprofen" });
    await factory(Drug)().create({ name: "Hydroxychloroquine" });
    await factory(Drug)().create({ name: "Invokana" });
    await factory(Drug)().create({ name: "Januvia" });
    await factory(Drug)().create({ name: "Kevraza" });
    await factory(Drug)().create({ name: "Rybelsus" });
    await factory(Drug)().create({ name: "Xanax" });
    await factory(Drug)().create({ name: "Tramadol" });
    await factory(Drug)().create({ name: "Secukinumab" });
    await factory(Drug)().create({ name: "Metformin" });
    await factory(Drug)().create({ name: "Ciallis" });
    await factory(Drug)().create({ name: "Dupixent" });
    await factory(Drug)().create({ name: "Gabapentin" });
    await factory(Drug)().create({ name: "Humira" });
    await factory(Drug)().create({ name: "Ciprofloxacin" });
    await factory(Drug)().create({ name: "Prozac" });
  }
}

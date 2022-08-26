import { AppDataSource } from "./../constants/data-source";
import { Drug } from "./../entities/Drug";

export class DrugService {
  //   Get all drugs
  async getAllDrugs(): Promise<any> {
    const drugs = await AppDataSource.getRepository(Drug).createQueryBuilder("drug").cache(true).getMany();

    return { drugs };
  }
}

import { ethnicities } from "@/data/ethnicities";
import { Ethnicity, GeneralHeritage } from "@/data/types";

/**
 * Service Layer (Static Data API)
 * S dng d_ liu tA-nh t` file ethnicities.ts.
 */

export const heritageApi = {
  /**
   * Ly danh sAch tt c cAc dAn tTc
   */
  async getEthnicities(): Promise<Ethnicity[]> {
    return ethnicities;
  },

  /**
   * Ly thA'ng tin chi tit mTt dAn tTc theo Slug/ID
   */
  async getEthnicityById(id: string): Promise<Ethnicity | undefined> {
    return ethnicities.find(e => e.slug === id);
  },

  /**
   * Ly danh sAch di sn chung
   */
  async getGeneralHeritages(): Promise<GeneralHeritage[]> {
    return [
      {
        name: "DAn ca vA- gim Ngh Tcnh",
        location: "ToAn t%nh Ngh An vA HA Tcnh",
        time: "Th?ng xuyAn",
        description: "Di sn vn hA3a phi v-t th `i din c a nhAn loi `c UNESCO cA'ng nh-n."
      }
    ];
  }
};

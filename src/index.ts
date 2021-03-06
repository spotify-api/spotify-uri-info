import cheerio from "cheerio";
import axios from "axios";
export default class {
  static async getData(uri: string) {
    if (!uri) throw new Error("No URI was Provided");
    try {
      const { data: res } = await axios.get(
        `https://embed.spotify.com/?uri=${uri}`
      );
      const $ = cheerio.load(res);
      let parser = $("#resource").html();
      //@ts-ignore
      return JSON.parse(parser);
    } catch (e) {
      Promise.reject("Invalid spotify URI");
    }
  }
}

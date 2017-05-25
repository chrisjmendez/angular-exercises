import { Observable } from "rxjs/Rx";

import { Point } from "./point";

export class Location {

	constructor(
		public title?: string,
		public address?: string,
		public imdb_url?: string,
		public year?: string,
		public location?: any[number]
	){}

	static fromJSON(obj) {
		const p = obj["geometry"] as Point;
		const l = obj["location"]
		return new Location(l.title, l.address, l.imdb_url, l.year, l.location)
	}

	static fromJSONArray(json:any[]): Location[]{
		console.log("Location::fromJSONArray", json);
		return json.map(Location.fromJSON);
	}
}

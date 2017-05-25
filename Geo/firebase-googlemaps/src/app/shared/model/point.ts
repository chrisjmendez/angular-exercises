export class Point {
    constructor(
        public lat?: string,
        public lng?: string
	){}

    static fromJSON({lat,lng}) {
        console.log("A", lat,lng)
		return new Point(lat,lng);
	}

	static fromJSONArray(json:any[]): Point[]{
        console.log("A")
		return json["geometry"].map(Point.fromJSON);
	}
}

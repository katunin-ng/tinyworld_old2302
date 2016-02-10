function saveCountry(country) {
	var conn = $.db.getConnection();
	var sql = 'INSERT INTO "tinyworld.tinydb::tinyf.country" VALUES(?, ?)';
	var stmt = conn.prepareStatement(sql);
	stmt.setNString(1, country.name);
	stmt.setNString(2, country.partof);
	stmt.execute();
	conn.commit();
}

var body = $.request.body.asString();
var country = JSON.parse(body);

saveCountry(country);

$.response.status = $.net.http.CREATED;

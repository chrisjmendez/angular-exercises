module.exports.models = {
	connection: 'mysqlAdapter',
	//This means that the developer has to manually create tables, schema, collection, etc
	migrate: 'safe'
	//Automatic table, schema, and collection creation but keep existing data
	//migrate: 'alter'
	//Drop the schema each time and rebuild it when you lift Sails
	//migrate: 'drop'
};
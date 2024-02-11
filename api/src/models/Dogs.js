const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	// defino el modelo
	sequelize.define(
		"Dogs",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
			imagen: {
				type: DataTypes.STRING,
				allowNull: false
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			height: {
				type: DataTypes.STRING,
				allowNull: false
			},
			life_span: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{ timestamps: false }
	);
};

const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	// defino el modelo
	sequelize.define(
		"Dogs",
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			height: {
				// format
				// xx - xx
				type: DataTypes.STRING(7),
				allowNull: false
			},
			weight: {
				// format
				// xxx - xxx
				type: DataTypes.STRING(9),
				allowNull: false
			},
			life_span: {
				// format
				// xx - xx years
				type: DataTypes.STRING(13),
				allowNull: false
			}
		},
		{ timestamps: false }
	);
};

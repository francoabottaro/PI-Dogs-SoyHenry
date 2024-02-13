const { DataTypes } = require("sequelize");

module.exports = sequelize => {
	sequelize.define(
		"Temperaments",
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{ timestamps: false }
	);
};

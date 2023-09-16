// const Sequelize = require("sequelize");

// class WishList extends Sequelize.Model {
//   static init(sequelize) {
//     super.init(
//       {
//         id: {
//           type: Sequelize.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//           allowNull: false,
//         },
//       },
//       {
//         sequelize,
//         modelName: "wish_list",
//         freezeTableName: true,
//         timestamps: true,
//         createdAt: true,
//         updatedAt: false,
//         underscored: true,
//         charset: "utf8mb4",
//         collate: "utf8mb4_general_ci",
//       }
//     );
//   }
//   static associate(db) {
//     //관계 설정
//     db.WishList.belongsTo(db.User, {
//       foreignKey: {
//         name: "user_id",
//         unique: false,
//         allowNull: false,
//       },
//       targetKey: "id",
//       onDelete: "cascade",
//     });
//     db.WishList.belongsTo(db.Product, {
//       foreignKey: {
//         name: "product_id",
//         unique: false,
//         allowNull: false,
//       },
//       targetKey: "id",
//       onDelete: "cascade",
//     });
//   }
// }

// module.exports = WishList;

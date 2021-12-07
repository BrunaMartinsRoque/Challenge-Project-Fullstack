module.exports = (sequelize,DataTypes)=>{

  const users = sequelize.define('users',
      {
          id:{
              type:DataTypes.INTEGER,
              primaryKey:true,
              autoIncrement:true
          },
          name:DataTypes.STRING,
          email:DataTypes.STRING,
          message:DataTypes.TEXT,
          
          //campos informativos de datas de criação e modificação
          createdAt:{
              field:'create_at',
              type:DataTypes.DATE
          },
          updatedAt:{
              field:'update_at',
              type:DataTypes.DATE
          },
      },
      
      {
          tableName:'users'
      }
  )

  return users
};
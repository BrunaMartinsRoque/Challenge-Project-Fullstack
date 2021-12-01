module.exports = (connection,DataTypes)=>{

    const Users = connection.define('Users',
    {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(200),
        },
        email: {
          type: DataTypes.STRING(200),

        },
        message: {
            type: DataTypes.STRING(800),
  
          },
    },
        
        {
            tableName:'users'
        },
        
    );
    
    return Users;
};
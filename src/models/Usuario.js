module.exports = (sequelize,DataTypes)=>{

    const Users = sequelize.define('User',
        {
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            name:DataTypes.STRING,
            email:DataTypes.STRING,
            message:DataTypes.TEXT,
            
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

    return Users
};
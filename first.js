console.log("Hitesh")


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>Hello From Ejs File</h3>
<label>Select Gender</label>

 <% basic.forEach((element,i) => { %>
    <input type="<%= element.field_name %>"  name="<%= basic.option_name %>" value="<%= basic.option_value %>" id="<%= basic.option_idf %>" >
    <% }) %>
</body>
</html>

const express =require('express');
const app=express();
const pool=require('./db')
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");


app.get("/",async(req,res)=>{
    const [basic] = await pool.execute(`select field_name,option_value,option_name,option_idf 
                                       from masters
                                       inner join master_options
                                       on masters.m_id=master_options.m_id 
                                       where masters.m_id=1`);
    res.render("first",{
               basic
    })
})



app.listen(process.env.PORT||5000,()=>{
    console.log(`Server started At Port ${process.env.PORT}`);
    });



create database job_application_master;
use job_application_master;

create table masters(m_id int auto_increment primary key,
                   field_name varchar(50) not null,
                   creater_at timestamp default  current_timestamp);
                   
                   insert into masters(field_name) values("radio");
create table master_options(option_id int auto_increment primary key,
							m_id int not null,
                            option_value varchar(100) not null,
                            option_name varchar(100) not null,
                            option_idf varchar(100) not null,
                            foreign key(m_id) references masters(m_id));
                            
                            
SET FOREIGN_KEY_CHECKS = 0;                
                            
insert into master_options(m_id,option_value,option_name,option_idf) values(1,"Female","Gender","Female"),(1,"Male","Gender","Male");
truncate table master_options;
select * from master_options;
select * from masters;

select field_name,option_value,option_name,option_idf 
from masters
inner join master_options
on masters.m_id=master_options.m_id
where masters.m_id=1;


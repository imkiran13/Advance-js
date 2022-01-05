let users=[
    {"name":"akshay"},
    {"name":"rajveer"},
    {"name":"nishigandha"},
    {"name":"komal"},
    {"name":"rohan"},
    {"name":"kiran"},
    {"name":"shivam"}
]
//using map rxjs operator
let userData=users.map(user=>{
   // user.marks=Math.random().round()*100;  floor(Math.random())
   // user.marks=Math.round(Math.random())*100;
   user.marks=Math.floor(Math.random() * 100) + 1;
   return user;
})

// document.getElementById("map").innerHTML = JSON.stringify(userData, null);
var tableData;

userData.forEach((data)=>{
   tableData="<tr> <td> "+data.name+" </td> <td>"+data.marks+"</td></tr>";
   $("#mapData").append(tableData);
})

//using filter select candidate above 60% 
let selectedCandidate=userData.filter(user=>{
   if(user.marks>60){
       return user;
   }
})
selectedCandidate.forEach((filterdata)=>{
   filtertable="<tr> <td> "+filterdata.name+" </td> <td>"+filterdata.marks+"</td></tr>";
   $("#filterData").append(filtertable);
})
//rdeuce create team for selected candidates 
let teamMembers=selectedCandidate.reduce((teamMembers,user)=>{
   teamMembers.push(user);
   return teamMembers;
},[]);
teamMembers.forEach((reducedata)=>{
   reducetable="<tr> <td> "+reducedata.name+" </td> <td>"+reducedata.marks+"</td></tr>";
   $("#reduceData").append(reducetable);
})
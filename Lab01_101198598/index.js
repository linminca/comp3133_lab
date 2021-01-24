const fs = require('fs');
const csv = require('csv-parser');

//a.	Delete canada.txt and usa.txt if already exist using fs module 
if(fs.existsSync('canada.txt')){
    fs.unlink("canada.txt", (err)=>{
        console.log("canada.txt Deleted")
    })
}

if(fs.existsSync('usa.txt')){
    fs.unlink("usa.txt", (err)=>{
        console.log("usa.txt Deleted")
    })
}

//b.	Filter data of Canada and write data to canada.txt
//c.	Filter data of United States and write data to usa.txt
fs.writeFile("canada.txt","country,year,population", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Canada Write Succes")
    }
   
})

fs.writeFile("usa.txt","country,year,population", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("USA Write Succes")
    }
   
})


fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (row) => {
    
   if(row.country == 'Canada'){
       var data = `\n${row.country},${row.year},${row.population}`
    fs.appendFile("canada.txt", data,(err)=>{
        if(err){
            console.log(err)
        }
    })
   }

   if(row.country == 'United States'){
    var data = `\n${row.country},${row.year},${row.population}`
    fs.appendFile("usa.txt", data,(err)=>{
        if(err){
            console.log(err)
        }
    })
    }
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });




  
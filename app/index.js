// app/index.js
var PImage = require('pureimage');
var fs = require('fs');
var fnt = PImage.registerFont('GreatVibes-Regular.ttf','Source Sans Pro');
var arr = [
"Aakash Voora",
"Aalekya S N",
"Aanya Jain",
"Aastha Ranjan",
"Abhinav Kalhan",
"Abhishek Chirla",
"Adhya Gunita Preetam",
"Adithi Rudrangi",
"Anish Rudrangi",
"Akshara Reddy",
"Akshay Uppal",
"Amrutha Potluri",
"Ananth Pullur",
"Ananthanarayan MS",
"Aneeka Agarwal",
"Anirv Reddy",
"Anish Kantae",
"Anusha Bhatt",
"Sai Anvita Voora",
"Anya Gupta",
"Arnav Oz Chidipi",
"Arvind Reddy Kondapalli",
"Ashwin Bikkasani",
"Awanth Talasila",
"Chahana Gadikota",
"Dev Paharia",
"Dhruv Kumar Agarwal",
"Druti Katukota",
"Edric Jony Lawrence",
"Esha Sai Lakkireddi",
"Eshaan Arora",
"Garv Gulati",
"Hala Chakravarthy Gummaraju",
"Hamsa Madhira",
"Ishaan Karthik Gollamudi",
"Sri Kalash Yedlapati",
"Kartheek Tammana",
"Keerthi Sri Gullapalli",
"Lekhya Kantheti",
"Sai Manasvi",
"Sai Venkata Medhansh",
"Moksha Chevvakula",
"Naman Agarwal",
"Poorvie Sadagopan",
"Pranathi",
"Pratham Kudumula",
"Prathulya Valamudi",
"Prerith Boda",
"Raghav Ramasamy",
"Rewanth Talasila",
"Ria Kabra",
"Riddhi Sarker",
"Rishabh Chalalmalasetti",
"Rohit Kunta",
"Saahil Mutharaju",
"Sahas Poreddy",
"Sambhav Maheshwari",
"Sampriti Mohanti",
"Sanjith Puskuri",
"Sara Kapur",
"Venkatsai Siddesh Padala",
"Sneha Arun",
"Suhaas Sriramakrishna Singavarapu",
"Suvan Kumar Shee",
"Tanmaee Ledalla",
"Trishang Agarwal",
"Ujwal Komaravolu",
"Vaishant Reddy Kottam",
"Varsha K",
"Varsha Sagi",
"Vedant Dhanyamraju",
"Vedika Manghnani",
"Vignav Ramkumar",
"Vishnu Harshit Chevvakula"
]
fnt.loadSync();
for(i = 0; i<arr.length; i++){
  renderText(arr[i]);
}
renderText('textSync');
function renderText(fileName) {
    var img = PImage.decodeJPEG(fs.readFileSync("Certificate.jpg"));
    var ctx = img.getContext('2d');
    ctx.fillStyle = "#ffffff";
    ctx.setFont('Source Sans Pro',72);
    ctx.fillText(fileName,400,600);
    PImage.encodePNG(img, fs.createWriteStream("certificates/"+fileName + ".png"), function(err) {
        console.log("wrote out the png file to "+ fileName +".png");
    });
}

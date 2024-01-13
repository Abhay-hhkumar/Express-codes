class StudentController {
    static set_cookie =(req,res)=>{

        // below cookie username will stay in cookie until we close the browser
        // i.e this cookie will get expire suddenly after you close the browser
        res.cookie("username","aman");

        // session cookie (it get deleted automatically after time expire it doesnot matter your browser is open or closed)
        // below cookie age will stay in cookie only till 5 secondes it doesnot matter your browser is still open or closed
        res.cookie("age",22, {maxAge:30000});
       
        res.send("cookie set...")
    }

    static get_cookie =(req,res)=>{
        console.log(req.cookies)
        res.send("cookie get...")
    }
    static delete_cookie =(req,res)=>{

        // here we delete the specific cookie property(i.e username)
        res.clearCookie("age");
        res.send("cookie deleted...")
    }

}

export default StudentController;

class StudentController {

       // we create variable in session and store a value in this created variable
    static session_example = (req,res)=>{

         // we create a new session variable here and we access the session variable from different function
         req.session.device="Mobile"

         //now
        if(req.session.count){
            // if the count variable present in session then everytime this function run we increment the count variable by 1
            // value of 'count' will be mentain till the session not get expire
            req.session.count++
        }else{
            // if count variable is not present in session the we create a variable by name "count" and we initialize it with 1
            req.session.count = 1
        }

        res.send(`Count: ${req.session.count}`);

        
    }

    // we access the variable  created in session
    static get_session_data =(req,res)=>{
        if(req.session.device){
            res.send(`Device: ${req.session.device} Count: ${req.session.count}`)
        }else{
            res.send("Session data is not found...")
        }
    }
}
export default StudentController;
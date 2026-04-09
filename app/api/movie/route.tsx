export async function POST(request:Request){
    const body=await request.json();
    try{
        const response=await fetch("http://localhost:3000/movie",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(body),
            });

        const data=await response.json();
        return Response.json(data);
       }
       catch(error){
        return Response.json({error:"Failed to fetch movie details"});
        }
    }
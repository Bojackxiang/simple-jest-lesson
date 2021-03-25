const response = {
    data: {
        title: 'mock test title'
    },
    success: false
}



export default {
    get(url){
        return new Promise((resolve, reject) => {
            if(!response.success) reject(response)
            resolve(response)
        }) 
    }
        
}
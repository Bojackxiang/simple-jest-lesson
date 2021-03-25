const response = {
    data: {
        title: 'mock test title'
    }
}



export default {
    get(url){
        return new Promise((resolve, reject) => {
            resolve(response)
        })
    }
        
}
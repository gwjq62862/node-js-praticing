
const apiUrl = new URL('https://api.trysnaplog.com:8080/v1/users/profile?role=developer&active=true#settings')

console.log(
   apiUrl.href,
    apiUrl.host,
    apiUrl.hostname,
    apiUrl.protocol,
    apiUrl.search,
    apiUrl.searchParams,
    apiUrl.port,
    apiUrl.hash,
    apiUrl.pathname,
)




const rolevalue=apiUrl.searchParams.get('role')
const activeValue=apiUrl.searchParams.get('active')
apiUrl.searchParams.append('region','myanmar')

console.log(apiUrl.toString())




//task 3 
const baseUrl=new URL('http://localhost:3000')
baseUrl.pathname = '/api/v1/posts'

baseUrl.search = 'page=1&limit=10'


console.log(baseUrl.toString());



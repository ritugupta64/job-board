const endPointURL = 'http://localhost:9000/graphql'

export async function fetchWrapper(query){
    const fetchData = await fetch(endPointURL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({query})
    })
  const convertJSon = await fetchData.json()
  return convertJSon.data
}



export async function loaded(){
  const q = `{
    jobs{
      id
      title
      company{
        id
        name
      }
    }
  }`
  const queryData = await fetchWrapper(q)
  return queryData.jobs
}
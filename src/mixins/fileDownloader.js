import axios from "axios";

export default{
    methods: {

        downloadFile(fileLink) {
            // console.log(fileLink.toString())
            const url = fileLink.toString()
      
            axios({
              method: 'get',
              url,
              responseType: 'arraybuffer',
            })
            .then((response) => {
              const title = fileLink.split('/').pop()
              const url = window.URL.createObjectURL(new Blob([response.data]))
              const link = document.createElement('a')
      
              link.href = url
              link.setAttribute('download', title)
              document.body.appendChild(link)
              link.click()
            })
            .catch((e) => console.log(e))
          },


        downloadNewFile(file, fileURL, linkname, route){
            // console.log(linkname, route)

            axios({
                method: 'post',
                url: `https://termezmuseum.daac.uz/api/v1/about/${linkname}/download`,
                data:{
                    document: file
                },
                responseType: 'arraybuffer',
            })
            .then(resp => {
                const title = fileURL.split('/').pop()
                const url = window.URL.createObjectURL(new Blob([resp.data]))
                const link = document.createElement('a')

                link.href = url
                link.setAttribute('download', title)
                document.body.appendChild(link)
                link.click()
                setTimeout(()=>{
                    route.go()
                }, 1500)
                // console.log(link, title)
            })
        }
    }
}
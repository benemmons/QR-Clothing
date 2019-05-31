export default {
    title: 'QR-Clothing',
    description: "Redefining the capabilities of 'fashion' through abstract, internet-based techwear. The NQX Line gives anyone who scans your clothing the ability to send you an anonymous message. Prepare for unparalleled levels of transparency in a real-world setting.",
    dest: '/build',
    htmlContext: {
        head: {
          links: [
            {
              rel: 'stylesheet',
              href:
                'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css',
            },
          ],
          meta: [
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
              }
          ]
        },
      },
}

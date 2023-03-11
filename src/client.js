import sanityClient from '@sanity/client'
import imageUrlBuilder  from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'tb636hzg',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skYSxJmFV8uutrn39RM5GYGmtM72eFqJZVBvWFxxWRGCNcjcBE53gM9BFHKSqLncosO6QVNNZwSbMyh5gHQGefyddmjDWRPHdEMzWgUmlPKvNEeDAYli0tICfVSLHTPyC8rcjD7BfZUPXM7vW3n8EvficRZr5MD6Rs8qlCGCVxN8Ytb5CHoU',
    

})


const builder = imageUrlBuilder(client)


export const urlFor = (source) => builder.image(source);
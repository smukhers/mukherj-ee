## Development
Can be run as a local application. From the project root, run
```sh
npm install
npm run start
```
This will start a local ndoe server which hosts the content. The site can then be accessed at localhost:3000.

## Deployment
Currently, the content is hosted on [netim](netim.com).

```sh
npm run build
```
1. Run the above command will process all the files into a deployable build artifact, and spit out some stats on package sizes.
1. Find the email in your personal inbox containing the FTP server credentials
1. Use FileZilla to create a connection to the FTP server
1. Upload the contents of the `build/` dir into the FTP server, under the `public_www` path

## Future work
- Configure robots.txt (and ads.txt?)
- Create a separate page which can host blog posts
- Add some more components and interactive elements
- Set up a CDN to deliver static content
- RSS feed?

aws s3 sync . s3://lucas-weber-om-client --acl public-read --exclude ".git/*"
open http://lucas-weber-om-client.s3-website-us-west-2.amazonaws.com/

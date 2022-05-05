let aws_keys = {
    s3: {
        region: 'us-east-2',
        accessKeyId: "AKIAQ42CO2WRMS2E3HVT",
        secretAccessKey: "ksHsxnNXnSTIHTLSrew4UOCR2fCMRmhIBWZN",
        //apiVersion: '2006-03-01',
    },
    dynamodb: {
        apiVersion: '2012-08-10',
        region: 'us-east-1',
        accessKeyId: "",
        secretAccessKey: ""
    },
    rekognition: {
        region: 'us-east-2',
        accessKeyId: "AKIAQ42CO2WRMS2E3HVT",
        secretAccessKey: "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" 
    },
    translate: {
        region: 'us-east-1',
        accessKeyId: "AKIAQ42CO2WRGNKOQMUB",
        secretAccessKey: "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" 
    },
    cognito:{
        UserPoolId: '',
        ClientId: ''
    }
}
module.exports = aws_keys
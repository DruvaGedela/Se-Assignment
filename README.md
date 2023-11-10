# Se-Assignment

### AWS Process for Each Step in Deploying a Serverless Application

**Cloud9 Environment**

1. Go to the AWS Management Console and select **Cloud9**.
2. Click **Create Environment** and select the **Environment Type** and **Template**.
3. Click **Next** and configure the environment settings.
4. Click **Create Environment**.

**DynamoDB Table**

1. Go to the AWS Management Console and select **DynamoDB**.
2. Click **Create Table**.
3. Enter the **Table Name** and **Primary Key**.
4. Configure the table settings and click **Create Table**.

**Lambda Function**

1. Go to the AWS Management Console and select **Lambda**.
2. Click **Create function**.
3. Select **Author from scratch**.
4. Enter the **Function Name** and **Runtime**.
5. Click **Create function**.
6. In the function editor, write code to interact with DynamoDB.
7. Click **Deploy**.

**API Gateway**

1. Go to the AWS Management Console and select **API Gateway**.
2. Click **Create API**.
3. Select **HTTP API** or **REST API** and click **Create API**.
4. Click **Resources** and click **Create Resource**.
5. Enter the **Resource Path**.
6. Click **Create Resource**.
7. Click the **Methods** tab and click **POST**.
8. Click **Integrate** and select **Lambda Function**.
9. Select the **Lambda Function** you created in the previous step.
10. Click **Save**.
11. Click **Deploy API**.

**Testing**

1. Invoke the Lambda function from the Lambda Console.
2. Send a POST request to the API Gateway endpoint using curl or Postman.


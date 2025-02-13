<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            width: 80%;
            max-width: 600px;
            margin: 20px;
            overflow: hidden;
        }

        .header {
            background-color: #007bff;
            color: #fff;
            text-align: center;
            padding: 2rem;
        }

        .header h1 {
            margin: 0;
            font-size: 2.5rem;
        }

        .content {
            padding: 2rem;
            color: #333;
            line-height: 1.6;
        }

        .content p {
            margin-bottom: 1.5rem;
        }

        .button {
            display: inline-block;
            padding: 1rem 2rem;
            background-color: #28a745;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }

        .button:hover {
            background-color: #218838;
        }

        .footer {
            text-align: center;
            padding: 1rem;
            background-color: #f0f0f0;
            color: #777;
            font-size: 0.8rem;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1> {{ $user_name }} Welcome to Ethio-Tour!</h1>
        </div>
        <div class="content">
            <p>Dear {{ $user_name }},</p>
            <p>Thank you for joining Ethio-Tour, your gateway to exploring the beautiful landscapes and rich culture of
                Ethiopia!</p>
            <p>We're excited to have you as part of our community. Get ready to discover amazing destinations, plan your
                dream trips, and create unforgettable memories.</p>
        </div>
        <div class="footer">
            &copy; {{ date('Y') }} Ethio-Tour. All rights reserved.
        </div>
    </div>
</body>

</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Certificate of Achievement</title>
    <style>
        .container {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f9;
        }
        .certificate-container {
            border: 10px solid #4CAF50;
            padding: 50px;
            max-width: 700px;
            background-color: #fff;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
        .certificate-header {
            text-align: center;
            margin-bottom: 30px;
        }
        .certificate-header h1 {
            margin: 0;
            font-size: 2.5rem;
        }
        .certificate-header h2 {
            margin: 0;
            font-size: 1.5rem;
            color: #666;
        }
        .certificate-body {
            text-align: center;
            margin-top: 40px;
        }
        .certificate-body p {
            font-size: 1.25rem;
            margin: 10px 0;
        }
        .certificate-issuer {
            margin-top: 50px;
            text-align: center;
        }
        .certificate-issuer p {
            margin: 0;
            font-size: 1rem;
        }

        .btn-primary {
            background-color: #4CAF50;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="certificate-container">
            <div class="certificate-header">
                <h1>Certificate of Achievement</h1>
                <h2>This is to certify that</h2>
        </div>
        <div class="certificate-body">
            <p><strong>{{ $user->name }}</strong></p>
            <p>has successfully completed</p>
            <p><strong>{{ $course->title }}</strong></p>
            <p>on this day {{ $course->created_at->format('F d, Y') }}</p>
        </div>
        <div class="certificate-issuer">
            <p>Presented by</p>
            <p><strong>CodeLab</strong></p>
            <p>CodeLab</p>
        </div>
        </div>
        <button onclick="window.print()" class="btn-primary">Download Certificate</button>
    </div>
</body>

</html>
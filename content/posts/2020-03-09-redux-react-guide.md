---
date: 2020-03-09
title: 'How to set-up a professional email for your domain (for free)'
template: post
thumbnail: '../thumbnails/css.png'
slug: redux-react-guide
categories:
  - Code
tags:
  - redux
  - react
---

We are going to use Zoho - https://www.zoho.com/mail/ - to create a 5GB free email account. Then we have to update the domain records to connect to Zoho. And, lastely, verify the domain name to avoid emails to end up on the span folder.
This process whole process it will take around 30 to 60 mins.

# How to do it

## 1st: Set-up a Zoho Account

Note: make sure you have access to the phone you are going to use to sign up for a new account.

1. Sign up to email Zoho account ("For ever Free Plan") - https://workplace.Zoho.eu/orgsignup.do
1. Type your domain name and "add" it
1. Fill out the registration form (requires phone number)
1. Enter the verification code (sent to your phone)
   - Note: the code is valid only for **3 minutes**. If you missed this oportunity, you have to sign in - https://accounts.Zoho.eu/signin - with your phone number and your password.
   - Optional: You can turn on "Two Factor Authentication" after addind the mobile verification code.
1. Lastly, select the option "Add your existing domain for Email Hosting and create domain-based address." and click on "Add Domain". After your domain has been added successfully, you need to click on "Verify your domain". On the next page you can choose your "domain's DNS Manager" from the list or choose "Others..." if you don't find your in the list. Then you have 3 methods allowed for the verification of ownership, but for this tutorial we choose "**TXT Method**", click on the green button on bottom "Verify by TXT" and we are ready to go to the next steps.

-- IMAGE TXT RECORDS --

## 2nd: Netlify - Register DNS Record and verify it on Zoho

1. Open a new Tab and login in to your accound at Netlify - https://www.netlify.com/
1. Go to "Domains" and select the desired domain
1. On "DNS settings" click on "Add new record". It will open a new box:
   - In "Record type" choose "TXT"
   - In "Name" leave empty or with "@"
   - In "Value" you must copy and paste the code you got from Zoho, on the 1st steps. For our website, the value is **Zoho-verification=zb41556708.zmverify.Zoho.eu**
   - Try to add "300" in "TTL in seconds (optional)" or leave it as it is and click on "Save".
   - Go back to the Zoho tab and click on the green button "Verify by TXT".
     - If everything went well, you should now see the message: "Congratulations! Your domain example.com has now been verified."
1. Let's continue to the next steps.

-- IMAGE DNS RECORD --

## 3rd: Zoho email creation

1. In the same Tab add your desired user, for ex: "info" to get an account like "info@example.com"
1. Click on "Proceed to Add Users" and fill out the form.
   - Note: You have to choose again "info" in order to create a user for your domain's email
1. Now you can just click on "Skip"
1. You can see now your "MX Records of Zoho" table and, on the next step, we are going to configure the email delivery on Netlify.

## 4th: Configure Email Delivery - Start receiving emails

1. Go back to your Netlify tab and on "Domains > DNS settings" click again on "Add new record"
1. Choose "MX Record" on "Record type" and set the "Priority" and "Value" (address) accordingly to the Zoho table and click "Save"
1. Repeat the previous step more 2 times to add the other MX Records in your Netlify account.
   - Note: You must remove (delete) any other MX records other than the above 3 records. In case you have previous providers MX records, then you may not receive emails in Zoho.
1. After adding the MX records, you need to wait some time for these new records "propagate" on the internet. (This can take from a few minutes up to 24h)

-- IMAGE MX RECORDS POINTING TO ZOHO --

## 5th: Get a "Spam free" domain with SPF/DKIM

QUOTE
**SPF/DKIM**
Email spoofing is forging an email so that the email appears to be sent by someone, whereas the actual source might be someone else. To ensure that valid emails from your domain get delivered to your users, and spoofed emails from other spammers are identified by the other email services, we recommend you to add SPF records and DKIM records for your domain.
/QUOTE

1. Let's start by setting the SPF (Sender Policy Framework)
1. Go to your Netlify "DNS settings" and "Add new Record". Choose "TXT record" and just copy and paste the "TXT Value" you got on Zoho. In our case is "v=spf1 include:zoho.eu ~all" - QUOTE — In addition to SPF records, you can add DKIM signature for your domain, to ensure better email deliverability. Using a DKIM signature also ensures that valid emails sent from your domain, using Zoho, are not classified as Spam at the receivers end.
   /QUOTE
1. Click on "Proceed to Conigure DKIM"
1. Now you are on a different interface and you can see yout "Domain" and "Action". In action click on the pencil to "Edit" the value. Now click on "Add Selector" and choose "email" in the "Selector Name" and click "Save.
1. Copy the "TXT Value" and let's go again to Netlify, click on "Add new record" to add this new "TXT Record" and paste the "TXT Value" from Zoho and add "300" on TTL.
   - Note: You have to wait up to 45 mins for the changes to propagate. (In my case was a matter of a few minutes.)
     -- IMAGE txt-record-DKIM --
1. Go back to the Zoho tab and click on "Verify" until it gets verified.
   -- IMAGE dkim-enabled --
1. After the verify, click on "Back to Setup".
1. Now you can install the Zoho Mail App. - This App is designed to check your emails on the go, in the same way you check your email from your webmail. You can create or accept events, set up reminders, browse through your attachments with this app.
    <a target="_blank" href="https://itunes.apple.com/us/app/zoho-mail-email-calendar-contacts/id909262651?ls=1&amp;mt=8">
   <img src="https://css.zohostatic.eu/zmail/ac/s60.2/cpanel/img/appstore.png"></a>
   <a target="_blank" href="https://play.google.com/store/apps/details?id=com.zoho.mail">
   <img src="https://css.zohostatic.eu/zmail/ac/s60.2/cpanel/img/googleplay.png">
   </a>

## Bonus

- You get a new way of reading and sending emails
- You can get a free "SSL/TLS certificate" with "Let's Encrypt" - https://letsencrypt.org/ - to have your site secure, with HTTPS (for free)
- another feature

# Final thoughts

We have been using this method for 4 account at https://mediacreators.studio and so far, everything is working fine, the systems is "viรกvel" and with fast notifications. We had seted-up a forwarding system and we get also a copy of every email on a gmail account.

![Another image](/images/uploads/isabella-juskova.jpg)

---
title: SSH
parent: /courses/git
date: 2022-10-14
modified: 2022-10-17
abstract:
  In this chapter we will cover what the Secure Shell (SSH) Protocol is and
  how to generate and configure the necessary keys to connect to remote servers.
---

## What is SSH

> You can connect to remote repositories either via HTTPS or SSH.
> In this course, we will be using SSH.

SSH is Secure Shell Protocol which provides a secure channel over an unsecured network.
Using this protocol will let you connect and authenticate to remote servers and services.
This means that you can connect without supplying your username or personal access tokens
each time you access it.

## SSH Keys

An SSH key comes in a pair. A public and private key. The public key is given to the server
and the private key stays safely and unseen from anyone in your `~/.ssh` directory.

> :bulb: It is a good idea to back up your private and public keys so that you have them if your hard drive crashes.
> Do not back them up using Git. Go old school in this case.

Now think of connecting to your remote repository with a connection with a fancy pad lock on it.
The padlock requires two keys to open it. One from you and one from the server. The server authenticates
with your public key and your computer with your private key. There is some funky decryption involved
with these two keys.

That means that in order to open your connection successfully, you will need to have generated an SSH key.
[Read more][generate-key-ssh] about generating a new SSH key and adding it to the ssh-agent.

### Generate a key pair

1. Run the command below using the public email address you configured for Git.
1. You can store the key using the default path and filename offered (so just press enter).\
   This is usually in `~/.ssh` or `/Users/You/.ssh/`.
1. At the prompt, enter a passphrase to be used as your password.
   Enter this again after the second prompt.

```bash:title=command
# If your system supports the Ed25519 algorithm run this:
ssh-keygen -t ed25519 -C "you@email.com"

# Alternatively, run this:
ssh-keygen -t rsa -b 4096 -C "you@email.com"
```

```bash:title=output
❯ ssh-keygen -t ed25519 -C "you@email.com"
Generating public/private ed25519 key pair.
Enter file in which to save the key (/Users/me/.ssh/id_ed25519):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /Users/me/.ssh/id_ed25519
Your public key has been saved in /Users/me/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:bOVPOaefpbPTm2BcFprPGmPVWDx+98vGYo9f4X+oMuI you@email.com
The key's randomart image is:
+--[ED25519 256]--+
|                 |
|               . |
|          .    oo|
|       . o   .+o+|
|        S . +oo*+|
|       .   o.+B =|
|            oB.*+|
|        . o o+@*B|
|       .E. oo+X@+|
+----[SHA256]-----+
```

```bash:title=output
❯ tree ~/.ssh
/Users/me/.ssh
├── id_ed25519      <-- private key
├── id_ed25519.pub  <-- public key
└── known_hosts     <-- SSH fingerprints of machines you've logged into
```

### Your private key

Back this up and **NEVER** share it with anyone no matter how nicely they ask.
Out of curiosity, this is what a private key can look like:

```bash:title=output
❯ cat ~/.ssh/id_ed25519
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACAx2FZ4njWeNwIwVwcUaAfIoTFfURy3leu+s4NWC8vCyQAAAJC7BeAvuwXg
LwAAAAtzc2gtZWQyNTUxOQAAACAx2FZ4njWeNwIwVwcUaAfIoTFfURy3leu+s4NWC8vCyQ
AAAEBD0h0+hzwa9IcQc+urhtQbO/B1TrLZcRfdZ7Rb+L+zAjHYVnieNZ43AjBXBxRoB8ih
MV9RHLeV676zg1YLy8LJAAAADXlvdUBlbWFpbC5jb20=
-----END OPENSSH PRIVATE KEY-----
```

### Configure public key

```bash:title=output
❯ cat ~/.ssh/id_ed25519.pub
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDHYVnieNZ43AjBXBxRoB8ihMV9RHLeV676zg1YLy8LJ you@email.com
```

Copy the whole output from `ssh-<algorithm>` to your machine name or email address and paste it into your remote server
or service SSH section. In order to find out more, you should read the docs for your server or service.
Feel free to ask questions in the comment box below.

## Recap

In this video you will:

- learn the basics & importance of SSH including how it works.
- set up public and private keys.
- learn how to connect and administer remote servers and transfer files.
- see real examples of connecting to servers via SSH.

In summary, SSH or more specifically connecting to remote servers with SSH, is an incredibly useful tool to help you administer
the resources that host your web sites and apps.
You can also use it to transfer your local web development project to a remote server once it is ready to be published.

`youtube:https://www.youtube.com/embed/v45p_kJV9i4`

---

## Chapter objectives

You should now be able to:

:white_check_mark: See what SSH keys you have on your computer.\
:white_check_mark: Generate a new SSH key **with a passphrase** if you don't already have one.\
:white_check_mark: Add your public SSH key to your remote (GitHub/GitLab/BitBucket) account(s).

---

## References

- [About SSH][about-ssh]
- [Generating a new SSH key and adding it to the ssh-agent][generate-key-ssh]
- [Troubleshooting SSH][troubleshooting-ssh]

[about-ssh]: https://docs.github.com/authentication/connecting-to-github-with-ssh/about-ssh
[generate-key-ssh]: https://docs.github.com/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
[troubleshooting-ssh]: https://docs.github.com/authentication/troubleshooting-ssh

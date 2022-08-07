---
layout: "../../layouts/BlogPost.astro"
title: "Bye VSCode!"
description: "nvim + tmux = godmode."
publishDate: "08 Aug 2022"
heroImage:
  src: "/assets/blog/nvim-tmux-godmode.webp"
  alt: "Cat typing fast on the computer"
---

> Everything said about VSCode also applies to other IDEs

Like majority of developers out there, I used VSCode. And I loved it! And just like them, I had also heard of this terminal based code editor called `vim`.
And well, it's such a pain to setup, specially for newbies who don't properly understand the terminal.  
There's shit ton of plugins, completely different keyboard shortcuts, and all of that can be customized which means there's no 1 standard "tutorial" to learn this.  

I have thrice failed to setup `vim` precisely because of this. Everytime I went about doing it, I faced a lot of challenges and would eventually give up. I didn't even know what all features are there that I will need let alone the right plugin. Oh boy, do we take all the great features of VSCode for granted.  
So I just ended up using the `vim` plugin in VSCode itself. And to be fair, it's really good. I would highly encourage you to at least use the plugin if you don't want to use `vim`. It uplifts you as a developer.  

The past week I finally setup `vim` and got through this time. But why? Why would one go through all hassle to setup `vim` for terminal when they could keep using it inside VSCode, while keeping all the good "gui"?  

## Why `vim`?

Previously, this was the reason I would give up. I didn't have an answer. There didn't seem much to be gained from it.  

But, this time I have an answer(s). 


For one, VSCode had gotten boring. Everyone used the same editor, with same features, same plugins... with little to no customization, except for the colorscheme.  

`vim` makes your learn shit. With VSCode, most of the times you don't need to figure out how to set something up. Most features just work, or you rarely have to install a new plugin to set things up. With the terminal setup, I have to conciously configure each feature and there are usually a couple differnt options to choose from for each one of them. I have to configure the language servers for which I can use `coc` or I can manually set them up, for git operations I can use `gitui` or `lazygit` for github operations, I have to add a plugin for something as simple as a file tree and so on...  
Also, things can break here. For example, currently am unable to push to my remote branch with `gitui` for some reason, I will have to figure it out and will learn an interesting thing or two in the process. I also don't get syntax highlighting for `.astro` at the moment, will have to figure out why the tree-sitter isn't working (or whatever the problem is) and might get to learn something about tree-sitters.

Its a terrible experience having to switch around trying to find the right VSCode window, specially when you have multiple projects open. Well, with `tmux` I get to manage that seamlessly. And overall too, the experience is much more fluid. I personally hate to take my hand off the keyboard to do something with the mouse.  

Welp, it just "feels" really cool to know that when half the developers can't *exit* `vim` and majority use a GUI for simple git operations like committing and pushing, you use vim and terminal based apps for your git workflow 🤌.   


Okay so now if you got aroused by the idea of vim reading my rant, I have a few resources I found useful.

## Resources

My current setup:  
Code: `neovim`  
Multiplexer: `tmux`  
Terminal: `alacritty`  
Shell: `nushell`  
Git: `gitui`  

Find my dotfiles [here](https://github.com/niftytyro/dotfiles) (it's not much though).

- Ben Awad [gave it a go](https://youtu.be/gnupOrSEikQ)
- The Primeagen has a couple of videos on vim
- awalvie's [talk](https://youtu.be/oWoKy3Zjai0) gave me some nice ideas


(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{444:function(e,s,a){"use strict";a.r(s);var t=a(53),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"update-your-validator-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-your-validator-node"}},[e._v("#")]),e._v(" Update your validator node")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Rewards")]),e._v(" "),a("p",[e._v("Upon completing this challenge, you will be rewarded "),a("strong",[e._v("50 Desmos Tokens")]),e._v(".")]),e._v(" "),a("p",[e._v("Additionally, you will also earn more tokens the longer you keep the node running. To know more about this please reference the "),a("RouterLink",{attrs:{to:"/validators-program.html"}},[e._v("Validators program")]),e._v(".")],1),e._v(" "),a("p",[e._v("Please note that we exported the "),a("code",[e._v("morpheus-3000")]),e._v(" state at height "),a("code",[e._v("845,600")]),e._v(".")]),e._v(" "),a("p",[e._v("However, to allow all validators to have a chance of earning all the tokens by completing this challenge, we will "),a("strong",[e._v("start counting the precommits from the first block generated after 1st May 2020 00:00 UTC")]),e._v(".")])]),e._v(" "),a("p",[e._v("When a new version of Desmos is released, all validators need to update their node so that it can keep running properly. Following you will find the guide on how you can do this making sure everything is ready for when the new chain starts.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Stop the running service:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl stop desmosd\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Update the Desmos binaries:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/desmos\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch -a \n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout tags/v0.4.0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Delete the current "),a("code",[e._v("genesis.json")]),e._v(" file and download the new one:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" ~/.desmosd/config/genesis.json\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://raw.githubusercontent.com/desmos-labs/morpheus/master/genesis.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ~/.desmosd/config/genesis.json\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Verify the validity of the generated "),a("code",[e._v("genesis.json")]),e._v(" file by running the following commands:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("jq -S -c -M "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),e._v(" ~/.desmosd/config/genesis.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" shasum -a "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("256")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The output should be")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dc6bcadf360f037450066bfad89bc54c467810240ac93a317bf5f26cab80079f  -\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Reset your node to make sure everything is ready:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("desmosd unsafe-reset-all\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Open up the "),a("code",[e._v("config.toml")]),e._v(" file:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("nano")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$HOME")]),e._v("/.desmosd/config/config.toml\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Locate the "),a("code",[e._v("persistent_peers =")]),e._v(" text at line 164 and change the "),a("strong",[e._v("whole line")]),e._v(" to be:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('persistent_peers = "7fed5624ca577eb0333d3631b5e4f16ba1736979@54.180.98.75:26656,e30d9bb713d17d1e4380b2e2a6df4b5c76c73eb1@34.212.106.82:26656"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Start your new node:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl start desmosd\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])]),e._v(" "),a("p",[e._v("Now you should be able to see your node properly syncing with the other ones by executing:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("journalctl -n100 -f -u desmosd.service\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"getting-the-reward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-reward"}},[e._v("#")]),e._v(" Getting the reward")]),e._v(" "),a("p",[e._v("After you have updated your node, please follow the steps below to claim your reward:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Create a fork of this repo inside your private GitHub profile."),a("br"),e._v("\nIf you do not know how to do it, follow the "),a("a",{attrs:{href:"https://help.github.com/en/github/getting-started-with-github/fork-a-repo",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub fork guide"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Pull the fork locally:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/primer.git ~/desmos-primer\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/desmos-primer\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Make sure your fork is up to date with the Primer repository:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" upstream https://github.com/desmos-labs/primer.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch upstream\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" rebase upstream/master\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Create a file named after your GitHub username containing the public key of your validator:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("desmoscli keys show "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_key"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --bech"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("val --address"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" ./phase-4/submissions/updates/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-github-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Example")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# echo $(desmoscli keys show validator_key --bech=val --address) >> ./phase-4/submissions/updates/RiccardoM")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the "),a("a",{attrs:{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Pull Requests guide"),a("OutboundLink")],1),e._v(".")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
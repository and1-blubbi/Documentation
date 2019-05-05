(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{266:function(t,e,a){"use strict";a.r(e);var r=a(2),n=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"crosschain-migration-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crosschain-migration-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Crosschain (Migration) API")]),t._v(" "),a("p",[t._v("Crosschain (Migration) API allows to move coin or token value between chains (or in the same chain).\nThe principle of migration assumes that some amount of coins or tokens is burned in the source chain and then exactly the same amount\nis created in the destination chain"),a("br"),t._v("\nThere are several ways of value migration in Komodo platform:")]),t._v(" "),a("ul",[a("li",[t._v("MoMoM notarised migration")]),t._v(" "),a("li",[t._v("alternative migration method with notarisation of the given burn transaction by notary operators (MoMoM backup solution)")]),t._v(" "),a("li",[t._v("selfimport.")])]),t._v(" "),a("p",[t._v("The migration process consists of making an export or burn transaction in the source chain and making an import transaction for the burned value\nwhich is created in the source chain but is sent to the destination chain. Komodo validation code checks that for the import transaction\nthere exists a corresponding burn transaction and that it is not spent more than once.")]),t._v(" "),a("p",[t._v("The following migration RPC calls interact with the "),a("code",[t._v("komodod")]),t._v(" software, and are made available through the "),a("code",[t._v("komodo-cli")]),t._v(" software.")]),t._v(" "),a("p",[t._v("Requerement: the source and destination chains should have the equal CCid parameter and it should be greater than 100 (which means that chains are fungible).")]),t._v(" "),a("h1",{attrs:{id:"momom-notarised-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#momom-notarised-migration","aria-hidden":"true"}},[t._v("#")]),t._v(" MoMoM notarised migration")]),t._v(" "),a("p",[t._v("MoMoM notarised migration API allows the migration of coin or token value based on Komodo's highly scalable notarisation process when\nelected and trusted notary nodes store fingeprints (what is called MoM, merkle root of merkle roots) of assets blockchains' blocks\nin the main komodo chain and after that, fingerprints of fingerprints (what is called MoMoM, 'merkle root of merkle roots of merkle roots') are delivered back into the assets chain (as back notarisations)\n(more about the notarisation process is here: "),a("code",[t._v("<https://komodoplatform.com/komodo-platforms-new-scalability-tech/")]),t._v(">).")]),t._v(" "),a("p",[t._v("The workflow of the MoMoM value migration is following:")]),t._v(" "),a("ul",[a("li",[t._v("On the source chain user calls migrate_createburntransaction rpc and sends the burn transaction by sendrawtransaction call")]),t._v(" "),a("li",[t._v("On the source chain the user runs migrate_createimportransaction and passes to it the burn transaction and 'payouts' object in hex format\nwhich user received from the previous call")]),t._v(" "),a("li",[t._v("On the main Komodo (KMD) chain the user calls migrate_completeimpottransaction where the user passes the import transaction in hex format which was received from the previous call. On this stage the proof object for the burn transaction inside the import transaction\nis extended with MoMoM data. This allows to check the burn transaction on the destination chain by using standard Komodo notarisation process without the need to create proof objects additionally.")])]),t._v(" "),a("h2",{attrs:{id:"migrate-createburntransaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-createburntransaction","aria-hidden":"true"}},[t._v("#")]),t._v(" migrate_createburntransaction")]),t._v(" "),a("p",[a("strong",[t._v("migrate_createburntransaction destChain destAddress amount [tokenid]")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("migrate_createburntransaction")]),t._v(" method creates a transaction burning some amount of coins or tokens. The methods also creates payouts object used for creating an import transaction for the burned amount of value. This method should be called on the source chain.\nThe method returns a created burn transaction which should be send to the source chain with "),a("code",[t._v("sendrawtransaction")]),t._v(" method.\nAfter the burn transaction successfully mined it might be needed to wait for some time for the back notarisation with MoMoM fingerprints of the mined block with the burn transaction to reach the source chain.\nThe hex value of the burn transaction along with the other returned value "),a("code",[t._v("payouts")]),t._v(" should be passed to the next method "),a("code",[t._v("migrate_createimporttransaction")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"destChain"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("the destination chain name")])]),t._v(" "),a("tr",[a("td",[t._v('"destAddress"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("address on the destination chain where coins are to be sent or pubkey if tokens are to be sent")])]),t._v(" "),a("tr",[a("td",[t._v('"amount"')]),t._v(" "),a("td",[t._v("(numeric, required)")]),t._v(" "),a("td",[t._v("the amount in coins or tokens that will be burned on the source chain and created on the destination chain. If it is tokens the amount should be set only to 1 (as only migration of non-fungible tokens are supported at this time)")])]),t._v(" "),a("tr",[a("td",[t._v('"tokenid"')]),t._v(" "),a("td",[t._v("(string, optional)")]),t._v(" "),a("td",[t._v("token id in hex, if set, it is tokens are to be migrated")])])])]),t._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"payouts"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("a hex string of the created payouts (to be passed into migrate_createimporttransaction rpc method later)")])]),t._v(" "),a("tr",[a("td",[t._v('"BurnTxHex"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("a hex string of the created burn transaction")])])])]),t._v(" "),a("h2",{attrs:{id:"an-alternative-method-of-creating-a-customized-burn-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#an-alternative-method-of-creating-a-customized-burn-transaction","aria-hidden":"true"}},[t._v("#")]),t._v(" An alternative method of creating a customized burn transaction")]),t._v(" "),a("p",[t._v("If it is needed to create a customized burn transaction there is an additional rpc method "),a("code",[t._v("migrate_converttoexport")]),t._v(" which converts passed transaction to a burn transaction. It adds proof data to the passed transaction and extracts the transaction vouts and calculates and burns their amount by sending it to an OP_RETURN vout which is added to the transaction.\nIt is responsibility of the caller to fund and sign the returned burn transaction with rpc methos "),a("code",[t._v("fundrawtransaction")]),t._v(" and "),a("code",[t._v("signrawtransaction")]),t._v(".\nThe signed burn transaction should be sent to the destination chain by the "),a("code",[t._v("sendrawtansaction")]),t._v(" method.\nNote: this method supports only coins (tokens are not supported).")]),t._v(" "),a("h2",{attrs:{id:"migrate-converttoexport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-converttoexport","aria-hidden":"true"}},[t._v("#")]),t._v(" migrate_converttoexport")]),t._v(" "),a("p",[a("strong",[t._v("migrate_converttoexport burntx")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("migrate_converttoexport")]),t._v(" method adds OP_RETURN object to the passed transaction.\nThe other returned value "),a("code",[t._v("payouts")]),t._v(" should be passed to the next method "),a("code",[t._v("migrate_createimporttransaction")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"arguments-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"burntx"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("the burn transaction in hex")])]),t._v(" "),a("tr",[a("td",[t._v('"destChain"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("the destination chain name")])])])]),t._v(" "),a("h3",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"payouts"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("a hex string of the created payouts (to be passed into migrate_createimporttransaction rpc method later)")])]),t._v(" "),a("tr",[a("td",[t._v('"exportTx"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("a hex string of the returned burn transaction")])])])]),t._v(" "),a("h2",{attrs:{id:"burn-transaction-size-consideration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#burn-transaction-size-consideration","aria-hidden":"true"}},[t._v("#")]),t._v(" Burn transaction size consideration")]),t._v(" "),a("p",[t._v("Because the burn transaction is stored in import transaction OP_RETURN vout which size is limited by 10,001 bytes it is recommended to limit the burn transaction size to the 30% of the OP_RETURN object.")]),t._v(" "),a("h2",{attrs:{id:"migrate-createimporttransaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-createimporttransaction","aria-hidden":"true"}},[t._v("#")]),t._v(" migrate_createimporttransaction")]),t._v(" "),a("p",[a("strong",[t._v("migrate_createimporttransaction burntx payouts [notaryTxid1]...[notaryTxidN]")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("migrate_createimporttransaction")]),t._v(" method performs a initial step in creating an import transaction. This method should be called on the source chain.\nThe method returns a created import transaction in hex. This string should be passed into the "),a("code",[t._v("migrate_completeimporttransaction")]),t._v(" method on the main KMD chain to be extended with MoMoM proof object.\nFor MoMoM backup solution (see later) the created import transaction is not passed to "),a("code",[t._v("migrate_completeimporttransaction")]),t._v(" method.")]),t._v(" "),a("h3",{attrs:{id:"arguments-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"burntx"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("burn transaction in hex created on the previous step")])]),t._v(" "),a("tr",[a("td",[t._v('"payouts"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("payouts object in hex created on the previous step and used for creating an import transaction")])]),t._v(" "),a("tr",[a("td",[t._v('"notaryTxid1"')]),t._v(" "),a("td",[t._v("(string, optional)")]),t._v(" "),a("td",[t._v("notary approval transaction id 1, passed if MoMoM backup solution is used for notarisation")])])])]),t._v(" "),a("p",[t._v('...\n"notaryTxidN" |(string, optional) |notary approval transaction id N, passed if MoMoM backup solution is used for notarisation')]),t._v(" "),a("h3",{attrs:{id:"response-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"ImportTxHex"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("a hex string of the created import transaction")])])])]),t._v(" "),a("p",[t._v("Or errors may be returned. In case of errors it might be necessary to wait for some time before the back notarisations objects are sent in the destination chain.")]),t._v(" "),a("h2",{attrs:{id:"migrate-completeimporttransaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-completeimporttransaction","aria-hidden":"true"}},[t._v("#")]),t._v(" migrate_completeimporttransaction")]),t._v(" "),a("p",[a("strong",[t._v("migrate_completeimporttransaction importtx")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("migrate_completeimporttransaction")]),t._v(" method performs the finalizing step in creating an import transaction. This method should be called on the KMD chain.\nThe method returns the import transaction in hex updated with MoMoM proof object which would confirm that the burn transaction exists in the source chain.\nThis value of finalized import transaction may be passed to "),a("code",[t._v("sendrawtransaction")]),t._v(" rpc on the destination chain.\nIn case of errors which may be returned while sending the import transaction it might be necessary to wait for some time before the notarisations objects are stored in the destination chain.")]),t._v(" "),a("h3",{attrs:{id:"arguments-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-4","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"importtx"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("burn transaction in hex created on the previous step")])]),t._v(" "),a("tr",[a("td",[t._v('"offset"')]),t._v(" "),a("td",[t._v("(string, optional)")]),t._v(" "),a("td",[t._v("offset of the current kmd blockchain height to search for a MoMoM")])])])]),t._v(" "),a("h3",{attrs:{id:"response-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-4","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"ImportTxHex"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("import transaction in hex extended with MoMoM proof of the burn tx")])])])]),t._v(" "),a("p",[t._v("Or errors may be returned. In case of errors it might be necessary to wait for some time before the notarisations objects are stored in the KMD chain.")]),t._v(" "),a("h1",{attrs:{id:"notarisation-backup-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notarisation-backup-solution","aria-hidden":"true"}},[t._v("#")]),t._v(" notarisation backup solution")]),t._v(" "),a("p",[t._v("There is an alternate solution for notarising burn transaction by the notary operators in case of MoMoM notarisation fails or slow.\nFor this the notary operators pick burn transactions sent to a special publishing resource, check them and return ids of transactions with burn transaction proof objects which are created in destination chains.\nThe worflow:")]),t._v(" "),a("ul",[a("li",[t._v("A user creates a burn transaction with the above stated "),a("code",[t._v("migrate_createburntransaction")]),t._v(" rpc method and publishes its hexademical representation to a publishing resource which is monitored by the notary operators (currently the discord channel ...???)")]),t._v(" "),a("li",[t._v("The notary operators pick the burn transaction and check its structure and existence in the source chain with the rpc method "),a("code",[t._v("migrate_checkburntransactionsource")]),t._v(". If the burn transaction is successfully validated, the notary operators create approval transactions in the destination chain and publish their transaction ids back into the publishing resource.")]),t._v(" "),a("li",[t._v("The user collects the transaction ids and calls "),a("code",[t._v("migrate_createimporttransaction")]),t._v(" method, passing into it the collected notary approval transaction ids. Currently it is enough to have at least 5 successful notary approval transactions for an import transaction to be considered as valid in the destination chain.")])]),t._v(" "),a("h2",{attrs:{id:"migrate-checkburntransactionsource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-checkburntransactionsource","aria-hidden":"true"}},[t._v("#")]),t._v(" migrate_checkburntransactionsource")]),t._v(" "),a("p",[a("strong",[t._v("migrate_checkburntransactionsource burntx")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("migrate_checkburntransactionsource")]),t._v(" method allows to a notary operator to check the burn transaction structure and verify its presence in the source chain.")]),t._v(" "),a("h3",{attrs:{id:"arguments-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-5","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"burntx"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("the burn transaction in hex")])])])]),t._v(" "),a("h3",{attrs:{id:"response-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-5","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"sourceSymbol"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("source chain name")])]),t._v(" "),a("tr",[a("td",[t._v('"targetSymbol"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("target chain name")])]),t._v(" "),a("tr",[a("td",[t._v('"targetCCid"')]),t._v(" "),a("td",[t._v("(number)")]),t._v(" "),a("td",[t._v("target chain CCid")])]),t._v(" "),a("tr",[a("td",[t._v('"tokenid"')]),t._v(" "),a("td",[t._v("(string, optional)")]),t._v(" "),a("td",[t._v("token id if it is token to migrate")])]),t._v(" "),a("tr",[a("td",[t._v('"TxOutProof"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("proof of burn transaction existence in the source chain")])])])]),t._v(" "),a("h2",{attrs:{id:"migrate-createnotaryapprovaltransaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-createnotaryapprovaltransaction","aria-hidden":"true"}},[t._v("#")]),t._v(" migrate_createnotaryapprovaltransaction")]),t._v(" "),a("p",[a("strong",[t._v("migrate_createnotaryapprovaltransaction burntxid txoutproof")])]),t._v(" "),a("p",[t._v("A notary operator uses the "),a("code",[t._v("migrate_createnotaryapprovaltransaction")]),t._v(" method to create an approval transaction in the destination chain with the proof of the burn transaction existence in the source chain.\nReturned notary transaction should be sent to the destination chain with "),a("code",[t._v("sendrawtransaction")]),t._v(" method")]),t._v(" "),a("h3",{attrs:{id:"arguments-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-6","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"burntxid"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("the burn transaction id")])]),t._v(" "),a("tr",[a("td",[t._v('"txoutproof"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("the proof of the burn transaction existence")])])])]),t._v(" "),a("h3",{attrs:{id:"response-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-6","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"NotaryTxHex"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("notary approval transaction in hex")])])])]),t._v(" "),a("h1",{attrs:{id:"self-import-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#self-import-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Self import API")]),t._v(" "),a("p",[t._v("Self import API allows to a trusted pubkey to create more coins in the same chain.\nRequirement: the chain should have command line parameters "),a("code",[t._v("-ac_import=PUBLIC")]),t._v(" and "),a("code",[t._v("-ac_pubkey")]),t._v(" set to a pubkey which is allowed to create coins.\nFor creating more coins in the chain with -ac_import=PUBKEY enabled there is an rpc method "),a("code",[t._v("selfimport")]),t._v(".\nThe method return a source transaction that contains a parameter with amount of coins to create and is a proof of the trusted pubkey owner's intention to create coins in the chain.\nThe returned source transaction should be sent into the chain with the "),a("code",[t._v("sendrawtransaction")]),t._v(" method. The source transaction spends txfee=10000 satoshis amount from the ac_pubkey owner UXTOs.\nThen, after the source transaction is mined, the import transactions also should be sent to the chain with the "),a("code",[t._v("sendrawtransaction")]),t._v(" method. After it is mined, its vout would contain the amount of created coins on the appointed destination address.")]),t._v(" "),a("h2",{attrs:{id:"selfimport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selfimport","aria-hidden":"true"}},[t._v("#")]),t._v(" selfimport")]),t._v(" "),a("p",[a("strong",[t._v("selfimport destAddress amount")])]),t._v(" "),a("h3",{attrs:{id:"arguments-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-7","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"destAddress"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("address where created coins should be sent")])]),t._v(" "),a("tr",[a("td",[t._v('"amount"')]),t._v(" "),a("td",[t._v("(number, required)")]),t._v(" "),a("td",[t._v("amount in coins to create")])])])]),t._v(" "),a("h3",{attrs:{id:"response-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-7","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"SourceTxHex"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("source transaction in hex")])]),t._v(" "),a("tr",[a("td",[t._v('"ImportTxHex"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("import transaction in hex")])])])]),t._v(" "),a("h1",{attrs:{id:"notary-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notary-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Notary API")]),t._v(" "),a("p",[t._v("Several methods are used by notary nodes to get block chain 'fingerprints' and notarisation data from chain.")]),t._v(" "),a("h2",{attrs:{id:"calc-mom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calc-mom","aria-hidden":"true"}},[t._v("#")]),t._v(" calc_MoM")]),t._v(" "),a("p",[a("strong",[t._v("calc_MoM height MoMdepth")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("calc_MoM")]),t._v(" method calculates merkle root of blocks' merkle roots (MoM) value starting from the block of the appointed height for the passed depth. This method should be run on an asset chain.")]),t._v(" "),a("h3",{attrs:{id:"arguments-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-8","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"height"')]),t._v(" "),a("td",[t._v("(number, required)")]),t._v(" "),a("td",[t._v("block height from which MoM calculation begins")])]),t._v(" "),a("tr",[a("td",[t._v('"MoMdepth"')]),t._v(" "),a("td",[t._v("(number, required)")]),t._v(" "),a("td",[t._v("number of blocks to include in MoM calculation")])])])]),t._v(" "),a("h3",{attrs:{id:"response-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-8","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"coin"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("chain name")])]),t._v(" "),a("tr",[a("td",[t._v('"height"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("starting block height")])]),t._v(" "),a("tr",[a("td",[t._v('"MoMdepth"')]),t._v(" "),a("td",[t._v("(number)")]),t._v(" "),a("td",[t._v("number of blocks to include in MoM calculation")])]),t._v(" "),a("tr",[a("td",[t._v('"MoM"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("MoM value")])])])]),t._v(" "),a("h2",{attrs:{id:"momomdata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#momomdata","aria-hidden":"true"}},[t._v("#")]),t._v(" MoMoMdata")]),t._v(" "),a("p",[a("strong",[t._v("MoMoMdata symbol kmdheight ccid")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("MoMoMdata")]),t._v(" method calculates merkle root of merkle roots of blocks' merkle roots (MoMoM) value starting from the block of the appointed height for the data of the chain with passed name and ccid. The method should be run on the KMD chain.")]),t._v(" "),a("h3",{attrs:{id:"arguments-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-9","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"symbol"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("chain name for which data MoMoM value is calculated")])]),t._v(" "),a("tr",[a("td",[t._v('"kmdheight"')]),t._v(" "),a("td",[t._v("(number, required)")]),t._v(" "),a("td",[t._v("number of blocks to include in MoM calculation")])]),t._v(" "),a("tr",[a("td",[t._v('"ccid"')]),t._v(" "),a("td",[t._v("(number, required)")]),t._v(" "),a("td",[t._v("chain ccid")])])])]),t._v(" "),a("h3",{attrs:{id:"response-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-9","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"coin"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("chain name")])]),t._v(" "),a("tr",[a("td",[t._v('"kmdheight"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("starting block height")])]),t._v(" "),a("tr",[a("td",[t._v('"ccid"')]),t._v(" "),a("td",[t._v("(number)")]),t._v(" "),a("td",[t._v("chain ccid")])]),t._v(" "),a("tr",[a("td",[t._v('"MoMs"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("array of MoM values")])]),t._v(" "),a("tr",[a("td",[t._v('"notarisationHash"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("the first found notarisation transaction id for the chain")])]),t._v(" "),a("tr",[a("td",[t._v('"MoMoM"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("MoMoM value")])])])]),t._v(" "),a("h2",{attrs:{id:"assetchainproof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assetchainproof","aria-hidden":"true"}},[t._v("#")]),t._v(" assetchainproof")]),t._v(" "),a("p",[a("strong",[t._v("assetchainproof txid")])]),t._v(" "),a("p",[t._v("For given transaction id the "),a("code",[t._v("assetchainproof")]),t._v(" method scans the chain for the back MoM notarisation for this transaction and returns a proof object with MoM branch. Scanning is performed from the height upto the chain tip but no more than 1440 blocks.")]),t._v(" "),a("h3",{attrs:{id:"arguments-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-10","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"txid"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("transaction id for which a proof object is returned")])])])]),t._v(" "),a("h3",{attrs:{id:"response-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-10","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[t._v("for a txid returns a proof object with MoM branch in hex.")]),t._v(" "),a("h2",{attrs:{id:"getnotarisationsforblock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getnotarisationsforblock","aria-hidden":"true"}},[t._v("#")]),t._v(" getNotarisationsForBlock")]),t._v(" "),a("p",[a("strong",[t._v("getNotarisationsForBlock blockHash")])]),t._v(" "),a("p",[t._v("For the block hash returns notarisation transactions within the block.")]),t._v(" "),a("h3",{attrs:{id:"arguments-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-11","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"blockHash"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("block hash where notarisations are searched")])])])]),t._v(" "),a("h3",{attrs:{id:"response-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-11","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[t._v("returns array of pairs of values "),a("code",[t._v("<notarisation txid")]),t._v("> "),a("code",[t._v("<notarisation data in hex")]),t._v(">")]),t._v(" "),a("h2",{attrs:{id:"scannotarisationsdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scannotarisationsdb","aria-hidden":"true"}},[t._v("#")]),t._v(" scanNotarisationsDB")]),t._v(" "),a("p",[a("strong",[t._v("scanNotarisationsDB blockHeight symbol [blocksLimit=1440]")])]),t._v(" "),a("p",[t._v("Scans notarisations db backwards from the block height for a notarisation of given symbol.")]),t._v(" "),a("h3",{attrs:{id:"arguments-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-12","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"blockHeight"')]),t._v(" "),a("td",[t._v("(number, required)")]),t._v(" "),a("td",[t._v("starting block height where notarisations are searched")])]),t._v(" "),a("tr",[a("td",[t._v('"symbol"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("chain name for which notarisations are searched")])]),t._v(" "),a("tr",[a("td",[t._v('"blocksLimit"')]),t._v(" "),a("td",[t._v("(number, optional)")]),t._v(" "),a("td",[t._v("optional block number to search for notarisations in depth")])])])]),t._v(" "),a("h3",{attrs:{id:"response-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-12","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[t._v("returns array of "),a("code",[t._v("<notarisation txid")]),t._v("> "),a("code",[t._v("<notarisation data in hex")]),t._v(">")]),t._v(" "),a("h1",{attrs:{id:"user-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-api","aria-hidden":"true"}},[t._v("#")]),t._v(" User API")]),t._v(" "),a("p",[t._v("There are some utility methods for getting information about burn transactions or import transactions existing in a chain.")]),t._v(" "),a("h2",{attrs:{id:"getimports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getimports","aria-hidden":"true"}},[t._v("#")]),t._v(" getimports")]),t._v(" "),a("p",[a("strong",[t._v("getimports hash|height")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("getimports")]),t._v(" lists import transactions in the chain's block appointed by a block number or block hash parameter.")]),t._v(" "),a("h3",{attrs:{id:"arguments-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-13","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"hash or height"')]),t._v(" "),a("td",[t._v("(string or number, required)")]),t._v(" "),a("td",[t._v("block's hash or height to search import transactions in")])])])]),t._v(" "),a("h3",{attrs:{id:"response-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-13","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"transaction id"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("import transaction id")])]),t._v(" "),a("tr",[a("td",[t._v('"amount"')]),t._v(" "),a("td",[t._v("(number)")]),t._v(" "),a("td",[t._v("import transaction value in coins")])]),t._v(" "),a("tr",[a("td",[t._v('"address"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("destination address")])]),t._v(" "),a("tr",[a("td",[t._v('"export:"')]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("export or burn transaction infomation")])]),t._v(" "),a("tr",[a("td",[t._v('"txid"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("export transaction id")])]),t._v(" "),a("tr",[a("td",[t._v('"amount"')]),t._v(" "),a("td",[t._v("(number)")]),t._v(" "),a("td",[t._v("export transaction value")])]),t._v(" "),a("tr",[a("td",[t._v('"txid"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("export transaction id")])]),t._v(" "),a("tr",[a("td",[t._v('"source"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("source chain name")])]),t._v(" "),a("tr",[a("td",[t._v('"tokenid"')]),t._v(" "),a("td",[t._v("(string,optional)")]),t._v(" "),a("td",[t._v("source chain token id, if tokens are imported")])]),t._v(" "),a("tr",[a("td",[t._v('"TotalImported"')]),t._v(" "),a("td",[t._v("(number)")]),t._v(" "),a("td",[t._v("total imported amount in coins")])])])]),t._v(" "),a("h2",{attrs:{id:"getwalletburntransaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getwalletburntransaction","aria-hidden":"true"}},[t._v("#")]),t._v(" getwalletburntransaction")]),t._v(" "),a("p",[a("strong",[t._v("getwalletburntransactions")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("getwalletburntransactions")]),t._v(" lists burn transactions in the current wallet.")]),t._v(" "),a("h3",{attrs:{id:"arguments-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-14","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("p",[t._v("none")]),t._v(" "),a("h3",{attrs:{id:"response-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-14","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"txid"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("burn transaction id")])]),t._v(" "),a("tr",[a("td",[t._v('"burnedAmount"')]),t._v(" "),a("td",[t._v("(number)")]),t._v(" "),a("td",[t._v("burned value in coins")])]),t._v(" "),a("tr",[a("td",[t._v('"tokenid"')]),t._v(" "),a("td",[t._v("(string, optional)")]),t._v(" "),a("td",[t._v("token id, if tokens are burned")])]),t._v(" "),a("tr",[a("td",[t._v('"targetSymbol"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v("target chain name")])]),t._v(" "),a("tr",[a("td",[t._v('"targetCCid"')]),t._v(" "),a("td",[t._v("(number)")]),t._v(" "),a("td",[t._v("target chain CCid")])])])])])},[],!1,null,null,null);e.default=n.exports}}]);
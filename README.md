## 第二步

第二步的目标是：jquery..等文件已经分离出单独的bundle了,

那么在做某一个页面的时候还需要一些插件，这些文件是不希望被放到`vendor.bundle`中的.


> 所有的entry中的共同部分才被CommonsChunkPlugin集合到一起


如果不将 `a` 放到 `vendor` 则每个`entry`都自己包含

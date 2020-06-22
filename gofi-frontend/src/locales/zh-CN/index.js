import menu from './menu'
import setup from './setup'
import setting from './setting'
import login from './login'
export default {
  ...menu,
  ...setup,
  ...setting,
  ...login,
  'description.admin': '管理员',
  'description.normalUser': '普通用户',
  'description.ChangePasswordSoonTip': '为保证您的账户安全，首次登录后请尽快修改密码。',
  'description.placeHolderForNewPassword': '请输入新密码',
  'description.placeHolderForConfirmPassword': '请再次输入新密码',
  'description.confirmPasswordError': '确认密码错误',
  'description.changeSuccess': '修改成功',
  'description.usernameOrPasswordWrong': '用户名或密码错误',
  'action.edit': '编辑',
  'action.cancel': '取消',
  'action.submit': '提交',
  'action.save': '保存',
  'action.modify': '修改',
  'action.confirm': '确认',
  'action.login': '登录',
  'action.logout': '登出',
  'action.changePassword': '修改密码',
  'auth.requireAuth.content': '请先登录',
  'auth.logoutConfirm.title': '警告',
  'auth.logoutConfirm.content': '真的要注销登录吗？',
  'auth.loginSuccess.title': '欢迎',
  'auth.loginSuccess.content': '欢迎回来',
  'auth.logoutSuccess.title': '再见',
  'auth.logoutSuccess.content': '下次再见',
  'notice.switchLanguage': '正在切换语言...',
  'preview.nav.userGuide': '使用文档',
  'preview.nav.github': 'Github',
  'preview.tip.title': '当前处于预览模式',
  'preview.tip.message': '为了提供一致的体验，在该模式下，无法更改主题样式，也无法更改文件仓库路径，但是您可以自由进行上传下载测试。',
  'preview.notSupport': '非常抱歉，暂不支持对该文件的预览',
  'footer.aboutMe': '关于我',
  'footer.copyRight': 'Copyright © 2019 Sloaix',
  'footer.version': '构建版本',
  'allFile.rootDir': '根目录',
  'allFile.parentDir': '返回',
  'allFile.upload': '上传',
  'allFile.name': '名称',
  'allFile.size': '大小',
  'allFile.action': '操作',
  'allFile.lastModified': '最后修改时间',
  'allFile.download': '下载',
  'network.error': '网络连接出现错误，请检查您的网络，稍后再试。',
  'upload.failed': '上传失败',
  'upload.success': '上传成功',
  'upload.fileUploading': '{0} 上传中...',
  'upload.uploadFailed': '{0} 上传失败',
  'upload.uploadSuccess': '{0} 上传成功',
  'fallback.saveSuccess': '保存成功',
  'fallback.saveFailed': '保存失败',
  'fallback.submitSuccess': '提交成功',
  'fallback.submitFailed': '提交失败',
  'fallback.error': '错误',
  'fallback.installFailed': '安装失败'
}
